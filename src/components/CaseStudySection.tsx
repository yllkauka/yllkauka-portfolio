import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function CaseStudySection({
  eyebrow,
  heading,
  description,
  children,
  className = "",
}: {
  eyebrow: string;
  heading?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`border-t border-line py-16 sm:py-24 ${className}`}>
      <Container>
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent-ink">
            {eyebrow}
          </p>
          {heading && (
            <h2 className="mt-4 max-w-3xl font-serif text-3xl font-medium leading-[1.15] tracking-tight text-ink sm:text-4xl">
              {heading}
            </h2>
          )}
          {description && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
              {description}
            </p>
          )}
          {children && <div className={heading || description ? "mt-10" : ""}>{children}</div>}
        </Reveal>
      </Container>
    </section>
  );
}
