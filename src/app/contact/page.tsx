import type { Metadata } from "next";
import { CONTACT, SOCIAL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Bell3 team — email, address, and social.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink px-4 py-16 text-center sm:px-6 sm:py-20">
        <h1 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Contact us
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/70 sm:text-lg">
          Have a question or want to connect? We&apos;re here to help and will
          get back to you as soon as possible.
        </p>
      </section>

      <section className="bg-surface-warm">
        <div className="mx-auto grid max-w-4xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-2 lg:px-8 lg:py-20">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="font-display text-xl font-bold text-ink">Email</h2>
            <a
              href={`mailto:${CONTACT.email}`}
              className="mt-3 inline-block text-lg font-semibold text-brand underline-offset-2 hover:underline"
            >
              {CONTACT.email}
            </a>
            <p className="mt-4 text-sm leading-relaxed text-ink/60">
              Reach out for partnerships, press, support, or general inquiries.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="font-display text-xl font-bold text-ink">Office</h2>
            <a
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-3 block space-y-1 text-base text-ink/80 transition hover:text-brand"
            >
              {CONTACT.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </a>
            <a
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-4 inline-block text-sm font-semibold text-brand"
            >
              Open in Maps →
            </a>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm md:col-span-2">
            <h2 className="font-display text-xl font-bold text-ink">Social</h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {[
                { href: SOCIAL.instagram, label: "Instagram" },
                { href: SOCIAL.facebook, label: "Facebook" },
                { href: SOCIAL.linkedin, label: "LinkedIn" },
                { href: SOCIAL.youtube, label: "YouTube" },
                { href: SOCIAL.tiktok, label: "TikTok" },
              ].map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex rounded-full bg-surface-warm px-4 py-2 text-sm font-semibold text-ink transition hover:bg-brand hover:text-white"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
