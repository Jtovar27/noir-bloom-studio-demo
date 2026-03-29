import Link from "next/link";
import { CtaBanner } from "@/components/cta-banner";
import { Reveal } from "@/components/reveal";
import { bookingLinks, fullServices } from "@/data/site";

const process = [
  "Mood alignment and visual direction",
  "Comfort-first prep with quiet, unhurried pacing",
  "Finishing passes that hold up in real life and close-up content",
];

export default function ServicesPage() {
  return (
    <main className="pb-20">
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid gap-10 border-t border-[var(--color-border)] pt-16 xl:grid-cols-[0.78fr_1.22fr]">
          <Reveal>
            <div>
              <p className="editorial-label">Service Edit</p>
              <h1 className="section-title mt-5">
                A warmer, tighter menu designed to feel bespoke rather than busy.
              </h1>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
              <p className="section-copy">
                The menu is written like a boutique offering. Fewer services, clearer
                positioning and better pacing make the experience feel premium before
                a client even reaches the booking step.
              </p>

              <div className="space-y-6 border-l border-[var(--color-border)] pl-6">
                {process.map((item, index) => (
                  <article key={item}>
                    <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--color-gold)]">
                      0{index + 1}
                    </p>
                    <p className="mt-3 text-sm leading-8 text-[var(--color-mist)]">
                      {item}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
          {fullServices.map((service, index) => (
            <Reveal key={service.name} delay={index * 60}>
              <article className="service-row service-row-detailed">
                <div>
                  <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-gold)]">
                    {service.duration}
                  </p>
                  <h2 className="mt-3 font-serif-display text-[2.15rem] leading-none text-[var(--color-cream)] sm:text-[2.5rem]">
                    {service.name}
                  </h2>
                </div>

                <div className="service-row-meta">
                  <p className="service-price">{service.price}</p>
                  <p className="text-sm leading-8 text-[var(--color-mist)]">
                    {service.blurb}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-3">
                    <Link href={bookingLinks.primary} className="button-secondary">
                      Book this service
                    </Link>
                    <span className="inline-flex items-center text-xs uppercase tracking-[0.3em] text-[var(--color-mist)]">
                      Warm luxury care
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="mt-24">
        <CtaBanner
          title="Build a ritual around content days, events or a monthly beauty reset."
          text="The service structure stays realistic and bookable, but the presentation now feels much closer to a considered boutique brand."
        />
      </div>
    </main>
  );
}
