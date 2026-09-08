import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { CapabilityItem } from "@/components/CapabilityItem";
import { Statement } from "@/components/Statement";
import { Reveal } from "@/components/Reveal";
import { Visual } from "@/components/Visual";
import { Tag } from "@/components/Tag";
import { getCaseStudy } from "@/content/caseStudies";
import { webGallery } from "@/content/webGallery";
import { site } from "@/content/site";
import { about, whatIDo } from "@/content/about";

// Curated copy for the four Selected Work quadrants — intentionally short
// and distinct from each case study's own longer description/tag set.
const swifty = getCaseStudy("swifty-sports")!;
const nomos = getCaseStudy("nomos")!;
const nixxe = getCaseStudy("nixxe-gateway")!;
const otherThumbs = ["say-studio", "skylab", "vm-cars"]
  .map((slug) => webGallery.find((w) => w.slug === slug))
  .filter((w): w is NonNullable<typeof w> => Boolean(w));

export default function Home() {
  return (
    <>
      <section className="relative pt-20 sm:pt-28">
        <div className="accent-wash" aria-hidden />
        <Container>
          <Reveal>
            <h1 className="max-w-4xl font-serif text-5xl font-medium tracking-tight text-ink sm:text-6xl md:text-7xl">
              {site.name}
              <span className="block text-accent">{site.role}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink sm:text-xl">
              {site.tagline}
            </p>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-soft">
              {site.subline}
            </p>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
              {site.metaRow.map((item) => (
                <span
                  key={item}
                  className="border-l border-line pl-5 text-xs font-medium uppercase tracking-[0.14em] text-ink-soft first:border-l-0 first:pl-0"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/work">View selected work</Button>
              <Button href="/about" variant="secondary">
                About me
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="work" className="mt-24 border-t border-line pt-16 sm:mt-32 sm:pt-24">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Selected work"
              heading="From zero to products used by real people."
              description="A selection of digital products I've designed from the ground up across customer-facing platforms, mobile applications and enterprise tools."
            />
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-20 sm:grid-cols-2 sm:gap-y-24">
            {/* 01 — Swifty Sports */}
            <Reveal>
              <div className="max-w-[400px]">
                <ProjectCard
                  href="/work/swifty-sports"
                  number="01"
                  name="Swifty Sports"
                  description="A multi-platform sports betting product spanning web, mobile and CMS experiences."
                  tags={["Product Design", "Web", "Mobile", "SaaS"]}
                  cover={swifty.cover}
                  priority
                />
              </div>
            </Reveal>

            {/* 02 — Nomos System */}
            <Reveal delay={80}>
              <div className="max-w-[380px] sm:ml-auto sm:mt-10">
                <ProjectCard
                  href="/work/nomos"
                  number="02"
                  name="Nomos System"
                  description="A digital workplace system designed to connect people, spaces and everyday operations."
                  tags={["Product Design", "UX/UI", "System"]}
                  cover={nomos.cover}
                  priority
                />
              </div>
            </Reveal>

            {/* 03 — NIXXE Gateway */}
            <Reveal delay={160}>
              <div className="max-w-[340px] sm:ml-16">
                <ProjectCard
                  href="/work/nixxe-gateway"
                  number="03"
                  name="NIXXE Gateway"
                  description="An enterprise platform designed to simplify complex operational workflows and data."
                  tags={["Product Design", "Web", "Enterprise"]}
                  cover={nixxe.cover}
                />
              </div>
            </Reveal>

            {/* 04 — Other Projects */}
            <Reveal delay={240}>
              <div className="max-w-[380px] sm:ml-auto sm:mt-10">
                <Link href="/work/websites" className="focus-ring group block">
                  <div className="flex gap-3">
                    {otherThumbs.map((item) => (
                      <div key={item.slug} className="w-1/3 overflow-hidden rounded-lg">
                        <div className="transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                          <Visual
                            visual={{ ...item.desktop, frame: "plain" }}
                            crop
                            sizes="140px"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5">
                    <p className="mb-1.5 text-xs font-medium uppercase tracking-[0.16em] text-accent-ink">04</p>
                    <h3 className="font-serif text-xl font-medium tracking-tight text-ink transition-transform duration-300 group-hover:translate-x-0.5">
                      Other Projects
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft">
                      A selection of additional digital products, interfaces and experiments across
                      different industries.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["Product Design", "UX/UI", "Digital"].map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                    <p className="mt-4 flex items-center gap-1.5 text-sm font-medium text-accent-ink">
                      Explore projects
                      <span
                        aria-hidden
                        className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </p>
                  </div>
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <Statement text="I design digital products that make complex workflows easier to understand, use and scale." />

      <section className="border-t border-line py-16 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeader eyebrow="Capabilities" heading="Where I focus" />
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-10 lg:grid-cols-5 [&>*:last-child]:col-span-2 lg:[&>*:last-child]:col-span-1">
            {whatIDo.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <CapabilityItem title={item.title} description={item.description} accent={item.accent} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-16 sm:py-24">
        <Container>
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent-ink">About</p>
                <h2 className="mt-4 max-w-xl font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                  4+ years designing complex products end to end.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">{about.body[2]}</p>
              </div>
              <Button href="/about" variant="secondary" className="shrink-0">
                More about me
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="mt-24 bg-ink py-20 sm:mt-32 sm:py-28">
        <Container>
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
              <h2 className="max-w-xl font-serif text-3xl font-medium tracking-tight text-paper sm:text-4xl">
                Have a product that needs designing?
              </h2>
              <Button href="/contact" variant="onDark">
                Let&rsquo;s talk
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
