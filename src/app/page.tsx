import Image from "next/image";
import Link from "next/link";
import { CtaBanner } from "@/components/cta-banner";
import { Reveal } from "@/components/reveal";
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
      <section className="hero-shell mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr] xl:items-start">
          <Reveal>
            <div className="hero-editorial">
              <div className="hero-copy">
                <p className="editorial-label">Boutique Beauty Experience</p>
                <h1 className="hero-title">
                  Quiet luxury for women who want their beauty rituals to feel
                  composed, modern and worth sharing.
                </h1>
                <p className="hero-text">
                  Noir Bloom Studio is not a salon landing page. It is a brand
                  world built around polish, intimacy, image culture and
                  high-touch self-care.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href={bookingLinks.primary} className="button-primary">
                    Reserve a signature ritual
                  </Link>
                  <Link href="/gallery" className="button-secondary">
                    Enter the gallery
                  </Link>
                </div>
              </div>

              <div className="hero-metrics">
                {studioMetrics.map((item) => (
                  <article key={item.label} className="metric-strip">
                    <p className="metric-value">{item.value}</p>
                    <p className="metric-label">{item.label}</p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="hero-composition">
              <article className="hero-main-image">
                <div className="relative h-[460px] w-full sm:h-[560px]">
                  <Image
                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1400&q=80"
                    alt="Noir Bloom Studio editorial portrait"
                    fill
                    priority
                    sizes="(max-width: 1280px) 100vw, 42vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="hero-main-overlay" />
              </article>

              <article className="hero-floating-note">
                <p className="editorial-label">Creative Direction</p>
                <p className="mt-3 text-sm leading-8 text-[var(--color-mist)]">
                  Espresso lacquer, cosmetic blush, warm ivory and clean flash
                  photography cues. More editorial brand world, less generic
                  luxury template.
                </p>
              </article>

              <article className="hero-side-card">
                <p className="editorial-label">Most Requested</p>
                <h2 className="mt-3 font-serif-display text-3xl leading-none text-[var(--color-cream)]">
                  Builder Gel
                </h2>
                <p className="mt-4 text-sm leading-8 text-[var(--color-mist)]">
                  Structured shine, precise shape and a finish that reads strong
                  both in person and in close-up content.
                </p>
              </article>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-t border-[var(--color-border)] pt-16 lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal>
            <div>
              <p className="editorial-label">About the Brand</p>
              <h2 className="section-title mt-5">
                A beauty concept framed like a modern editorial label rather
                than a high-volume salon.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
              <p className="section-copy">
                The goal is to feel selective, warm and image-aware. Instead of
                filling the interface with repetitive cards, the composition
                relies on typography, whitespace, art direction and stronger
                hierarchy. That is what makes it feel more like a considered
                brand and less like a generated landing page.
              </p>

              <div className="space-y-6 border-l border-[var(--color-border)] pl-6">
                {experiencePillars.map((item) => (
                  <article key={item.title}>
                    <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--color-gold)]">
                      {item.title}
                    </p>
                    <p className="mt-3 text-sm leading-8 text-[var(--color-mist)]">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 xl:grid-cols-[0.92fr_1.08fr] xl:items-end">
          <Reveal>
            <div className="relative h-[420px] overflow-hidden rounded-[2rem]">
              <Image
                src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=80"
                alt="Noir Bloom skincare and studio detail"
                fill
                sizes="(max-width: 1280px) 100vw, 38vw"
                className="object-cover"
              />
              <div className="gallery-overlay" />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="editorial-label">Selected Services</p>
              <h2 className="section-title mt-5">
                A tighter menu with sharper positioning and fewer filler
                patterns.
              </h2>
            </Reveal>

            <div className="mt-10 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
              {featuredServices.map((service, index) => (
                <Reveal key={service.name} delay={index * 80}>
                  <article className="service-row">
                    <div>
                      <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-gold)]">
                        {service.duration}
                      </p>
                      <h3 className="mt-3 font-serif-display text-[2rem] leading-none text-[var(--color-cream)] sm:text-[2.3rem]">
                        {service.name}
                      </h3>
                    </div>
                    <div className="service-row-meta">
                      <p className="service-price">{service.price}</p>
                      <p className="text-sm leading-8 text-[var(--color-mist)]">
                        {service.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={220}>
              <div className="mt-8">
                <Link href="/services" className="button-secondary">
                  See the full service edit
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-5 border-t border-[var(--color-border)] pt-16 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="editorial-label">Signature Work</p>
              <h2 className="section-title mt-5">
                Stronger visual rhythm, fewer repeated modules and better image
                hierarchy.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-8 text-[var(--color-mist)]">
              The gallery now carries more of the identity weight. It should
              feel like a brand edit, not a grid of interchangeable cards.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <article className="gallery-card min-h-[500px]">
              <Image
                src={galleryMoments[0].image}
                alt={galleryMoments[0].title}
                fill
                sizes="(max-width: 1280px) 100vw, 52vw"
                className="gallery-image"
              />
              <div className="gallery-overlay" />
              <div className="relative z-10 mt-auto max-w-md p-7 sm:p-10">
                <p className="editorial-label">{galleryMoments[0].tag}</p>
                <h3 className="mt-4 font-serif-display text-5xl leading-[0.9] text-[var(--color-cream)]">
                  {galleryMoments[0].title}
                </h3>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-5">
            {galleryMoments.slice(1).map((item, index) => (
              <Reveal key={item.title} delay={index * 90}>
                <article className="gallery-card min-h-[170px] sm:min-h-[180px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1280px) 100vw, 40vw"
                    className="gallery-image"
                  />
                  <div className="gallery-overlay" />
                  <div className="relative z-10 mt-auto p-6">
                    <p className="editorial-label">{item.tag}</p>
                    <h3 className="mt-3 font-serif-display text-3xl text-[var(--color-cream)]">
                      {item.title}
                    </h3>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.author} delay={index * 80}>
              <article className="quote-panel">
                <p className="quote-mark">“</p>
                <p className="text-base leading-8 text-[var(--color-cream)]">
                  {item.quote}
                </p>
                <div className="mt-8 border-t border-[var(--color-border)] pt-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">
                    {item.author}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-mist)]">
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
          <div className="border-t border-[var(--color-border)] pt-16 text-center">
            <p className="editorial-label">Frequently Asked</p>
            <h2 className="section-title mx-auto mt-5 max-w-3xl">
              Practical information presented with the same brand discipline.
            </h2>
          </div>
        </Reveal>
        <div className="mt-10 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
          {faqs.map((item, index) => (
            <Reveal key={item.question} delay={index * 70}>
              <article className="faq-row">
                <h3 className="text-lg text-[var(--color-cream)]">
                  {item.question}
                </h3>
                <p className="text-sm leading-8 text-[var(--color-mist)]">
                  {item.answer}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="mt-24">
        <CtaBanner
          title="A beauty studio demo with more editorial authorship and less template behavior."
          text="The layout now leans on pacing, image hierarchy, typography and stronger art direction instead of stacked generic components."
        />
      </div>
    </main>
  );
}
