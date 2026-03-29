import Link from "next/link";
import { bookingLinks } from "@/data/site";

type CtaBannerProps = {
  title: string;
  text: string;
};

export function CtaBanner({ title, text }: CtaBannerProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="cta-shell overflow-hidden rounded-[2.2rem] px-6 py-10 sm:px-10 sm:py-12">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_left,_rgba(192,141,131,0.18),_transparent_58%)] lg:block" />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="editorial-label">
              Booking CTA
            </p>
            <h2 className="mt-5 font-serif-display text-4xl leading-tight text-[var(--color-cream)] sm:text-5xl">
              {title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-[var(--color-mist)] sm:text-lg">
              {text}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href={bookingLinks.primary} className="button-primary justify-center">
              Request booking
            </Link>
            <Link href={bookingLinks.consultation} className="button-secondary justify-center">
              Ask for a consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
