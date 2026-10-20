import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
// import { PostsGrid } from "@/components/PostsGrid";
import { StoreBadges } from "@/components/StoreBadges";
// import { getPublicPosts } from "@/lib/api";
import { APP_LOGIN_URL, CREATOR_AVATARS, IMAGES } from "@/lib/constants";

export default async function HomePage() {
  // const { posts, authRequired } = await getPublicPosts(1, "latest");
  // const featured = posts.slice(0, 6);

  return (
    <>
      <Hero />

      {/* Start Posting — left: narrower + taller; right: overlaps on top */}
      <section className="relative w-full overflow-hidden bg-white ">
        <div className="relative mx-auto h-[640px] w-[88%] md:mx-0 md:ml-0 md:h-[780px] md:w-[58%]">
          <Image
            src={IMAGES.startPosting}
            alt="Stationery"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 768px) 88vw, 48vw"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center">
            <h2 className="font-proxima text-[clamp(2.5rem,5vw,56px)] font-bold leading-normal text-white">
              Start Posting
            </h2>
            <a
              href={APP_LOGIN_URL}
              aria-label="POST NOW"
              className="inline-flex items-center gap-2 rounded-md bg-brand px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brand-dark"
            >
              <span>POST NOW</span>
              <ArrowIcon />
            </a>
          </div>
        </div>

        <a
          href="https://app.bell3.net"
          target="_blank"
          rel="noreferrer noopener"
          className="relative z-20 mx-auto mt-6 block h-[420px] w-[55%] md:absolute md:right-8 md:top-1/2 md:mt-0 md:h-[560px] md:w-[48%] md:-translate-y-1/2 lg:right-12"
        >
          <Image
            src={IMAGES.appPreview}
            alt="User posts from Bell3 web app"
            fill
            className="object-cover object-center shadow-2xl"
            sizes="(max-width: 768px) 65vw, 38vw"
            priority
          />
        </a>
      </section>

      {/* Vision — text left, image right, full-bleed, no roundness */}
      <section className="grid w-full grid-cols-1 bg-white md:grid-cols-2">
        <div className="flex min-h-[380px] flex-col justify-center px-8 py-12 sm:px-12 md:min-h-[520px] md:px-14 lg:px-16">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl md:text-5xl">
            Our Vision
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/70 sm:text-lg">
            We are a community-driven platform dedicated to supporting talented
            content creators from all walks of life. Our mission is to provide a
            space for writers, bloggers, and readers to connect, inspire, and
            empower each other in pursuing their creative passions.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink/70 sm:text-lg">
            Whether you&apos;re a seasoned writer or a budding blogger, our
            platform offers a wealth of resources and opportunities to help you
            grow.
          </p>
          <StoreBadges className="mt-8" size="sm" />
        </div>

        <div className="relative min-h-[380px] md:min-h-[520px]">
          <Image
            src={IMAGES.vision}
            alt="Creators collaborating"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-36 w-36 opacity-50 sm:h-44 sm:w-44 md:h-56 md:w-56"
              fill="#E7A98F"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </span>
        </div>
      </section>

      {/* Community — community.svg left (wider), native aspect 1062×708 */}
      <section className="bg-brand text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.4fr_1fr] md:gap-12 lg:px-8 lg:py-20">
          <div className="w-full min-w-0">
            <Image
              src={IMAGES.community}
              alt="Creative community"
              width={1062}
              height={708}
              className="h-auto w-full"
              sizes="(max-width: 768px) 100vw, 60vw"
              priority
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
              Building a Community of Creativity
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/90 sm:text-lg">
              We believe that everyone has a story to tell, and we want to give
              talented content creators a platform to share their unique
              perspectives and experiences with the world.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
              By donating to our content creators, you&apos;re not only
              supporting their work, but also helping to promote a culture of
              creativity and innovation.
            </p>
            <StoreBadges className="mt-8" size="sm" />
          </div>
        </div>
      </section>

      {/* Discover Daily — yellow frame + white panel (Wix) */}
      <section className="bg-[#f5c518] px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-5xl bg-white px-8 py-12 sm:px-12 sm:py-14 lg:px-16 lg:py-16">
          <h2 className="font-proxima text-3xl font-bold leading-tight text-brand sm:text-4xl md:text-[42px] md:leading-[1.25]">
            Discover Daily Content from Talented Creators
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-brand sm:text-lg">
            At our Daily Content, talented members of the Bell3 community share
            their unique perspectives, creativity, and ideas. At Bell3, we
            believe that creativity is an essential part of our lives and our
            creators are passionate about their work, and they love nothing more
            than sharing their perspective with others.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-brand sm:text-lg">
            From writers to photographers to graphic designers and more, our
            community is diverse and inclusive, with members from all walks of
            life. We encourage our creators to interact with each other,
            offering feedback, inspiration, and support along the way.
          </p>

          <div className="mt-10 flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
            <StoreBadges size="md" />
            <div className="flex items-center pl-2">
              {CREATOR_AVATARS.map((src, i) => (
                <div
                  key={src}
                  className="relative h-14 w-14 overflow-hidden rounded-full border-[3px] border-white sm:h-16 sm:w-16"
                  style={{ marginLeft: i === 0 ? 0 : -14, zIndex: i + 1 }}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Posts empty-state + news feed / all posts CTAs — hidden for now
        <div className="mx-auto mt-12 max-w-6xl">
          <PostsGrid
            posts={featured}
            authRequired={authRequired}
            emptyMessage="Posts will appear here once creators publish on Bell3."
          />
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/news-feed"
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              View news feed
            </Link>
            <Link
              href="/posts"
              className="rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand"
            >
              All posts
            </Link>
          </div>
        </div>
        */}
      </section>

      {/* Join our Community — wider orange left | white copy */}
      <section className="grid w-full grid-cols-1 md:grid-cols-[1.35fr_1fr]">
        <div className="relative flex min-h-[480px] items-center justify-center overflow-visible bg-brand px-8 py-16 md:min-h-[620px] md:px-14">
          <div className="relative w-full max-w-[520px] pb-10">
            <div className="relative ml-auto aspect-[4/5] w-[78%] overflow-visible">
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={IMAGES.create}
                  alt="Creator working on a laptop"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 90vw, 45vw"
                />
              </div>
              <span
                aria-hidden
                className="absolute -top-1 left-6 text-2xl font-light leading-none text-white sm:left-10 sm:text-3xl"
              >
                +
              </span>
              <span
                aria-hidden
                className="absolute -top-1 left-14 text-2xl font-light leading-none text-white sm:left-20 sm:text-3xl"
              >
                +
              </span>
              <span
                aria-hidden
                className="absolute -bottom-6 -right-3 flex h-14 w-14 items-center justify-center text-white sm:-bottom-8 sm:h-16 sm:w-16"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-12 w-12 sm:h-14 sm:w-14"
                  fill="currentColor"
                >
                  <path d="M2 20h2c.55 0 1-.45 1-1v-7c0-.55-.45-1-1-1H2v9zm19.83-7.12c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66a1.5 1.5 0 0 0-1.33-.84c-.34 0-.65.17-.83.46L8.5 9.5V18h9.23c.89 0 1.67-.54 1.98-1.35l1.62-4.77z" />
                </svg>
              </span>
            </div>
            <div className="absolute -bottom-2 left-0 z-10 aspect-square w-[42%] overflow-hidden shadow-lg sm:-bottom-4 sm:w-[38%]">
              <Image
                src={IMAGES.joinPortrait}
                alt="Community member"
                fill
                className="object-cover object-center"
                sizes="180px"
              />
            </div>
          </div>
        </div>

        <div className="flex min-h-[480px] flex-col justify-center bg-white px-8 py-14 sm:px-12 md:min-h-[620px] md:px-12 lg:px-14">
          <h2 className="font-proxima text-3xl font-bold text-brand sm:text-4xl md:text-5xl">
            Join our Community
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand sm:text-lg">
            Are you a blogger, writer, or content creator looking for a
            community of like-minded individuals to connect with and grow your
            audience? Then you&apos;ve come to the right place!
          </p>
          <p className="mt-4 text-base leading-relaxed text-brand sm:text-lg">
            Our community is dedicated to empowering content creators to share
            their stories, reach new audiences and start accepting donations for
            their work.
          </p>
          <StoreBadges className="mt-8" size="md" />
        </div>
      </section>

      {/* Contact CTA — sticky bg like Hero, square card */}
      <section className="relative h-[115vh] w-full">
        <div className="sticky top-[88px] h-[calc(100dvh-88px)] min-h-[520px] overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ backgroundColor: "#FF5800" }}
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${IMAGES.contactBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: "grayscale(1) contrast(1.1) brightness(1.05)",
              mixBlendMode: "multiply",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              backgroundColor: "#FF7A33",
              mixBlendMode: "soft-light",
            }}
          />
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 flex h-[calc(100dvh-88px)] min-h-[520px] items-center justify-center px-4 sm:px-6">
          <div className="pointer-events-auto w-full max-w-xl bg-white p-8 text-left shadow-xl sm:p-10">
            <h2 className="font-proxima text-2xl font-bold text-brand sm:text-3xl">
              Get in touch and let&apos;s connect together!
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand/90">
              If you have any questions or would like to get in touch with us,
              our team is here to help. Contact us via our website or email and
              we will get back to you as soon as possible.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brand-dark"
            >
              Contact us
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Donate */}
      <section className="bg-ink py-16 text-center sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Support Your Favorite Creators{" "}
            <span className="text-brand">DONATE NOW!</span>
          </h2>
          <div className="mt-8 flex justify-center">
            <StoreBadges />
          </div>
        </div>
      </section>
    </>
  );
}

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 60 60" fill="currentColor" aria-hidden>
      <path d="M46.5 28.9L20.6 3c-.6-.6-1.6-.6-2.2 0l-4.8 4.8c-.6.6-.6 1.6 0 2.2l19.8 20-19.9 19.9c-.6.6-.6 1.6 0 2.2l4.8 4.8c.6.6 1.6.6 2.2 0l21-21 4.8-4.8c.8-.6.8-1.6.2-2.2z" />
    </svg>
  );
}
