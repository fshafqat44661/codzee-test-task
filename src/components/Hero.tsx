"use client";

import { StoreBadges } from "./StoreBadges";

const HERO_DARK = "#D86547";
const HERO_LIGHT = "#F5804F";

/**
 * Sticky hero: background stays pinned until heading + badges scroll off,
 * then the next section comes in.
 */
export function Hero() {
  return (
    <section className="relative h-[115vh] w-full">
      {/* Background stays in view while content scrolls away */}
      <div className="sticky top-[88px] h-[calc(100dvh-88px)] min-h-[520px] overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ backgroundColor: HERO_DARK }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/hero-background.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            filter: "grayscale(1) contrast(1.15) brightness(1.05)",
            mixBlendMode: "multiply",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundColor: HERO_LIGHT,
            mixBlendMode: "soft-light",
          }}
        />
      </div>

      {/* Content starts centered in the first pane, then scrolls up and out */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex h-[calc(100dvh-88px)] min-h-[520px] items-center justify-center">
        <div className="pointer-events-auto mx-auto flex w-full max-w-[960px] flex-col items-center px-4 py-8 text-center sm:px-6">
          <h1
            className="font-proxima font-bold text-white"
            style={{
              fontSize: "clamp(1.75rem, 4.2vw, 65px)",
              lineHeight: 1.2,
              fontWeight: 700,
            }}
          >
            <span className="block sm:whitespace-nowrap">
              Fuel the Creativity:
            </span>
            <span className="block sm:whitespace-nowrap">
              Donate to Your Favorite
            </span>
            <span className="block sm:whitespace-nowrap">Content Creators</span>
          </h1>

          <p
            className="mt-4 max-w-[820px] font-proxima font-normal text-white sm:mt-5"
            style={{
              fontSize: "clamp(0.9375rem, 1.6vw, 20px)",
              lineHeight: 1.55,
              fontWeight: 400,
            }}
          >
            Experience the Power of Social Crowdfunding: Connect, Share,
            <br className="hidden sm:inline" />
            Get Inspired and Support Like-Minded people on Our Website
          </p>

          <div className="mt-6 flex w-full justify-center sm:mt-8">
            <StoreBadges size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
