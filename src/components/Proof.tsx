import { Reveal, SectionLabel, CountUp } from "./primitives";
import { STATS, TESTIMONIALS } from "../site";

export default function Proof() {
  return (
    <section id="proof" className="relative scroll-mt-20 overflow-hidden px-6 py-24 md:px-10 md:py-32">
      {/* soft brand wash */}
      <div className="pointer-events-none absolute -left-44 top-1/3 h-[28rem] w-[28rem] rounded-full bg-mint-surface/40 blur-[150px]" />
      <div className="relative mx-auto max-w-[88rem]">
        <SectionLabel index="04">The receipts</SectionLabel>

        {/* Stats */}
        <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-3">
          {STATS.map((s) => (
            <Reveal key={s.label} className="bg-cream">
              <div className="px-8 py-12 text-center">
                <p className="font-display text-5xl font-medium tracking-tight text-ink md:text-6xl">
                  <CountUp to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-sm text-muted">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Photo + Testimonials */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Industry-credibility photo */}
          <Reveal className="aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:h-full">
            <figure className="relative h-full w-full overflow-hidden rounded-3xl ring-1 ring-ink/10">
              <img
                src="/images/elisabetta-4.jpg"
                alt="Elisabetta Torretti at the Creator Leaders Summit"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: "center 26%" }}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent p-5">
                <span className="label text-cream/90">In the room · Creator Leaders Summit</span>
              </figcaption>
            </figure>
          </Reveal>

          {/* Testimonials */}
          <div className="grid gap-6">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <figure className="flex h-full flex-col justify-between rounded-3xl bg-paper p-9 ring-1 ring-ink/10">
                  <div>
                    <span className="font-display text-6xl leading-none text-mint">“</span>
                    <blockquote className="-mt-5 font-display text-xl font-medium leading-snug text-ink md:text-2xl">
                      {t.quote}
                    </blockquote>
                  </div>
                  <figcaption className="mt-8 flex items-center gap-4 border-t border-line pt-6">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-mint-surface font-display text-lg text-mint">
                      {t.name.charAt(0)}
                    </span>
                    <div>
                      <p className="font-medium leading-tight">{t.name}</p>
                      <p className="text-sm text-muted">{t.role}</p>
                    </div>
                    <span className="ml-auto text-lemon">★★★★★</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
