"use client";

import { useState } from "react";

export function Slideshow({
  children,
  captions = [],
}: {
  children: React.ReactNode[];
  captions?: (string | undefined)[];
}) {
  const [index, setIndex] = useState(0);
  const count = children.length;
  const go = (next: number) => setIndex(((next % count) + count) % count);

  if (count === 0) return null;

  return (
    <div
      className="focus-ring"
      tabIndex={count > 1 ? 0 : undefined}
      role={count > 1 ? "group" : undefined}
      aria-label={count > 1 ? "Screen slideshow" : undefined}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(index + 1);
        if (e.key === "ArrowLeft") go(index - 1);
      }}
    >
      <div key={index} data-reveal className="reveal-armed is-visible">
        {children[index]}
      </div>

      {(captions[index] || count > 1) && (
        <div className="mt-4 flex items-center justify-between gap-4">
          {captions[index] ? (
            <p className="text-sm text-ink-soft">{captions[index]}</p>
          ) : (
            <span />
          )}

          {count > 1 && (
            <div className="flex shrink-0 items-center gap-3">
              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label="Previous screen"
                className="focus-ring flex h-8 w-8 items-center justify-center rounded-sm border border-line text-ink transition-colors hover:border-ink"
              >
                ←
              </button>
              <span className="text-xs tabular-nums text-ink-soft">
                {index + 1} / {count}
              </span>
              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label="Next screen"
                className="focus-ring flex h-8 w-8 items-center justify-center rounded-sm border border-line text-ink transition-colors hover:border-ink"
              >
                →
              </button>
            </div>
          )}
        </div>
      )}

      {count > 1 && (
        <div className="mt-3 flex gap-2">
          {children.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to screen ${i + 1}`}
              aria-current={i === index}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                i === index ? "bg-accent" : "bg-line hover:bg-ink/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
