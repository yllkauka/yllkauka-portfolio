import Link from "next/link";
import { Container } from "./Container";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-soft">
          {site.fullName} — {site.role}. © {new Date().getFullYear()}
        </p>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/work" className="focus-ring text-ink-soft hover:text-ink">
            Work
          </Link>
          <Link href="/about" className="focus-ring text-ink-soft hover:text-ink">
            About
          </Link>
          <Link href="/contact" className="focus-ring text-ink-soft hover:text-ink">
            Contact
          </Link>
          <a href={`mailto:${site.email}`} className="focus-ring text-ink-soft hover:text-ink">
            {site.email}
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="focus-ring text-ink-soft hover:text-ink"
          >
            LinkedIn
          </a>
        </nav>
      </Container>
    </footer>
  );
}
