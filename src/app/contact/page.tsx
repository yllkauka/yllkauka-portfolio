import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Yllka, a Product Designer available for UX/UI and product design roles.",
};

export default function ContactPage() {
  return (
    <div className="relative">
      <div className="accent-wash" aria-hidden />
      <Container className="py-24 sm:py-32">
        <Reveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-accent-ink">
            Contact
          </p>
          <h1 className="max-w-2xl font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl md:text-6xl">
            Have a product that needs designing?
            <span className="block text-accent">Let&rsquo;s talk.</span>
          </h1>

          <dl className="mt-14 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:gap-16">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-ink-soft">Email</dt>
              <dd className="mt-2">
                <a
                  href={`mailto:${site.email}`}
                  className="focus-ring text-lg text-ink underline underline-offset-4 decoration-line hover:decoration-accent"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-ink-soft">Phone</dt>
              <dd className="mt-2">
                <a
                  href={`tel:${site.phone.replace(/\s+/g, "")}`}
                  className="focus-ring text-lg text-ink underline underline-offset-4 decoration-line hover:decoration-accent"
                >
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-ink-soft">LinkedIn</dt>
              <dd className="mt-2">
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring text-lg text-ink underline underline-offset-4 decoration-line hover:decoration-accent"
                >
                  View profile
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>
      </Container>
    </div>
  );
}
