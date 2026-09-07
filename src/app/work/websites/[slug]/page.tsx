import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { ImageGallery } from "@/components/ImageGallery";
import { Tag } from "@/components/Tag";
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

  const items = item.mobile ? [item.desktop, item.mobile] : [item.desktop];
  const urlLabel = item.url?.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div className="relative">
      <div className="accent-wash" aria-hidden />
      <Container className="pt-14 sm:pt-20">
        <Reveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-accent-ink">
            Web & Digital Experiences
          </p>
          <h1 className="max-w-3xl font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            {item.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">{item.description}</p>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
            <Tag>{item.industry}</Tag>
            {item.url && urlLabel && (
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="focus-ring text-sm text-ink underline underline-offset-4 decoration-line hover:decoration-accent"
              >
                {urlLabel} ↗
              </a>
            )}
          </div>
        </Reveal>
      </Container>

      <Container className="mt-14 sm:mt-16">
        <Reveal>
          <ImageGallery items={items} layout="responsive" />
        </Reveal>
      </Container>

      <Container className="mt-24 flex flex-col items-start justify-between gap-6 border-t border-line py-16 sm:mt-32 sm:flex-row sm:items-center">
        <p className="text-sm text-ink-soft">More from the gallery</p>
        <Button href="/work/websites" variant="secondary">
          Back to Web &amp; Digital Experiences
        </Button>
      </Container>
    </div>
  );
}
