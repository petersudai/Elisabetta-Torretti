import { Reveal, SectionLabel, CountUp } from "./primitives";
import { STATS, TESTIMONIALS } from "../site";

export default function Proof() {
  return (
    <section id="proof" className="scroll-mt-20 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[88rem]">
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

        {/* Testimonials */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
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
    </section>
  );
}
