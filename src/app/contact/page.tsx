import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { bookingLinks, faqs } from "@/data/site";

const contactCards = [
  {
    title: "Bookings",
    body: "Reserve appointments, private sessions or event prep bookings.",
    href: bookingLinks.primary,
    label: "Email the studio",
  },
  {
    title: "Consultations",
    body: "Request custom nail concepts, group bookings or campaign-ready styling.",
    href: bookingLinks.consultation,
    label: "Ask for a consultation",
  },
  {
    title: "Direct line",
    body: "For quick availability checks and premium service inquiries.",
    href: bookingLinks.phone,
    label: "Call the studio",
  },
];

export default function ContactPage() {
  return (
    <main className="pb-20">
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="A booking flow that feels polished, warm and ready for real clients."
              description="For this demo, contact actions are intentionally functional: email booking, consultation requests and direct phone contact all work without placeholder dead ends."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={bookingLinks.instagram} className="button-secondary">
                Instagram preview
              </Link>
              <Link href={bookingLinks.primary} className="button-primary">
                Start a booking
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="surface-panel rounded-[34px] p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-gold)]">
                Studio details
              </p>
              <div className="mt-6 space-y-5 text-sm leading-8 text-[var(--color-mist)]">
                <p>Monday to Saturday</p>
                <p>10:00 AM to 7:00 PM</p>
                <p>Private boutique setting, by appointment only</p>
                <p>Flatiron District, New York City</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto mt-16 grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        {contactCards.map((item, index) => (
          <Reveal key={item.title} delay={index * 80}>
            <article className="service-card rounded-[30px] p-7">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">
                {item.title}
              </p>
              <p className="mt-4 text-sm leading-8 text-[var(--color-mist)]">{item.body}</p>
              <Link href={item.href} className="button-secondary mt-8">
                {item.label}
              </Link>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto mt-20 max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Helpful details before the first appointment."
            description="The FAQ keeps the booking decision friction low and makes the demo feel closer to a real business rather than a static portfolio mock."
            align="center"
          />
        </Reveal>
        <div className="mt-10 space-y-4">
          {faqs.map((item, index) => (
            <Reveal key={item.question} delay={index * 70}>
              <article className="surface-panel rounded-[26px] p-6 sm:p-7">
                <h2 className="text-lg text-[var(--color-cream)]">{item.question}</h2>
                <p className="mt-3 text-sm leading-8 text-[var(--color-mist)]">{item.answer}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
