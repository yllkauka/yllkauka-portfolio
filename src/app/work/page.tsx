import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { getCaseStudy } from "@/content/caseStudies";

export const metadata: Metadata = {
  title: "Work",
  description: "Products I've designed from complex systems to everyday experiences.",
};

const swifty = getCaseStudy("swifty-sports")!;
const nomos = getCaseStudy("nomos")!;
const nixxe = getCaseStudy("nixxe-gateway")!;

export default function WorkPage() {
  return (
    <div className="relative">
      <div className="accent-wash" aria-hidden />
      <Container className="py-20 sm:py-28">
        <Reveal>
          <SectionHeader
            eyebrow="Selected work"
            heading="Products I've designed from complex systems to everyday experiences."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:mt-20 sm:grid-cols-3">
          <Reveal>
            <ProjectCard
              href="/work/swifty-sports"
              number="01"
              name="Swifty Sports"
              description="A multi-platform sports betting product spanning web, mobile and CMS experiences."
              tags={["Product Design", "Web", "Mobile", "SaaS"]}
              cover={{ ...swifty.cover, frame: "desktop" }}
              priority
            />
          </Reveal>

          <Reveal delay={80}>
            <ProjectCard
              href="/work/nomos"
              number="02"
              name="Nomos System"
              description="A digital workplace system designed to connect people, spaces and everyday operations."
              tags={["Product Design", "UX/UI", "System"]}
              cover={{ ...nomos.cover, frame: "desktop" }}
              priority
            />
          </Reveal>

          <Reveal delay={160}>
            <ProjectCard
              href="/work/nixxe-gateway"
              number="03"
              name="NIXXE Gateway"
              description="An enterprise platform designed to simplify complex operational workflows and data."
              tags={["Product Design", "Web", "Enterprise"]}
              cover={{ ...nixxe.cover, frame: "desktop" }}
            />
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-20 flex flex-col gap-6 border-t border-line pt-10 sm:mt-24 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="font-serif text-xl font-medium tracking-tight text-ink sm:text-2xl">
                Other Projects
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft">
                A selection of additional digital products, websites and experiences across different
                industries.
              </p>
            </div>
            <Link
              href="/work/websites"
              className="focus-ring group flex shrink-0 items-center gap-1.5 text-sm font-medium text-accent-ink"
            >
              Explore other projects
              <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
