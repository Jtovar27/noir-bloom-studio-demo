type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-gold)]">
        {eyebrow}
      </p>
      <h2 className="font-serif-display text-4xl leading-tight text-[var(--color-cream)] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-[var(--color-mist)] sm:text-lg">
        {description}
      </p>
    </div>
  );
}
