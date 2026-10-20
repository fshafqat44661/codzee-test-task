import Image from "next/image";
import Link from "next/link";
import type { FormattedPost } from "@/lib/types";
import { APP_HOME_URL } from "@/lib/constants";

type PostCardProps = {
  post: FormattedPost;
};

export function PostCard({ post }: PostCardProps) {
  const href = `${APP_HOME_URL}/post/${post.id}`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-ink/5 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <Link href={href} target="_blank" rel="noreferrer noopener" className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-surface-warm">
          {post.image && post.fileType !== "video" ? (
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-brand/20 to-ink/10 font-display text-4xl font-bold text-brand/40">
              B3
            </div>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-full bg-surface-warm">
            {post.creatorAvatar ? (
              <Image
                src={post.creatorAvatar}
                alt={post.creatorName}
                fill
                className="object-cover"
                sizes="36px"
              />
            ) : (
              <span className="flex h-full w-full items-center justify-center text-xs font-bold text-ink/40">
                {post.creatorName.slice(0, 1)}
              </span>
            )}
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-ink">
              {post.creatorName}
            </p>
            <p className="truncate text-xs text-ink/50">
              @{post.creatorUsername}
              {post.timeAgo ? ` · ${post.timeAgo}` : ""}
            </p>
          </div>
        </div>

        <Link href={href} target="_blank" rel="noreferrer noopener">
          <h3 className="font-display text-lg font-bold leading-snug text-ink line-clamp-2 group-hover:text-brand">
            {post.title}
          </h3>
          {post.content ? (
            <p className="mt-1 text-sm leading-relaxed text-ink/65 line-clamp-3">
              {post.content}
            </p>
          ) : null}
        </Link>

        {post.hashtags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {post.hashtags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-brand/80"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex items-center gap-4 border-t border-ink/5 pt-3 text-xs text-ink/45">
          <span>{post.likes} likes</span>
          <span>{post.comments} comments</span>
          <span>{post.views} views</span>
        </div>
      </div>
    </article>
  );
}
