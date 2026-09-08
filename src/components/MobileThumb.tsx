import Image from "next/image";
import { imageExists } from "@/lib/media";
import type { VisualSpec } from "@/content/types";

/**
 * Compact card cover for a mobile-only product. Keeps the same landscape
 * footprint every other project card uses (so the grid stays visually
 * consistent) but shows a small centred phone mockup inside it instead of
 * stretching a portrait screenshot into a wide frame.
 */
export function MobileThumb({ visual, priority = false }: { visual: VisualSpec; priority?: boolean }) {
  const hasImage = imageExists(visual.src);

  return (
    <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-lg border border-line bg-paper-dim py-5">
      <div
        className={`relative h-full overflow-hidden rounded-[1.1rem] bg-paper ${
          hasImage ? "border-[3px] border-ink" : "border-2 border-dashed border-accent-soft"
        }`}
        style={{ aspectRatio: "9 / 19.5" }}
      >
        <span className="absolute left-1/2 top-1 z-10 h-1 w-7 -translate-x-1/2 rounded-full bg-ink/70" />
        {hasImage ? (
          <Image
            src={visual.src}
            alt={visual.alt}
            fill
            priority={priority}
            sizes="160px"
            className="object-cover object-top"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, color-mix(in srgb, var(--color-accent) 14%, var(--color-line)) 0, color-mix(in srgb, var(--color-accent) 14%, var(--color-line)) 1px, transparent 1px, transparent 10px)",
              backgroundColor: "var(--color-paper-dim)",
            }}
          />
        )}
      </div>
    </div>
  );
}
