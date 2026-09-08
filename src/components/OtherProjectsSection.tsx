import Link from "next/link";
import { Visual } from "./Visual";
import { Tag } from "./Tag";
import { Button } from "./Button";
import { Reveal } from "./Reveal";
import type { WebGalleryItem } from "@/content/types";

/**
 * A horizontally scrollable preview of the wider Web & Digital Experiences
 * gallery — enough real, large project thumbnails to signal there's more
 * work beyond the featured case studies above, without turning into a
 * fourth peer card in that grid. Used identically on the homepage and /work.
 */
export function OtherProjectsSection({ projects }: { projects: WebGalleryItem[] }) {
  return (
    <div className="mt-24 border-t border-line pt-16 sm:mt-28 sm:pt-20">
      <Reveal>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              Other Projects
            </h3>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
              A selection of additional digital products, websites and experiences across different
              industries.
            </p>
          </div>
          <Button href="/work/websites" variant="secondary" className="shrink-0">
            View all projects →
          </Button>
        </div>
      </Reveal>

      <Reveal>
        <div className="-mx-6 mt-14 flex snap-x snap-mandatory items-start gap-6 overflow-x-auto px-6 pb-4 sm:mt-16 md:mx-0 md:px-0">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/websites/${project.slug}`}
              className="focus-ring group w-[78vw] shrink-0 snap-start sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
            >
              <div className="overflow-hidden rounded-lg">
                <div className="transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                  <Visual visual={project.desktop!} crop sizes="300px" />
                </div>
              </div>
              <h4 className="mt-4 font-serif text-lg font-medium tracking-tight text-ink transition-transform duration-300 group-hover:translate-x-0.5">
                {project.name}
              </h4>
              <div className="mt-3">
                <Tag>{project.industry}</Tag>
              </div>
              <p className="mt-3 flex items-center gap-1.5 text-sm font-medium text-accent-ink">
                View project
                <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </p>
            </Link>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
