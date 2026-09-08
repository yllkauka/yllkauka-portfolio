import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { ProjectMockup } from "@/components/ProjectMockup";
import { Visual } from "@/components/Visual";
import { Button } from "@/components/Button";
import { webGallery, getWebGalleryItem } from "@/content/webGallery";

export function generateStaticParams() {
  return webGallery.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata(
  props: PageProps<"/work/websites/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const item = getWebGalleryItem(slug);
  if (!item) return {};
  return {
    title: item.name,
    description: item.description,
  };
}

export default async function WebsiteDetailPage(props: PageProps<"/work/websites/[slug]">) {
  const { slug } = await props.params;
  const item = getWebGalleryItem(slug);
  if (!item) notFound();

  const hasBoth = Boolean(item.desktop && item.mobile);
  const platform = hasBoth ? "Web + Mobile" : item.mobile ? "Mobile" : "Web";
  const urlLabel = item.url?.replace(/^https?:\/\//, "").replace(/\/$/, "");

  const metaItems = [
    { label: "Category", value: item.industry },
    { label: "Role", value: "Product Designer" },
    { label: "Scope", value: item.scope.join(" · ") },
    { label: "Platform", value: platform },
  ];

  const roleSentence = item.mobile && !item.desktop
    ? "I worked across UX structure, mobile interface design, visual direction and design delivery."
    : "I worked across UX structure, interface design, responsive layouts, visual direction and design delivery.";

  const idx = webGallery.findIndex((w) => w.slug === item.slug);
  const prev = webGallery[(idx - 1 + webGallery.length) % webGallery.length];
  const next = webGallery[(idx + 1) % webGallery.length];

  return (
    <div className="relative">
      <div className="accent-wash" aria-hidden />

      {/* ---------- Project intro ---------- */}
      <Container className="pt-14 sm:pt-20">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent-ink">
            Web &amp; Digital Experiences
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl font-medium tracking-tight text-ink sm:text-6xl">
            {item.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">{item.description}</p>

          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-6 border-t border-line pt-8">
            {metaItems.map((meta) => (
              <div key={meta.label}>
                <dt className="text-xs font-medium uppercase tracking-[0.16em] text-ink-soft">{meta.label}</dt>
                <dd className="mt-1.5 text-sm text-ink">{meta.value}</dd>
              </div>
            ))}
          </dl>

          {item.url && urlLabel && (
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="focus-ring mt-6 inline-block text-sm text-ink underline underline-offset-4 decoration-line hover:decoration-accent"
            >
              {urlLabel} ↗
            </a>
          )}
        </Reveal>
      </Container>

      {/* ---------- Main showcase ---------- */}
      <Container className="mt-12 sm:mt-16">
        <Reveal>
          <ProjectMockup desktop={item.desktop} mobile={item.mobile} priority />
        </Reveal>
      </Container>

      {/* ---------- Responsive experience ---------- */}
      {hasBoth && (
        <section className="mt-20 border-t border-line py-16 sm:mt-24 sm:py-20">
          <Container>
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent-ink">
                Responsive Experience
              </p>
              <h2 className="mt-4 max-w-xl font-serif text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                Designed as one responsive experience.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
                Designed across desktop and mobile, maintaining a consistent visual identity while
                adapting navigation, content hierarchy and interactions to different screen sizes.
              </p>
            </Reveal>
          </Container>
        </section>
      )}

      {/* ---------- Design focus ---------- */}
      <section className={`border-line py-16 sm:py-20 ${hasBoth ? "border-t" : "mt-20 border-t sm:mt-24"}`}>
        <Container>
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent-ink">Design Focus</p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {item.designFocus.map((point, i) => (
              <Reveal key={point} delay={i * 60}>
                <p className="font-serif text-2xl font-medium text-accent">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-2 text-sm font-medium leading-relaxed text-ink">{point}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- My role ---------- */}
      <section className="border-t border-line py-16 sm:py-20">
        <Container>
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent-ink">My Role</p>
            <h2 className="mt-4 font-serif text-2xl font-medium tracking-tight text-ink sm:text-3xl">
              Product Designer
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">{roleSentence}</p>
          </Reveal>
        </Container>
      </section>

      {/* ---------- Gallery ---------- */}
      {item.gallery && item.gallery.length > 0 && (
        <section className="border-t border-line py-16 sm:py-20">
          <Container>
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent-ink">
                More from the project
              </p>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {item.gallery.map((visual, i) => (
                <Reveal key={visual.src} delay={i * 60}>
                  <Visual visual={visual} crop sizes="(min-width: 640px) 45vw, 90vw" />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ---------- Project navigation ---------- */}
      <Container className="mt-8 flex flex-col gap-8 border-t border-line py-16 sm:flex-row sm:items-center sm:justify-between sm:py-20">
        <Button href="/work/websites" variant="secondary">
          Back to Web &amp; Digital Experiences →
        </Button>
        <div className="flex items-center gap-3 text-sm text-ink-soft">
          <Link href={`/work/websites/${prev.slug}`} className="focus-ring hover:text-ink">
            ← {prev.name}
          </Link>
          <span aria-hidden className="text-line">
            /
          </span>
          <Link href={`/work/websites/${next.slug}`} className="focus-ring hover:text-ink">
            {next.name} →
          </Link>
        </div>
      </Container>
    </div>
  );
}
