import Link from "next/link";
import {
  APP_LOGIN_URL,
  CONTACT,
  NAV_LINKS,
  SOCIAL,
} from "@/lib/constants";
import { Logo } from "./Logo";

const FOOTER_LINKS = [
  ...NAV_LINKS.filter((l) => l.href !== "/events"),
  { href: "/terms", label: "Terms of use and privacy policy" },
  { href: APP_LOGIN_URL, label: "Post Contents!", external: true },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Logo className="text-brand" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            Connect, Share, Get Inspired and Support Like-Minded people on Bell3
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white">
            Sitemap
          </h4>
          <ul className="mt-4 space-y-2">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                {"external" in link && link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white">
            Contact
          </h4>
          <address className="mt-4 not-italic">
            <a
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="block space-y-0.5 text-sm text-white/70 transition hover:text-white"
            >
              {CONTACT.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="mt-3 inline-block text-sm text-white underline underline-offset-2"
            >
              {CONTACT.email}
            </a>
          </address>

          <ul className="mt-6 flex flex-wrap gap-3" aria-label="Social">
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
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white transition hover:bg-brand"
                  aria-label={s.label}
                >
                  {s.label.slice(0, 2)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Bell3. All rights reserved.
      </div>
    </footer>
  );
}
