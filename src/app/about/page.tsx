import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { CapabilityItem } from "@/components/CapabilityItem";
import { about, whatIDo, howIThink, experience, education } from "@/content/about";

export const metadata: Metadata = {
  title: "About",
  description: about.intro,
};

export default function AboutPage() {
  return (
    <>
      <div className="relative">
        <div className="accent-wash" aria-hidden />
        <Container className="pt-20 sm:pt-28">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-[1fr_280px] sm:items-start sm:gap-16">
            <Reveal>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-accent-ink">
                About
              </p>
              <h1 className="max-w-2xl font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl">
                {about.intro}
              </h1>
              <div className="mt-8 flex max-w-2xl flex-col gap-5">
                {about.body.map((p) => (
                  <p key={p} className="text-base leading-relaxed text-ink-soft">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120} className="order-first sm:order-none">
              <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-md border border-line sm:max-w-none">
                <Image
                  src="/images/about/profile.jpg"
                  alt="Yllka Uka"
                  fill
                  sizes="280px"
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </div>

      <section className="mt-24 border-t border-line py-16 sm:mt-32 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeader eyebrow="What I do" heading="Core areas of focus" />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 [&>*:last-child]:col-span-2 lg:[&>*:last-child]:col-span-1">
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
            <SectionHeader eyebrow="How I think" heading="The principles behind the process." />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {howIThink.map((item, i) => (
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
            <SectionHeader eyebrow="Experience" heading="Where I've worked" />
          </Reveal>
          <div className="mt-12 flex flex-col gap-8">
            {experience.map((entry) => (
              <Reveal key={entry.company}>
                <div className="flex flex-col gap-2 border-t border-line pt-6 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-ink">
                      {entry.title} — {entry.company}
                    </h3>
                    <p className="mt-1 max-w-xl text-sm text-ink-soft">{entry.summary}</p>
                  </div>
                  <p className="whitespace-nowrap text-sm text-ink-soft">{entry.period}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-16 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeader eyebrow="Education" heading="Background" />
          </Reveal>
          <div className="mt-12 flex flex-col gap-8">
            {education.map((entry) => (
              <Reveal key={entry.institution}>
                <div className="flex flex-col gap-2 border-t border-line pt-6 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-ink">{entry.institution}</h3>
                    <p className="mt-1 text-sm text-ink-soft">{entry.degree}</p>
                  </div>
                  <p className="whitespace-nowrap text-sm text-ink-soft">{entry.period}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-ink py-16 sm:py-24">
        <Container>
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
              <h2 className="max-w-xl font-serif text-3xl font-medium tracking-tight text-paper sm:text-4xl">
                Got a complex product to figure out?
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
