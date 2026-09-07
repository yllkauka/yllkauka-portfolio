import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { CapabilityItem } from "@/components/CapabilityItem";
import { Statement } from "@/components/Statement";
import { Reveal } from "@/components/Reveal";
import { publishedCaseStudies } from "@/content/caseStudies";
import { site } from "@/content/site";
import { about, whatIDo } from "@/content/about";

const projectNumbers = ["01", "02", "03", "04", "05", "06"];

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
