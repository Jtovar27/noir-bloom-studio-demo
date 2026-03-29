import Image from "next/image";
import { CtaBanner } from "@/components/cta-banner";
import { Reveal } from "@/components/reveal";
import { galleryMoments } from "@/data/site";

const galleryNotes = [
  "Warm flash lighting",
  "Skin, gloss and texture detail",
  "Composed frames with boutique intimacy",
];

export default function GalleryPage() {
  return (
    <main className="pb-20">
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid gap-10 border-t border-[var(--color-border)] pt-16 xl:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div>
              <p className="editorial-label">Signature Gallery</p>
              <h1 className="section-title mt-5">
                Imagery selected for warmth, polish and tactile beauty detail.
              </h1>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
              <p className="section-copy">
                Instead of a generic showcase grid, this gallery works like a brand
                edit. The mood is intimate, cosmetic and premium, with enough
                restraint to still feel credible.
              </p>
              <div className="space-y-5 border-l border-[var(--color-border)] pl-6">
                {galleryNotes.map((item) => (
                  <p
                    key={item}
                    className="text-sm uppercase tracking-[0.3em] text-[var(--color-mist)]"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal>
            <article className="gallery-card min-h-[520px]">
              <Image
                src={galleryMoments[1].image}
                alt={galleryMoments[1].title}
                fill
                sizes="(max-width: 1280px) 100vw, 52vw"
                className="gallery-image"
              />
              <div className="gallery-overlay" />
              <div className="relative z-10 mt-auto max-w-md p-8 sm:p-10">
                <p className="editorial-label">{galleryMoments[1].tag}</p>
                <h2 className="mt-4 font-serif-display text-5xl leading-[0.9] text-[var(--color-cream)]">
                  {galleryMoments[1].title}
                </h2>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-5">
            {galleryMoments
              .filter((_, index) => index !== 1)
              .map((item, index) => (
                <Reveal key={item.title} delay={index * 80}>
                  <article className="gallery-card min-h-[170px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1280px) 100vw, 42vw"
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

      <div className="mt-24">
        <CtaBanner
          title="The gallery should read like proof of taste, not a bank of stock placeholders."
          text="Warmer tones, cleaner framing and stronger image hierarchy make the showcase feel closer to a real beauty brand with aesthetic discipline."
        />
      </div>
    </main>
  );
}
