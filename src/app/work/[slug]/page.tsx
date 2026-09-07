import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { CaseStudyHero } from "@/components/CaseStudyHero";
import { CaseStudySection } from "@/components/CaseStudySection";
import { Statement } from "@/components/Statement";
import { DesignSystemPreview } from "@/components/DesignSystemPreview";
import { ImageGallery } from "@/components/ImageGallery";
import { Slideshow } from "@/components/Slideshow";
import { Visual } from "@/components/Visual";
import { Tag } from "@/components/Tag";
import { Button } from "@/components/Button";
import { publishedCaseStudies, getCaseStudy } from "@/content/caseStudies";
import type { CaseStudy } from "@/content/types";

// Only published case studies are ever built or reachable — an unpublished
// slug 404s rather than exposing a half-finished page.
export const dynamicParams = false;

export function generateStaticParams() {
  return publishedCaseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(
  props: PageProps<"/work/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getCaseStudy(slug);
  if (!project || project.published === false) return {};
  return {
    title: project.name,
    description: project.description,
  };
}

function DesignSlideshow({
  visuals,
}: {
  visuals: { src: string; alt: string; frame: "desktop" | "tablet" | "mobile" | "wide" | "square" | "plain"; caption?: string }[];
}) {
  return (
    <Slideshow captions={visuals.map((v) => v.caption)}>
      {visuals.map((visual, i) => (
        <Visual key={visual.src} visual={visual} priority={i === 0} />
      ))}
    </Slideshow>
  );
}

function statementsAfter(project: CaseStudy, key: "challenge" | "process" | "design") {
  return project.statements?.filter((s) => s.after === key) ?? [];
}

export default async function CaseStudyPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = getCaseStudy(slug);
  if (!project || project.published === false) notFound();

  const responsiveVisuals = project.responsive
    ? [project.responsive.desktop, project.responsive.tablet, project.responsive.mobile].filter(
        (v): v is NonNullable<typeof v> => Boolean(v)
      )
    : [];

  const hasPlatformSplit = Boolean(project.webSection || project.backOfficeSection);

  return (
    <>
      <CaseStudyHero
        name={project.name}
        tagline={project.tagline}
        description={project.description}
        role={project.role}
        focus={project.focus}
        timeline={project.timeline}
        projectType={project.projectType}
        liveUrl={project.liveUrl}
        hero={project.hero}
      />

      <CaseStudySection eyebrow="Context" heading={project.context.heading} description={project.context.body} />

      <CaseStudySection eyebrow="Challenge" heading={project.challenge.heading} description={project.challenge.body} />

      {statementsAfter(project, "challenge").map((s) => (
        <Statement key={s.text} text={s.text} />
      ))}

      <CaseStudySection eyebrow="My role" heading={project.role} description={project.contribution}>
        {project.roleGroups ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {project.roleGroups.map((group) => (
              <div key={group.label}>
                <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-accent-ink">
                  {group.label}
                </h3>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-ink">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {project.roleDetails.map((skill) => (
              <Tag key={skill} variant="accent">
                {skill}
              </Tag>
            ))}
          </div>
        )}
      </CaseStudySection>

      {project.process && (
        <CaseStudySection eyebrow="Process">
          <div className="flex flex-col gap-10">
            {project.process.map((step, i) => (
              <div key={step.title} className="flex gap-5">
                <span className="mt-1 text-sm text-ink-soft">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-serif text-xl font-medium text-ink">{step.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </CaseStudySection>
      )}

      {statementsAfter(project, "process").map((s) => (
        <Statement key={s.text} text={s.text} />
      ))}

      {hasPlatformSplit ? (
        <>
          {project.webSection && (
            <CaseStudySection eyebrow="Web" heading={project.webSection.heading} description={project.webSection.intro}>
              <DesignSlideshow visuals={project.webSection.visuals} />
            </CaseStudySection>
          )}

          {project.mobileApp && (
            <CaseStudySection eyebrow="Mobile app" heading={project.mobileApp.heading} description={project.mobileApp.intro}>
              <ImageGallery items={project.mobileApp.visuals} layout="row" />
            </CaseStudySection>
          )}

          {project.backOfficeSection && (
            <CaseStudySection
              eyebrow="CMS / Back office"
              heading={project.backOfficeSection.heading}
              description={project.backOfficeSection.intro}
            >
              <DesignSlideshow visuals={project.backOfficeSection.visuals} />
            </CaseStudySection>
          )}
        </>
      ) : (
        <>
          <CaseStudySection eyebrow="Design" heading={project.designHeading} description={project.designIntro}>
            <DesignSlideshow visuals={project.design} />
          </CaseStudySection>

          {project.mobileApp && (
            <CaseStudySection eyebrow="Mobile app" heading={project.mobileApp.heading} description={project.mobileApp.intro}>
              <ImageGallery items={project.mobileApp.visuals} layout="row" />
            </CaseStudySection>
          )}
        </>
      )}

      {statementsAfter(project, "design").map((s) => (
        <Statement key={s.text} text={s.text} />
      ))}

      {project.designSystem && (
        <CaseStudySection
          eyebrow="Design system"
          heading={project.designSystem.heading}
          description={project.designSystem.intro}
        >
          <DesignSystemPreview />
        </CaseStudySection>
      )}

      {project.multiBrand && (
        <CaseStudySection eyebrow="Multi-brand system" heading={project.multiBrand.heading} description={project.multiBrand.intro}>
          <ImageGallery items={project.multiBrand.visuals} layout="grid" />
        </CaseStudySection>
      )}

      {project.responsive && responsiveVisuals.length > 0 && (
        <CaseStudySection eyebrow="Responsive design" heading={project.responsive.heading} description={project.responsive.intro}>
          <ImageGallery items={responsiveVisuals} layout="responsive" />
        </CaseStudySection>
      )}

      <CaseStudySection eyebrow="Outcome" heading={project.outcomeHeading ?? "My contribution"} description={project.outcome}>
        {project.stats && (
          <div className="grid grid-cols-1 gap-8 border-t border-line pt-8 sm:grid-cols-3">
            {project.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl font-medium text-accent">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-ink">{stat.label}</p>
                <p className="mt-1 text-sm text-ink-soft">{stat.description}</p>
              </div>
            ))}
          </div>
        )}
      </CaseStudySection>

      <Container className="flex flex-col items-start justify-between gap-6 border-t border-line py-16 sm:flex-row sm:items-center">
        <p className="text-sm text-ink-soft">More work</p>
        <Button href="/work" variant="secondary">
          Back to all work
        </Button>
      </Container>
    </>
  );
}
