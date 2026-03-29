import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { bookingLinks, faqs } from "@/data/site";

const contactCards = [
  {
    title: "Bookings",
    body: "Reserve appointments, private sessions or event preparation with a direct email flow.",
    href: bookingLinks.primary,
    label: "Email the studio",
  },
  {
    title: "Consultations",
    body: "Request custom nail concepts, group bookings or campaign-ready service mixes.",
    href: bookingLinks.consultation,
    label: "Request consultation",
  },
  {
    title: "Direct line",
    body: "Use the phone line for fast availability checks and warm, high-touch inquiries.",
    href: bookingLinks.phone,
    label: "Call Noir Bloom",
  },
];

export default function ContactPage() {
  return (
    <main className="pb-20">
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid gap-10 border-t border-[var(--color-border)] pt-16 xl:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div>
              <p className="editorial-label">Contact</p>
              <h1 className="section-title mt-5">
                A booking experience that feels warm, functional and actually real.
              </h1>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid gap-8 lg:grid-cols-[1fr_0.82fr]">
              <div>
                <p className="section-copy">
                  Contact actions are intentionally simple and usable. No empty links,
                  no fake form shell, no dead-end CTAs. The page behaves like a real
                  premium boutique site should.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href={bookingLinks.primary} className="button-primary">
                    Start a booking
                  </Link>
                  <Link href={bookingLinks.instagram} className="button-secondary">
                    Instagram preview
                  </Link>
                </div>
              </div>

              <div className="space-y-5 border-l border-[var(--color-border)] pl-6 text-sm leading-8 text-[var(--color-mist)]">
                <p>Monday to Saturday</p>
                <p>10:00 AM to 7:00 PM</p>
                <p>Private boutique setting, by appointment only</p>
                <p>Flatiron District, New York City</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {contactCards.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <article className="quote-panel h-full">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--color-gold)]">
                  {item.title}
                </p>
                <p className="mt-4 text-sm leading-8 text-[var(--color-mist)]">
                  {item.body}
                </p>
                <Link href={item.href} className="button-secondary mt-8">
                  {item.label}
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="border-t border-[var(--color-border)] pt-16 text-center">
            <p className="editorial-label justify-center">FAQ</p>
            <h2 className="section-title mx-auto mt-5 max-w-3xl">
              Helpful details that keep the booking decision warm and low-friction.
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
          {faqs.map((item, index) => (
            <Reveal key={item.question} delay={index * 70}>
              <article className="faq-row">
                <h3 className="text-lg text-[var(--color-cream)]">{item.question}</h3>
                <p className="text-sm leading-8 text-[var(--color-mist)]">{item.answer}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
