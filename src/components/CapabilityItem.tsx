export function CapabilityItem({
  title,
  description,
  accent,
}: {
  title: string;
  description: string;
  accent: "accent" | "accent2";
}) {
  const titleColor = accent === "accent" ? "text-accent-ink" : "text-accent2-ink";
  return (
    <div>
      <h3 className={`text-xs font-medium uppercase tracking-[0.16em] ${titleColor}`}>{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-ink">{description}</p>
    </div>
  );
}
