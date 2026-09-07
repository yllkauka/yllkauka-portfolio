import { Visual } from "./Visual";
import type { VisualSpec } from "@/content/types";

const responsiveWidth: Record<string, string> = {
  desktop: "w-full sm:w-3/5",
  tablet: "w-full sm:w-1/4",
  mobile: "w-full sm:w-[16%]",
};

export function ImageGallery({
  items,
  layout = "stack",
}: {
  items: VisualSpec[];
  layout?: "stack" | "grid" | "responsive" | "row";
}) {
  if (layout === "row") {
    return (
      <div className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-2 md:mx-0 md:px-0">
        {items.map((item, i) => (
          <figure key={i} className="w-[220px] shrink-0 snap-start">
            <Visual visual={item} sizes="220px" />
            {item.caption && (
              <figcaption className="mt-2 text-xs text-ink-soft">{item.caption}</figcaption>
            )}
          </figure>
        ))}
      </div>
    );
  }

  if (layout === "grid") {
    return (
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {items.map((item, i) => (
          <figure key={i}>
            <Visual visual={item} sizes="(min-width: 640px) 45vw, 90vw" />
            {item.caption && (
              <figcaption className="mt-3 text-sm text-ink-soft">{item.caption}</figcaption>
            )}
          </figure>
        ))}
      </div>
    );
  }

  if (layout === "responsive") {
    return (
      <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-end">
        {items.map((item, i) => (
          <figure key={i} className={responsiveWidth[item.frame] ?? "w-full sm:w-1/3"}>
            <Visual visual={item} />
            {item.caption && (
              <figcaption className="mt-2 text-xs text-ink-soft">{item.caption}</figcaption>
            )}
          </figure>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-16 sm:gap-24">
      {items.map((item, i) => (
        <figure key={i}>
          <Visual visual={item} priority={i === 0} />
          {item.caption && (
            <figcaption className="mt-3 text-sm text-ink-soft">{item.caption}</figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
