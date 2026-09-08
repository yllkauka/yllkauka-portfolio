import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { OtherProjectsSection } from "@/components/OtherProjectsSection";
import { Reveal } from "@/components/Reveal";
import { getCaseStudy } from "@/content/caseStudies";
import { webGallery } from "@/content/webGallery";
import { site } from "@/content/site";

// Curated copy for the three featured Selected Work projects — intentionally
// short and distinct from each case study's own longer description/tag set.
const swifty = getCaseStudy("swifty-sports")!;
const nomos = getCaseStudy("nomos")!;
const nixxe = getCaseStudy("nixxe-gateway")!;

// A curated slice of the wider Web & Digital Experiences gallery — enough to
// signal there's more work without competing with the 3 featured projects.
const otherProjects = ["swifty-global", "say-studio", "skylab", "vm-cars", "webralo", "ylb-concept"]
  .map((slug) => webGallery.find((w) => w.slug === slug))
  .filter((w): w is NonNullable<typeof w> => Boolean(w));

const homeSummary =
  "I've designed products used by thousands of people, working across complex systems, SaaS platforms, enterprise tools, mobile experiences and digital products. I enjoy turning complicated problems into interfaces that feel simple, clear and purposeful.";

const capabilities = [
  {
    title: "Product Design",
    description: "End-to-end product design from concept to production.",
  },
  {
    title: "UX / UI",
    description: "User flows, information architecture, interaction design and visual design.",
  },
  {
    title: "Design Systems",
    description: "Reusable components and scalable foundations that keep products consistent.",
  },
  {
    title: "Web + Mobile",
    description: "Responsive websites and mobile applications designed around real user needs.",
  },
  {
    title: "Enterprise & Back Office",
    description: "Complex operational tools, dashboards and data-heavy interfaces designed for everyday workflows.",
  },
];

const approachSteps = [
  {
    title: "Understand",
    description: "I start by understanding the problem, users, business goals and existing workflows.",
  },
  {
    title: "Structure",
    description: "I turn complexity into clear flows, information architecture and scalable product structures.",
  },
  {
    title: "Design",
    description: "I translate those structures into intuitive interfaces, systems and interactions.",
  },
  {
    title: "Deliver",
    description: "I prototype, validate, document and work closely with developers through implementation.",
  },
];

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden pt-16 sm:pt-24 lg:pt-28">
        <div className="accent-wash" aria-hidden />
        <Container className="relative">
          <Reveal>
            <p className="mb-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-ink-soft">
              <span className="h-px w-8 bg-line" aria-hidden />
              Product Design Portfolio
            </p>
            <h1 className="max-w-3xl font-serif text-6xl font-medium leading-[1.02] tracking-tight text-ink sm:text-7xl md:text-8xl">
              {site.name}
              <span className="block text-accent">{site.role}</span>
            </h1>
            <p className="mt-8 max-w-xl text-xl leading-relaxed text-ink sm:text-2xl">{site.tagline}</p>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-soft">{site.subline}</p>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2">
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
              <Button href="/work">View selected work →</Button>
              <Button href="/about" variant="secondary">
                About me
              </Button>
            </div>
          </Reveal>
        </Container>

        <div
          aria-hidden
          className="pointer-events-none absolute right-12 top-1/2 hidden -translate-y-1/2 lg:block"
        >
          <p className="[writing-mode:vertical-rl] text-xs font-medium uppercase tracking-[0.3em] text-ink-soft/45">
            Selected work ↓
          </p>
        </div>
      </section>

      {/* ---------- Selected work ---------- */}
      <section id="work" className="mt-28 border-t border-line pt-16 sm:mt-36 sm:pt-24">
        <Container>
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent-ink">Selected work</p>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl">
              From zero to products used by real people.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              A selection of digital products I&rsquo;ve designed from the ground up across customer-facing
              platforms, mobile applications and enterprise tools.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:mt-20 sm:grid-cols-3">
            <Reveal>
              <ProjectCard
                href="/work/swifty-sports"
                number="01"
                name="Swifty Sports"
                description="A multi-platform sports betting product spanning web, mobile and CMS experiences."
                tags={["Product Design", "Web", "Mobile", "SaaS"]}
                cover={{ ...swifty.cover, frame: "desktop" }}
                priority
              />
            </Reveal>

            <Reveal delay={80}>
              <ProjectCard
                href="/work/nomos"
                number="02"
                name="Nomos System"
                description="A digital workplace system designed to connect people, spaces and everyday operations."
                tags={["Product Design", "UX/UI", "System"]}
                cover={{ ...nomos.cover, frame: "desktop" }}
                priority
              />
            </Reveal>

            <Reveal delay={160}>
              <ProjectCard
                href="/work/nixxe-gateway"
                number="03"
                name="NIXXE Gateway"
                description="An enterprise platform designed to simplify complex operational workflows and data."
                tags={["Product Design", "Web", "Enterprise"]}
                cover={{ ...nixxe.cover, frame: "desktop" }}
              />
            </Reveal>
          </div>

          <OtherProjectsSection projects={otherProjects} />
        </Container>
      </section>

      {/* ---------- Positioning statement ---------- */}
      <section className="border-t border-line py-20 sm:py-28">
        <Container>
          <Reveal>
            <p className="max-w-4xl font-serif text-3xl font-medium leading-snug tracking-tight text-ink sm:text-4xl md:text-5xl">
              I design digital products that make complex workflows easier to understand, use and scale.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ---------- Capabilities ---------- */}
      <section className="border-t border-line py-20 sm:py-28">
        <Container>
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent-ink">Capabilities</p>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              Where I focus
            </h2>
          </Reveal>

          <div className="mt-14 border-t border-line">
            {capabilities.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <div className="grid grid-cols-1 gap-2 border-b border-line py-8 sm:grid-cols-[3.5rem_1fr_2fr] sm:items-baseline sm:gap-8">
                  <span className="font-serif text-lg text-ink-soft/60">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-serif text-xl font-medium tracking-tight text-ink sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-ink-soft sm:text-base">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- Approach ---------- */}
      <section className="border-t border-line py-20 sm:py-28">
        <Container>
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent-ink">Approach</p>
            <h2 className="mt-4 max-w-xl font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              From complexity to clarity.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {approachSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 80}>
                <div className="border-t border-line pt-6">
                  <p className="font-serif text-3xl font-medium text-accent">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-3 text-base font-medium tracking-tight text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- About ---------- */}
      <section className="border-t border-line py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-end">
              <div className="max-w-xl">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent-ink">About</p>
                <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                  4+ years designing products from the ground up.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-ink-soft">{homeSummary}</p>
              </div>
              <Link
                href="/about"
                className="focus-ring group flex shrink-0 items-center gap-1.5 text-sm font-medium text-accent-ink"
              >
                More about me
                <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ---------- Final CTA ---------- */}
      <section className="mt-24 bg-ink py-24 sm:mt-32 sm:py-32">
        <Container>
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-end">
              <h2 className="max-w-2xl font-serif text-4xl font-medium leading-[1.05] tracking-tight text-paper sm:text-5xl md:text-6xl">
                Have a complex product
                <br className="hidden sm:block" /> that needs clarity?
              </h2>
              <Button href="/contact" variant="onDark" className="shrink-0">
                Let&rsquo;s talk →
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
