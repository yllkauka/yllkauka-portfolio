import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function Statement({ text }: { text: string }) {
  return (
    <section className="border-t border-line py-16 sm:py-24">
      <Container>
        <Reveal>
          <p className="max-w-3xl font-serif text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl md:text-4xl">
            {text}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
