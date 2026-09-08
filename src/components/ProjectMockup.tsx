import Image from "next/image";
import { Chrome, PlaceholderFill } from "./Visual";
import { imageExists } from "@/lib/media";
import type { VisualSpec } from "@/content/types";

/**
 * One device panel. `className` controls sizing per breakpoint: give it a
 * definite width (e.g. `w-full`) to size the panel from its width (height
 * follows from the aspect ratio), or a definite height (e.g. `sm:h-[400px]`
 * paired with `sm:w-auto`) to size it from its height instead — used so a
 * desktop and mobile panel placed side by side land at the *same visual
 * height* rather than the same width, since a phone is naturally narrower
 * than a browser window, not shorter.
 */
function Panel({
  visual,
  priority,
  className = "",
}: {
  visual: VisualSpec;
  priority?: boolean;
  className?: string;
}) {
  const hasImage = imageExists(visual.src);
  const ratio = visual.frame === "mobile" ? "9 / 19.5" : "16 / 10";

  return (
    <div className={`shrink-0 ${className}`} style={{ aspectRatio: ratio }}>
      <Chrome frame={visual.frame}>
        {hasImage ? (
          <Image
            src={visual.src}
            alt={visual.alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 60vw, 90vw"
            className="object-cover object-top"
          />
        ) : (
          <PlaceholderFill label={visual.caption ?? visual.alt} />
        )}
      </Chrome>
    </div>
  );
}

export function ProjectMockup({
  desktop,
  mobile,
  priority = false,
}: {
  /** Omit for a mobile-only product. */
  desktop?: VisualSpec;
  /** Omit for a web-only product — no mobile screens are invented. */
  mobile?: VisualSpec;
  priority?: boolean;
}) {
  // Mobile-only product (e.g. Lifecard) — the mobile panel is the hero,
  // shown alone and larger rather than squeezed next to an empty slot.
  if (!desktop && mobile) {
    return (
      <Panel
        visual={mobile}
        priority={priority}
        className="w-[220px] sm:w-auto sm:h-[460px] lg:h-[600px]"
      />
    );
  }

  // Web-only product.
  if (desktop && !mobile) {
    return (
      <Panel
        visual={desktop}
        priority={priority}
        className="w-full sm:w-auto sm:h-[360px] lg:h-[460px]"
      />
    );
  }

  // Web + mobile — same visual height at sm+; stacked (each at its own
  // natural width) on small screens so nothing overflows horizontally.
  return (
    <div className="flex flex-col items-start gap-10 sm:flex-row sm:items-start sm:gap-8">
      <Panel
        visual={desktop!}
        priority={priority}
        className="w-full sm:w-auto sm:h-[300px] lg:h-[400px]"
      />
      <Panel visual={mobile!} className="w-[220px] sm:w-auto sm:h-[300px] lg:h-[400px]" />
    </div>
  );
}
