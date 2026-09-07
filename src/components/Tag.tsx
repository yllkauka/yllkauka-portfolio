const styles = {
  neutral: "border-line text-ink-soft",
  accent: "border-accent-soft bg-accent-soft text-accent-ink",
  accent2: "border-accent2-soft bg-accent2-soft text-accent2-ink",
} as const;

export function Tag({
  children,
  variant = "neutral",
}: {
  children: React.ReactNode;
  variant?: keyof typeof styles;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-sm border px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide ${styles[variant]}`}
    >
      {children}
    </span>
  );
}
