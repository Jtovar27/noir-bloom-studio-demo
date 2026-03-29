import Image from "next/image";
import { CtaBanner } from "@/components/cta-banner";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { galleryMoments } from "@/data/site";

const galleryStats = [
  { value: "Editorial", label: "Visual direction" },
  { value: "High-touch", label: "Client experience" },
  { value: "Shareable", label: "Social media energy" },
];

export default function GalleryPage() {
  return (
    <main className="pb-20">
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <Reveal>
          <SectionHeading
            eyebrow="Signature Work"
            title="A visual language built for close-ups, textures and premium mood."
            description="This gallery leans into polished finishes, warm light and tactile detail so the brand reads as credible, desirable and immediately social-native."
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-[1.05fr_0.95fr]">
          {galleryMoments.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <article className={`gallery-card ${index === 0 ? "xl:row-span-2" : ""}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 40vw"
                  className="gallery-image"
                />
                <div className="gallery-overlay" />
                <div className="relative z-10 mt-auto p-6 sm:p-8">
                  <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-gold)]">
                    {item.tag}
                  </p>
                  <h2 className="mt-3 font-serif-display text-3xl text-[var(--color-cream)]">
                    {item.title}
                  </h2>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        {galleryStats.map((item, index) => (
          <Reveal key={item.label} delay={index * 90}>
            <div className="surface-panel rounded-[30px] p-8 text-center">
              <p className="font-serif-display text-4xl text-[var(--color-cream)]">{item.value}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.28em] text-[var(--color-mist)]">
                {item.label}
              </p>
            </div>
          </Reveal>
        ))}
      </section>

      <div className="mt-20">
        <CtaBanner
          title="Use the gallery as the proof layer behind the brand promise."
          text="Every shot is chosen to reinforce material quality, lighting discipline and a studio atmosphere that feels expensive before a client books."
        />
      </div>
    </main>
  );
}
