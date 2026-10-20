import type {
  Bell3Post,
  FormattedPost,
  PaginationMeta,
  PostsResponse,
  PostMedia,
} from "./types";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BELL3_BACKEND_URL?.replace(/\/$/, "") || "";

/** Server-only service/user Bearer for endpoints that require auth. */
function getApiBearerToken(): string | null {
  const raw =
    process.env.BELL3_API_TOKEN ||
    process.env.BELL3_API_BEARER_TOKEN ||
    "";
  const token = raw.trim();
  if (!token) return null;
  return token.replace(/^Bearer\s+/i, "");
}

function mediaUrl(path?: string | null): string | null {
  if (!path) return null;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${BACKEND_URL}/storage/${path.replace(/^\//, "")}`;
}

function getMediaFiles(post: Bell3Post): PostMedia[] {
  const files =
    post.content_files || post.media || post.files || ([] as PostMedia[]);
  return Array.isArray(files) ? files : [];
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function formatPost(post: Bell3Post): FormattedPost {
  const media = getMediaFiles(post);
  const first = media[0];
  const image = mediaUrl(
    first?.file_reference_url || first?.url || null
  );
  const user = post.user || post.creator || {};
  const creatorName =
    user.creator_name ||
    [user.first_name, user.last_name].filter(Boolean).join(" ") ||
    user.username ||
    "Creator";
  const creatorUsername =
    user.creator_username || user.username || user.creator_name || "creator";
  const avatar = mediaUrl(
    user.creator_profile || user.profile_photo_url || null
  );
  const hashtags = (post.hashtags || [])
    .map((h) => (typeof h === "string" ? h : h.name || h.tag || ""))
    .filter(Boolean)
    .map((t) => t.replace(/^#/, ""));

  const raw = post.content || post.text_content || "";

  return {
    id: String(post.id),
    title: post.title || "Untitled",
    content: stripHtml(raw),
    image,
    fileType: first?.file_type || "image",
    likes: Number(post.likes_count || 0),
    comments: Number(post.comments_count || 0),
    views: Number(post.views_count || 0),
    timeAgo: post.time_ago || "",
    creatorName,
    creatorUsername,
    creatorAvatar: avatar,
    hashtags,
  };
}

function extractPosts(payload: PostsResponse | Bell3Post[]): {
  posts: Bell3Post[];
  meta: PaginationMeta | null;
} {
  if (Array.isArray(payload)) {
    return { posts: payload, meta: null };
  }

  const raw = payload?.data;
  const posts = Array.isArray(raw)
    ? raw
    : Array.isArray(raw?.data)
      ? raw.data
      : Array.isArray(payload?.posts)
        ? payload.posts
        : [];

  const meta =
    payload.meta ||
    payload.pagination ||
    (raw && !Array.isArray(raw) ? raw.meta : null) ||
    null;

  return { posts, meta };
}

export type PostsFetchResult = {
  posts: FormattedPost[];
  meta: PaginationMeta | null;
  /** True when the API rejected the request as unauthenticated/forbidden. */
  authRequired?: boolean;
  error?: string;
};

async function fetchJson(path: string): Promise<PostsResponse | Bell3Post[]> {
  if (!BACKEND_URL) {
    throw new Error("NEXT_PUBLIC_BELL3_BACKEND_URL is not configured");
  }

  const url = `${BACKEND_URL}${path.startsWith("/") ? path : `/${path}`}`;
  const headers: Record<string, string> = {
    Accept: "application/json",
    "ngrok-skip-browser-warning": "true",
  };

  const bearer = getApiBearerToken();
  if (bearer) {
    headers.Authorization = `Bearer ${bearer}`;
  }

  const res = await fetch(url, {
    headers,
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    const err = new Error(`API ${res.status}: ${path}`) as Error & {
      status?: number;
    };
    err.status = res.status;
    throw err;
  }

  return res.json();
}

function isAuthError(err: unknown): boolean {
  const status = (err as { status?: number })?.status;
  return status === 401 || status === 403;
}

/** Public posts — used for All Posts (and News Feed fallback). */
export async function getPublicPosts(
  page = 1,
  orderType: "latest" | "trending" | "topRingersPosts" = "latest"
): Promise<PostsFetchResult> {
  if (!BACKEND_URL) {
    return {
      posts: [],
      meta: null,
      error: "NEXT_PUBLIC_BELL3_BACKEND_URL is not configured",
    };
  }

  try {
    const data = await fetchJson(
      `/web/content/posts/all?page=${page}&order_type=${orderType}`
    );
    const { posts, meta } = extractPosts(data);
    return { posts: posts.map(formatPost), meta };
  } catch (err) {
    console.error("getPublicPosts failed:", err);
    return {
      posts: [],
      meta: null,
      authRequired: isAuthError(err),
      error: err instanceof Error ? err.message : "Unknown error",
    };
  }
}

/**
 * News feed endpoint (same as creator portal).
 * Falls back to public latest posts if the feed requires auth or fails.
 */
export async function getNewsFeedPosts(
  page = 1
): Promise<PostsFetchResult> {
  if (!BACKEND_URL) {
    return {
      posts: [],
      meta: null,
      error: "NEXT_PUBLIC_BELL3_BACKEND_URL is not configured",
    };
  }

  try {
    const data = await fetchJson(
      `/web/user/newsfeed/posts?page=${page}&order_type=latest`
    );
    const { posts, meta } = extractPosts(data);
    if (posts.length > 0) {
      return { posts: posts.map(formatPost), meta };
    }
  } catch (err) {
    console.warn("News feed unavailable, falling back to public posts:", err);
  }

  return getPublicPosts(page, "latest");
}
