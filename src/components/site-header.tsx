"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { bookingLinks, navigation } from "@/data/site";

function isCurrent(pathname: string, href: string) {
  if (href === "/") {
    return pathname === href;
  }

  return pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 border-b border-[var(--color-border)] px-1 py-4">
          <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
            <div className="brand-mark">
              <p className="brand-mark-kicker">Warm Beauty Boutique</p>
              <p className="brand-mark-title transition-transform duration-300 group-hover:translate-x-0.5">
                Noir Bloom
              </p>
              <div className="brand-mark-detail">
                <span>Studio</span>
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm uppercase tracking-[0.22em] transition-all duration-300 ${
                  isCurrent(pathname, item.href)
                    ? "text-[var(--color-cream)]"
                    : "text-[var(--color-mist)] hover:text-[var(--color-cream)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href={bookingLinks.primary} className="button-primary hidden sm:inline-flex">
              Book the ritual
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[var(--color-cream)] md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="relative block h-4 w-4">
                <span
                  className={`absolute left-0 top-1/2 h-px w-4 -translate-y-[6px] bg-current transition-transform ${
                    open ? "translate-y-0 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 h-px w-4 bg-current transition-opacity ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 h-px w-4 translate-y-[6px] bg-current transition-transform ${
                    open ? "-translate-y-0 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="surface-panel mt-3 flex flex-col gap-2 rounded-[28px] p-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-2xl px-4 py-3 text-sm ${
                  isCurrent(pathname, item.href)
                    ? "bg-white/10 text-[var(--color-cream)]"
                    : "text-[var(--color-mist)]"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href={bookingLinks.primary} className="button-primary mt-2 justify-center" onClick={() => setOpen(false)}>
              Book the ritual
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
