import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { publishedCaseStudies } from "@/content/caseStudies";

export const metadata: Metadata = {
  title: "Work",
  description: "Products I've designed from complex systems to everyday experiences.",
};

const projectNumbers = ["01", "02", "03", "04", "05", "06"];

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

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2">
          {publishedCaseStudies.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80} className={i === 0 ? "sm:col-span-2" : undefined}>
              <ProjectCard
                href={`/work/${project.slug}`}
                number={projectNumbers[i]}
                name={project.name}
                description={project.description}
                role={project.role}
                tags={project.projectType}
                cover={project.cover}
                priority={i < 2}
                featured={i === 0}
              />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-16 text-sm text-ink-soft">
            Alongside product design, I&rsquo;ve designed 50+ websites and digital experiences
            across different industries.{" "}
            <Link
              href="/work/websites"
              className="focus-ring text-ink underline underline-offset-4 decoration-line hover:decoration-accent"
            >
              View the Web &amp; Digital Experiences gallery →
            </Link>
          </p>
        </Reveal>
      </Container>
    </div>
  );
}
