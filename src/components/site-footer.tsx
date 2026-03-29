import Link from "next/link";
import { bookingLinks, navigation } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-white/8">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.3fr_0.8fr_0.9fr] lg:px-8">
        <div className="max-w-md">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-gold)]">
            Noir Bloom Studio
          </p>
          <h2 className="mt-4 font-serif-display text-3xl text-[var(--color-cream)]">
            Beauty rituals with an editorial point of view.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--color-mist)]">
            Premium self-care experiences designed to feel polished, intimate and visually unforgettable.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-cream)]">
            Navigate
          </p>
          <div className="mt-5 flex flex-col gap-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--color-mist)] transition-colors hover:text-[var(--color-cream)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-cream)]">
            Connect
          </p>
          <div className="mt-5 flex flex-col gap-3 text-sm text-[var(--color-mist)]">
            <Link href={bookingLinks.primary} className="hover:text-[var(--color-cream)]">
              hello@noirbloomstudio.com
            </Link>
            <Link href={bookingLinks.phone} className="hover:text-[var(--color-cream)]">
              +1 (212) 555-0192
            </Link>
            <Link href={bookingLinks.instagram} className="hover:text-[var(--color-cream)]">
              Instagram preview
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
