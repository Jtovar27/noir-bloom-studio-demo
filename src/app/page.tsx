import Image from "next/image";
import Link from "next/link";
import { CtaBanner } from "@/components/cta-banner";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  bookingLinks,
  experiencePillars,
  faqs,
  featuredServices,
  galleryMoments,
  studioMetrics,
  testimonials,
} from "@/data/site";

export default function Home() {
  return (
    <main className="pb-20">
      <section className="hero-shell mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <div className="max-w-2xl">
              <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--color-gold)]">
                Luxury beauty studio demo
              </p>
              <h1 className="mt-8 font-serif-display text-6xl leading-[0.95] text-[var(--color-cream)] sm:text-7xl lg:text-[5.9rem]">
                Where modern self-care becomes a cinematic ritual.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-mist)] sm:text-xl">
                Noir Bloom Studio merges skincare, nail artistry and boutique hospitality into a brand experience designed to feel intimate, editorial and unmistakably premium.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={bookingLinks.primary} className="button-primary justify-center">
                  Book the ritual
                </Link>
                <Link href="/gallery" className="button-secondary justify-center">
                  View signature work
                </Link>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {studioMetrics.map((item, index) => (
                  <div key={item.label} className="surface-panel rounded-[24px] px-5 py-5" style={{ transitionDelay: `${index * 90}ms` }}>
                    <p className="font-serif-display text-3xl text-[var(--color-cream)]">{item.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.24em] text-[var(--color-mist)]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <div className="hero-visual overflow-hidden rounded-[40px]">
                <div className="relative h-[620px] w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1400&q=80"
                    alt="Noir Bloom Studio beauty portrait"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.12),rgba(8,8,8,0.7))]" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="surface-panel max-w-sm rounded-[28px] p-5">
                    <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-gold)]">
                      Signature ambience
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-mist)]">
                      Deep charcoal tones, warm champagne highlights and a service flow designed to feel quiet, elegant and camera-ready.
                    </p>
                  </div>
                </div>
              </div>
              <div className="surface-panel absolute -bottom-6 left-5 max-w-[240px] rounded-[26px] p-5 sm:left-auto sm:right-[-1.5rem] sm:top-8">
                <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-gold)]">
                  Most booked
                </p>
                <h2 className="mt-3 font-serif-display text-2xl text-[var(--color-cream)]">
                  Builder Gel
                </h2>
                <p className="mt-2 text-sm leading-7 text-[var(--color-mist)]">
                  Structured, glossy and designed for repeat close-ups.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8" id="about">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <div className="editorial-card overflow-hidden rounded-[34px] p-6 sm:p-8">
              <div className="relative h-[460px] overflow-hidden rounded-[28px]">
                <Image
                  src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=80"
                  alt="Skincare and self-care details"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              eyebrow="About the brand"
              title="Noir Bloom is built around intimate luxury, visual calm and elevated outcomes."
              description="The concept balances a dark editorial identity with welcoming self-care energy. It feels selective, current and highly shareable without drifting into trend-driven clutter. Every section of the demo is designed to support that credibility."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {experiencePillars.map((item, index) => (
                <article key={item.title} className="surface-panel rounded-[26px] p-5" style={{ transitionDelay: `${index * 80}ms` }}>
                  <h3 className="text-lg text-[var(--color-cream)]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-mist)]">{item.text}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8" id="services">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="A focused menu with premium language, realistic pricing and high perceived value."
            description="The service architecture is intentionally compact. It reads as curated rather than crowded, which keeps the brand feeling high-end and easier to trust."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {featuredServices.map((service, index) => (
            <Reveal key={service.name} delay={index * 90}>
              <article className="service-card h-full rounded-[30px] p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-gold)]">
                      {service.duration}
                    </p>
                    <h3 className="mt-3 font-serif-display text-3xl text-[var(--color-cream)]">
                      {service.name}
                    </h3>
                  </div>
                  <p className="text-lg text-[var(--color-cream)]">{service.price}</p>
                </div>
                <p className="mt-5 text-sm leading-8 text-[var(--color-mist)]">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={220}>
          <div className="mt-8">
            <Link href="/services" className="button-secondary">
              Explore the full service menu
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Why clients choose us"
              title="The experience is as intentional as the result."
              description="Luxury is communicated here through pacing, restraint, tactile details and how the brand behaves across every touchpoint."
            />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-3">
            {experiencePillars.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <article className="surface-panel rounded-[28px] p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm text-[var(--color-cream)]">
                    0{index + 1}
                  </div>
                  <h3 className="mt-5 text-xl text-[var(--color-cream)]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-8 text-[var(--color-mist)]">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8" id="gallery">
        <Reveal>
          <SectionHeading
            eyebrow="Gallery"
            title="Strong enough for screenshots, reels and polished case-study presentation."
            description="The visual rhythm uses mixed image sizing, dark framing and warm highlights so the layout holds attention without feeling noisy."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {galleryMoments.map((item, index) => (
            <Reveal key={item.title} delay={index * 85}>
              <article className="gallery-card min-h-[380px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="gallery-image"
                />
                <div className="gallery-overlay" />
                <div className="relative z-10 mt-auto p-6">
                  <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-gold)]">
                    {item.tag}
                  </p>
                  <h3 className="mt-3 font-serif-display text-3xl text-[var(--color-cream)]">
                    {item.title}
                  </h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="Client language that reinforces polish, comfort and desirability."
            description="These testimonials are written to sound believable, premium and aligned with the tone of a beauty brand that wins through experience, not just service output."
            align="center"
          />
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.author} delay={index * 80}>
              <article className="surface-panel h-full rounded-[30px] p-7">
                <p className="text-sm leading-8 text-[var(--color-mist)]">“{item.quote}”</p>
                <div className="mt-8 border-t border-white/8 pt-5">
                  <p className="text-base text-[var(--color-cream)]">{item.author}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.28em] text-[var(--color-mist)]">
                    {item.role}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Clear answers that reduce hesitation and make the brand feel operationally real."
            description="Practical microcopy matters in premium service websites. It keeps the experience elegant while still doing conversion work."
            align="center"
          />
        </Reveal>
        <div className="mt-10 space-y-4">
          {faqs.map((item, index) => (
            <Reveal key={item.question} delay={index * 70}>
              <article className="surface-panel rounded-[28px] p-6 sm:p-7">
                <h3 className="text-lg text-[var(--color-cream)]">{item.question}</h3>
                <p className="mt-3 text-sm leading-8 text-[var(--color-mist)]">{item.answer}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="mt-24">
        <CtaBanner
          title="Turn a beauty brand concept into something that feels ready to book."
          text="This demo is structured to look strong in motion, still imagery and real navigation, making it useful both as a portfolio piece and a lead-generation asset."
        />
      </div>
    </main>
  );
}
