import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { OtherProjectsSection } from "@/components/OtherProjectsSection";
import { Reveal } from "@/components/Reveal";
import { getCaseStudy } from "@/content/caseStudies";
import { webGallery } from "@/content/webGallery";

export const metadata: Metadata = {
  title: "Work",
  description: "Products I've designed from complex systems to everyday experiences.",
};

const swifty = getCaseStudy("swifty-sports")!;
const nomos = getCaseStudy("nomos")!;
const nixxe = getCaseStudy("nixxe-gateway")!;

// A curated slice of the wider Web & Digital Experiences gallery — enough to
// signal there's more work without competing with the 3 featured projects.
const otherProjects = ["swifty-global", "say-studio", "skylab", "vm-cars", "webralo", "ylb-concept"]
  .map((slug) => webGallery.find((w) => w.slug === slug))
  .filter((w): w is NonNullable<typeof w> => Boolean(w));

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

        <OtherProjectsSection projects={otherProjects} />
      </Container>
    </div>
  );
}
