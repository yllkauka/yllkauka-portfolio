import Image from "next/image";
import { imageExists, getImageDimensions } from "@/lib/media";
import type { VisualSpec, Frame } from "@/content/types";

// Fallback aspect ratios, used only for placeholder frames (no real image to
// measure yet). Once a real file exists, its own dimensions drive the box.
const aspectClass: Record<Frame, string> = {
  desktop: "aspect-[16/10]",
  tablet: "aspect-[3/4]",
  mobile: "aspect-[9/19.5]",
  wide: "aspect-[21/9]",
  square: "aspect-square",
  plain: "aspect-[4/3]",
};

// Phone/tablet screenshots are naturally tall — left at full column width
// they tower over everything else, so cap how wide they're allowed to render.
const maxWidthClass: Partial<Record<Frame, string>> = {
  mobile: "mx-auto max-w-[300px]",
  tablet: "mx-auto max-w-[420px]",
};

function PlaceholderFill({ label }: { label: string }) {
  return (
    <div
      className="absolute inset-0 flex items-end justify-start p-4"
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, color-mix(in srgb, var(--color-accent) 14%, var(--color-line)) 0, color-mix(in srgb, var(--color-accent) 14%, var(--color-line)) 1px, transparent 1px, transparent 14px)",
        backgroundColor: "var(--color-paper-dim)",
      }}
    >
      <span className="max-w-[85%] rounded-sm border border-dashed border-accent-soft bg-accent-soft/80 px-2 py-1 text-[11px] leading-snug text-accent-ink">
        {label}
        <span className="block text-accent-ink/60">screenshot pending</span>
      </span>
    </div>
  );
}

function Chrome({ frame, children }: { frame: Frame; children: React.ReactNode }) {
  if (frame === "desktop") {
    return (
      <div className="flex h-full w-full flex-col overflow-hidden rounded-lg border border-line bg-paper-dim">
        <div className="flex shrink-0 items-center gap-1.5 border-b border-line bg-paper px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
        </div>
        <div className="relative flex-1">{children}</div>
      </div>
    );
  }
  if (frame === "mobile") {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-[2rem] border-[6px] border-ink bg-paper-dim">
        <span className="absolute left-1/2 top-2 z-10 h-1.5 w-12 -translate-x-1/2 rounded-full bg-ink/70" />
        <div className="relative h-full w-full">{children}</div>
      </div>
    );
  }
  if (frame === "tablet") {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-2xl border-[8px] border-ink bg-paper-dim">
        <div className="relative h-full w-full">{children}</div>
      </div>
    );
  }
  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg border border-line bg-paper-dim">
      {children}
    </div>
  );
}

export function Visual({
  visual,
  priority = false,
  sizes = "(min-width: 1024px) 1200px, 100vw",
  crop = false,
}: {
  visual: VisualSpec;
  priority?: boolean;
  sizes?: string;
  /** Force the frame's fixed (viewport-shaped) aspect ratio and crop to fill
   * it, anchored to the top of the image — used for thumbnail grids and full
   * page screenshots dropped into a browser/phone mockup, so a tall
   * full-page capture shows its header/hero rather than stretching the
   * frame. In-case-study screenshots leave this off so nothing crops. */
  crop?: boolean;
}) {
  const hasImage = imageExists(visual.src);
  const dims = !crop && hasImage ? getImageDimensions(visual.src) : null;
  const label = visual.caption ?? visual.alt;
  const widthCap = maxWidthClass[visual.frame] ?? "";

  return (
    <div
      className={`relative w-full ${dims ? "" : aspectClass[visual.frame]} ${widthCap}`}
      style={dims ? { aspectRatio: `${dims.width} / ${dims.height}` } : undefined}
    >
      <Chrome frame={visual.frame}>
        {hasImage ? (
          <Image
            src={visual.src}
            alt={visual.alt}
            fill
            priority={priority}
            sizes={sizes}
            className={crop ? "object-cover object-top" : "object-contain"}
          />
        ) : (
          <PlaceholderFill label={label} />
        )}
      </Chrome>
    </div>
  );
}
