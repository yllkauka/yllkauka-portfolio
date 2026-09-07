import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { webGallery } from "@/content/webGallery";

export const metadata: Metadata = {
  title: "Web & Digital Experiences",
  description:
    "A curated selection of website and digital experience design work across industries — landing pages, corporate sites and responsive, conversion-focused layouts.",
};

export default function WebsitesPage() {
  return (
    <div className="relative">
      <div className="accent-wash" aria-hidden />
      <Container className="py-20 sm:py-28">
        <Reveal>
          <SectionHeader
            eyebrow="Work"
            heading="Web & Digital Experiences"
            description="Alongside product design, I've designed 50+ websites and digital experiences across different industries. Select a project to see it in full."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {webGallery.map((item, i) => (
            <Reveal key={item.slug} delay={i * 60}>
              <ProjectCard
                href={`/work/websites/${item.slug}`}
                name={item.name}
                description={item.description}
                tags={[item.industry]}
                cover={item.desktop}
                priority={i < 3}
                ctaLabel="View project"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
