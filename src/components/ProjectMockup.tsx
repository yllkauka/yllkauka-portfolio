import { Visual } from "./Visual";
import type { VisualSpec } from "@/content/types";

/**
 * Drops a full-page screenshot into the site's existing browser/phone
 * mockups (see `Chrome` in Visual.tsx), cropped to the mockup's viewport
 * and top-aligned — so a long full-page capture reads as "the top of the
 * real site inside a browser window" rather than a long scrolling image.
 */
export function ProjectMockup({
  desktop,
  mobile,
  priority = false,
}: {
  desktop: VisualSpec;
  mobile?: VisualSpec;
  priority?: boolean;
}) {
  return (
    <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-end">
      <div className="w-full sm:w-3/5">
        <Visual visual={desktop} crop priority={priority} sizes="(min-width: 640px) 60vw, 100vw" />
      </div>
      {mobile && (
        <div className="w-full sm:w-[28%]">
          <Visual visual={mobile} crop sizes="(min-width: 640px) 28vw, 100vw" />
        </div>
      )}
    </div>
  );
}
