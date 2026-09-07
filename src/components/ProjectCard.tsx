import Link from "next/link";
import { Visual } from "./Visual";
import { Tag } from "./Tag";
import type { VisualSpec } from "@/content/types";

export function ProjectCard({
  href,
  number,
  name,
  description,
  role,
  tags,
  cover,
  priority = false,
  featured = false,
  ctaLabel = "View case study",
}: {
  href: string;
  number?: string;
  name: string;
  description: string;
  role?: string;
  tags: string[];
  cover: VisualSpec;
  priority?: boolean;
  featured?: boolean;
  ctaLabel?: string;
}) {
  return (
    <Link href={href} className="focus-ring group block">
      <div className="overflow-hidden rounded-lg">
        <div className="transition-transform duration-700 ease-out group-hover:scale-[1.02]">
          <Visual
            visual={cover}
            priority={priority}
            crop
            sizes={featured ? "(min-width: 1024px) 100vw, 100vw" : "(min-width: 1024px) 50vw, 100vw"}
          />
        </div>
      </div>
      <div className="mt-5">
        {number && (
          <p className="mb-1.5 text-xs font-medium uppercase tracking-[0.16em] text-accent-ink">
            {number}
          </p>
        )}
        <h3
          className={`font-serif font-medium tracking-tight text-ink transition-transform duration-300 group-hover:translate-x-0.5 ${
            featured ? "text-2xl sm:text-3xl" : "text-xl"
          }`}
        >
          {name}
        </h3>
        <p className={`mt-2 leading-relaxed text-ink-soft ${featured ? "max-w-xl text-base" : "max-w-md text-sm"}`}>
          {description}
        </p>
        {role && <p className="mt-2 text-xs uppercase tracking-[0.1em] text-ink-soft/80">{role}</p>}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <p className="mt-4 flex items-center gap-1.5 text-sm font-medium text-accent-ink">
        {ctaLabel}
        <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </p>
    </Link>
  );
}
