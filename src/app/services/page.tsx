import Link from "next/link";
import { CtaBanner } from "@/components/cta-banner";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { bookingLinks, fullServices } from "@/data/site";

const process = [
  "Mood alignment and style direction",
  "Precision prep with a comfort-first pacing",
  "Finish refinement for close-up worthy results",
];

export default function ServicesPage() {
  return (
    <main className="pb-20">
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <SectionHeading
              eyebrow="Services"
              title="Luxury beauty rituals designed for polish, presence and repeat bookings."
              description="Each service balances aesthetic precision with a slower, more considered experience. The menu is concise, premium and built to feel desirable before the appointment even begins."
            />
            <div className="surface-panel rounded-[32px] p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-gold)]">
                Signature flow
              </p>
              <div className="mt-6 space-y-4">
                {process.map((item, index) => (
                  <div key={item} className="flex gap-4 rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-sm text-[var(--color-cream)]">
                      0{index + 1}
                    </div>
                    <p className="text-sm leading-7 text-[var(--color-mist)]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          {fullServices.map((service, index) => (
            <Reveal key={service.name} delay={index * 70}>
              <article className="service-card h-full rounded-[30px] p-7 sm:p-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-gold)]">
                      {service.duration}
                    </p>
                    <h2 className="mt-3 font-serif-display text-3xl text-[var(--color-cream)]">
                      {service.name}
                    </h2>
                  </div>
                  <p className="text-lg text-[var(--color-cream)]">{service.price}</p>
                </div>
                <p className="mt-5 text-sm leading-8 text-[var(--color-mist)]">{service.blurb}</p>
                <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/8 pt-6">
                  <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-mist)]">
                    Premium care
                  </span>
                  <Link href={bookingLinks.primary} className="button-secondary">
                    Book now
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="mt-20">
        <CtaBanner
          title="Build your service mix around events, content days or a monthly ritual."
          text="The menu is designed to convert beautifully online while still feeling realistic and bookable as a modern boutique experience."
        />
      </div>
    </main>
  );
}
