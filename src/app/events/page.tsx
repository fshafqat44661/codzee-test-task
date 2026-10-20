import type { Metadata } from "next";
import Link from "next/link";
import { APP_HOME_URL, APP_STORE_URL, PLAY_STORE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Discover Bell3 community events — meetups, live sessions, and creator gatherings.",
};

export default function EventsPage() {
  return (
    <>
      <section className="bg-ink px-4 py-16 text-center sm:px-6 sm:py-20">
        <h1 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Events
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/70 sm:text-lg">
          Join live sessions, meetups, and community gatherings. Stay close to
          creators and supporters.
        </p>
      </section>

      <section className="bg-surface-warm">
        <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 lg:py-24">
          <div className="rounded-2xl bg-white p-8 shadow-sm sm:p-10">
            <h2 className="font-display text-2xl font-bold text-ink">
              Browse events in the app
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/65">
              Event listings, registration, and schedules live in the Bell3 app
              experience so you always get the latest details and tickets.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href={`${APP_HOME_URL}/events`}
                className="inline-flex w-full items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark sm:w-auto"
              >
                Open events
              </a>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand sm:w-auto"
              >
                Host an event
              </Link>
            </div>
            <p className="mt-8 text-sm text-ink/50">
              Prefer mobile?{" "}
              <a
                href={APP_STORE_URL}
                className="font-medium text-brand hover:underline"
                target="_blank"
                rel="noreferrer noopener"
              >
                App Store
              </a>{" "}
              ·{" "}
              <a
                href={PLAY_STORE_URL}
                className="font-medium text-brand hover:underline"
                target="_blank"
                rel="noreferrer noopener"
              >
                Google Play
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
