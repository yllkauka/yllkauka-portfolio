import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { MobileThumb } from "@/components/MobileThumb";
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
            description="Alongside product design, I design websites and digital experiences that balance clear UX, strong visual direction, and business goals. Here are selected projects across different industries."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-20 sm:mt-20 sm:grid-cols-2 sm:gap-y-24 lg:grid-cols-3">
          {webGallery.map((item, i) => (
            <Reveal key={item.slug} delay={i * 60}>
              <ProjectCard
                href={`/work/websites/${item.slug}`}
                name={item.name}
                description={item.description}
                tags={[item.industry]}
                cover={item.desktop}
                coverSlot={
                  !item.desktop && item.mobile ? (
                    <MobileThumb visual={item.mobile} priority={i < 3} />
                  ) : undefined
                }
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
