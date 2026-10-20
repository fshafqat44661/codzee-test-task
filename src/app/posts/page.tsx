import type { Metadata } from "next";
import Link from "next/link";
import { PostsGrid } from "@/components/PostsGrid";
import { getPublicPosts } from "@/lib/api";
import { APP_LOGIN_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "All Posts",
  description: "Browse all public posts from Bell3 content creators.",
};

type Props = {
  searchParams: { page?: string; sort?: string };
};

const SORT_OPTIONS = [
  { value: "latest", label: "Latest" },
  { value: "trending", label: "Trending" },
  { value: "topRingersPosts", label: "Top ringers" },
] as const;

export default async function AllPostsPage({ searchParams }: Props) {
  const page = Math.max(1, Number(searchParams.page) || 1);
  const sort =
    SORT_OPTIONS.find((s) => s.value === searchParams.sort)?.value || "latest";
  const { posts, meta, authRequired } = await getPublicPosts(page, sort);
  const lastPage = meta?.last_page || 1;

  return (
    <div className="bg-surface">
      <div className="border-b border-ink/5 bg-white px-4 py-14 text-center sm:px-6 sm:py-16">
        <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl md:text-5xl">
          All Posts
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-base text-ink/65">
          Explore public posts from the Bell3 community. Ready to share your
          own?{" "}
          <a
            href={APP_LOGIN_URL}
            className="font-semibold text-brand underline-offset-2 hover:underline"
          >
            Post now
          </a>
          .
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {SORT_OPTIONS.map((opt) => {
            const active = sort === opt.value;
            return (
              <Link
                key={opt.value}
                href={`/posts?sort=${opt.value}`}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-brand text-white"
                    : "bg-surface-warm text-ink/70 hover:text-ink"
                }`}
              >
                {opt.label}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <PostsGrid
          posts={posts}
          authRequired={authRequired}
          emptyMessage="No posts found. Creators can publish from the Bell3 app."
        />

        {lastPage > 1 && (
          <nav
            className="mt-12 flex items-center justify-center gap-3"
            aria-label="Pagination"
          >
            {page > 1 ? (
              <Link
                href={`/posts?sort=${sort}&page=${page - 1}`}
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
                href={`/posts?sort=${sort}&page=${page + 1}`}
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
