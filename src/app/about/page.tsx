import type { Metadata } from "next";
import Image from "next/image";
import { StoreBadges } from "@/components/StoreBadges";
import { IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Learn about Bell3 — a community-driven social crowdfunding platform for content creators.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink px-4 py-16 text-center sm:px-6 sm:py-20">
        <h1 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          About Bell3
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
          A community-driven platform dedicated to supporting talented content
          creators from all walks of life.
        </p>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8 lg:py-24">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src={IMAGES.vision}
              alt="Our vision"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
              Our Vision
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/70 sm:text-lg">
              Our mission is to provide a space for writers, bloggers, and
              readers to connect, inspire, and empower each other in pursuing
              their creative passions.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70 sm:text-lg">
              Whether you&apos;re a seasoned writer or a budding blogger, Bell3
              offers resources and opportunities to help you grow — and accept
              donations for your work without a fixed funding goal.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-warm">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8 lg:py-24">
          <div className="order-2 md:order-1">
            <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
              Building a Community of Creativity
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/70 sm:text-lg">
              We believe everyone has a story to tell. Bell3 gives creators a
              platform to share unique perspectives and experiences with the
              world.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70 sm:text-lg">
              Storytelling inspires change, sparks conversation, and brings
              people together. Supporting creators on Bell3 helps promote a
              culture of creativity and innovation.
            </p>
            <StoreBadges className="mt-8" size="sm" />
          </div>
          <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-2xl md:order-2">
            <Image
              src={IMAGES.community}
              alt="Creative community"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-center sm:py-20">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Ready to join?
          </h2>
          <p className="mt-3 text-white/70">
            Download the app and start connecting with creators today.
          </p>
          <div className="mt-8 flex justify-center">
            <StoreBadges />
          </div>
        </div>
      </section>
    </>
  );
}
