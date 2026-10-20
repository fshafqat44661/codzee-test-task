import type { FormattedPost } from "@/lib/types";
import { APP_HOME_URL, APP_LOGIN_URL } from "@/lib/constants";
import { PostCard } from "./PostCard";

type PostsGridProps = {
  posts: FormattedPost[];
  emptyMessage?: string;
  /** Show CTA when the backend requires auth for listing posts. */
  authRequired?: boolean;
};

export function PostsGrid({
  posts,
  emptyMessage = "No posts yet. Check back soon.",
  authRequired = false,
}: PostsGridProps) {
  if (!posts.length) {
    return (
      <div className="rounded-2xl border border-dashed border-ink/15 bg-white px-6 py-16 text-center">
        <p className="font-display text-xl font-semibold text-ink">
          {authRequired ? "Posts are in the Bell3 app" : "Nothing here yet"}
        </p>
        <p className="mx-auto mt-2 max-w-md text-sm text-ink/55">
          {authRequired
            ? "Browse and support creators in the Bell3 app. Sign in there to see the full feed, then return here for news and highlights."
            : emptyMessage}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={APP_HOME_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-dark"
          >
            Open Bell3 app
          </a>
          <a
            href={APP_LOGIN_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand"
          >
            Sign in to post
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
