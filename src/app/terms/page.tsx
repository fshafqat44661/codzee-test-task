import type { Metadata } from "next";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of use and privacy policy",
  description: "Bell3 terms of use and privacy policy overview.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-ink px-4 py-14 text-center sm:px-6 sm:py-16">
        <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Terms of use &amp; privacy
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-white/65">
          Last updated overview for the Bell3 marketing site and services.
        </p>
      </section>

      <section className="bg-white">
        <div className="prose prose-neutral mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
          <h2 className="font-display text-xl font-bold text-ink">
            Terms of use
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink/70">
            By accessing Bell3 websites and applications, you agree to use the
            platform lawfully and respectfully. You are responsible for content
            you publish and for complying with applicable laws. Bell3 may
            remove content or suspend accounts that violate community standards
            or these terms.
          </p>

          <h2 className="mt-10 font-display text-xl font-bold text-ink">
            Privacy
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink/70">
            We collect account and usage information needed to operate the
            service — for example profile details, posts, donations, and
            technical logs. We do not sell personal data. Information may be
            shared with processors that help us run payments, hosting, and
            analytics under appropriate safeguards.
          </p>

          <h2 className="mt-10 font-display text-xl font-bold text-ink">
            Contact
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink/70">
            For privacy or legal requests, email{" "}
            <a
              href={`mailto:${CONTACT.email}`}
              className="font-semibold text-brand hover:underline"
            >
              {CONTACT.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
