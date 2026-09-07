export function SectionHeader({
  eyebrow,
  heading,
  description,
  align = "left",
}: {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-accent-ink">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
        {heading}
      </h2>
      {description && (
        <p className={`mt-4 max-w-2xl text-base leading-relaxed text-ink-soft ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
