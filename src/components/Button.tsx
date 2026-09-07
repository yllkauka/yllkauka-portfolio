import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost" | "onDark";

const base =
  "focus-ring inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-medium transition-colors duration-200";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-paper hover:bg-accent-ink",
  secondary: "border border-ink/70 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  ghost: "text-ink underline underline-offset-4 decoration-line hover:decoration-accent hover:text-accent-ink",
  onDark: "bg-paper text-ink hover:bg-accent-soft",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ...rest
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </Link>
  );
}
