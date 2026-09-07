import { Container } from "./Container";
import { Visual } from "./Visual";
import { Reveal } from "./Reveal";
import type { VisualSpec } from "@/content/types";

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 pr-8">
      <dt className="text-xs font-medium uppercase tracking-[0.14em] text-ink-soft">{label}</dt>
      <dd className="text-sm text-ink">{value}</dd>
    </div>
  );
}

export function CaseStudyHero({
  name,
  tagline,
  description,
  role,
  focus,
  timeline,
  projectType,
  liveUrl,
  hero,
}: {
  name: string;
  tagline?: string;
  description: string;
  role: string;
  focus: string;
  timeline?: string;
  projectType: string[];
  liveUrl?: string;
  hero: VisualSpec;
}) {
  const liveUrlLabel = liveUrl?.replace(/^https?:\/\//, "").replace(/\/$/, "");
  return (
    <div className="relative">
      <div className="accent-wash" aria-hidden />
      <Container className="pt-14 sm:pt-20">
        <Reveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-accent-ink">
            Case study
          </p>
          <h1 className="max-w-3xl font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl md:text-6xl">
            {name}
          </h1>
          {tagline && (
            <p className="mt-4 max-w-2xl font-serif text-xl font-medium leading-snug text-ink sm:text-2xl">
              {tagline}
            </p>
          )}
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {description}
          </p>

          <dl className="mt-10 flex flex-wrap gap-y-6 border-t border-line pt-6">
            <MetaItem label="Role" value={role} />
            <MetaItem label="Platform" value={projectType.join(" · ")} />
            <MetaItem label="Focus" value={focus} />
            {timeline && <MetaItem label="Timeline" value={timeline} />}
            {liveUrl && liveUrlLabel && (
              <div className="flex flex-col gap-1">
                <dt className="text-xs font-medium uppercase tracking-[0.14em] text-ink-soft">Site</dt>
                <dd className="text-sm">
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring text-ink underline underline-offset-4 decoration-line hover:decoration-accent"
                  >
                    {liveUrlLabel} ↗
                  </a>
                </dd>
              </div>
            )}
          </dl>
        </Reveal>
      </Container>

      <Container className="mt-12 sm:mt-14">
        <Reveal>
          <Visual visual={hero} priority sizes="(min-width: 1024px) 1200px, 100vw" />
        </Reveal>
      </Container>
    </div>
  );
}
