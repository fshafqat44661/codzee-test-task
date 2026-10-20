import type { Metadata } from "next";
import Link from "next/link";
import { PostsGrid } from "@/components/PostsGrid";
import { getNewsFeedPosts } from "@/lib/api";

export const metadata: Metadata = {
  title: "News Feed",
  description: "Latest posts and updates from the Bell3 creator community.",
};

type Props = {
  searchParams: { page?: string };
};

export default async function NewsFeedPage({ searchParams }: Props) {
  const page = Math.max(1, Number(searchParams.page) || 1);
  const { posts, meta, authRequired } = await getNewsFeedPosts(page);
  const lastPage = meta?.last_page || 1;

  return (
    <div className="bg-surface-warm">
      <div className="border-b border-ink/5 bg-ink px-4 py-14 text-center sm:px-6 sm:py-16">
        <h1 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          News Feed
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-base text-white/70">
          Fresh content from Bell3 creators — stories, ideas, and inspiration
          updated daily.
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <PostsGrid
          posts={posts}
          authRequired={authRequired}
          emptyMessage="No news feed posts available right now. Check back soon."
        />

        {lastPage > 1 && (
          <nav
            className="mt-12 flex items-center justify-center gap-3"
            aria-label="Pagination"
          >
            {page > 1 ? (
              <Link
                href={`/news-feed?page=${page - 1}`}
                className="rounded-full border border-ink/15 bg-white px-5 py-2 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand"
              >
                Previous
              </Link>
            ) : (
              <span className="rounded-full border border-ink/5 px-5 py-2 text-sm text-ink/30">
                Previous
              </span>
            )}
            <span className="text-sm text-ink/60">
              Page {page} of {lastPage}
            </span>
            {page < lastPage ? (
              <Link
                href={`/news-feed?page=${page + 1}`}
                className="rounded-full border border-ink/15 bg-white px-5 py-2 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand"
              >
                Next
              </Link>
            ) : (
              <span className="rounded-full border border-ink/5 px-5 py-2 text-sm text-ink/30">
                Next
              </span>
            )}
          </nav>
        )}
      </div>
    </div>
  );
}
