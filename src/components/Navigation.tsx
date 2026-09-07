"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import { site } from "@/content/site";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <Container className="flex items-center justify-between py-5">
        <Link href="/" className="focus-ring font-serif text-xl italic tracking-tight text-ink">
          {site.fullName}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {site.nav
            .filter((item) => item.href !== "/contact")
            .map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`focus-ring relative pb-1.5 text-sm transition-colors ${
                    active ? "text-ink" : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute -bottom-0.5 left-0 h-[2px] w-3 bg-accent" aria-hidden />
                  )}
                </Link>
              );
            })}
          <Link
            href="/contact"
            aria-current={pathname.startsWith("/contact") ? "page" : undefined}
            className="focus-ring rounded-sm bg-accent px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-accent-ink"
          >
            Contact
          </Link>
        </nav>

        <button
          type="button"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-sm text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 block h-[1.5px] w-5 bg-ink transition-transform ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] block h-[1.5px] w-5 bg-ink transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] block h-[1.5px] w-5 bg-ink transition-transform ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={`md:hidden ${open ? "block" : "hidden"} border-t border-line bg-paper`}
      >
        <Container className="flex flex-col gap-1 py-4">
          {site.nav
            .filter((item) => item.href !== "/contact")
            .map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`focus-ring rounded-sm border-l-2 py-3 pl-3 text-base transition-colors ${
                    active ? "border-accent text-ink" : "border-transparent text-ink-soft"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          <Link
            href="/contact"
            className="focus-ring mt-2 rounded-sm bg-accent px-4 py-3 text-center text-sm font-medium text-paper"
          >
            Contact
          </Link>
        </Container>
      </div>
    </header>
  );
}
