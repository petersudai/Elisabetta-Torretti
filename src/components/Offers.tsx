import { Reveal, SectionLabel, Button } from "./primitives";
import { OFFERS, LINKS } from "../site";

export default function Offers() {
  return (
    <section id="work" className="scroll-mt-20 bg-mint-surface/50 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[88rem]">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <SectionLabel index="03">Work with me</SectionLabel>
          </div>
          <Reveal>
            <h2 className="display-lg mt-7">
              Three ways to build your <span className="serif-italic text-mint">brand.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-muted">
              Whether you want it built for you, or you just need the playbook, there's a way in.
            </p>
          </Reveal>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {OFFERS.map((offer, i) => (
            <Reveal key={offer.title} delay={i * 0.08}>
              <article
                className={`noise-card flex h-full flex-col rounded-3xl p-8 ring-1 transition-transform duration-500 hover:-translate-y-1.5 ${
                  offer.featured
                    ? "bg-ink text-cream ring-ink"
                    : "bg-paper text-ink ring-ink/10"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`label ${offer.featured ? "text-lemon-bright" : "text-mint"}`}
                  >
                    {offer.tag}
                  </span>
                  {offer.featured && (
                    <span className="rounded-full bg-lemon-bright px-3 py-1 text-[0.7rem] font-semibold text-ink">
                      Most popular
                    </span>
                  )}
                </div>

                <h3 className="mt-5 font-display text-[1.7rem] font-medium leading-tight">
                  {offer.title}
                </h3>
                <p
                  className={`mt-4 text-[0.97rem] leading-relaxed ${
                    offer.featured ? "text-cream/75" : "text-muted"
                  }`}
                >
                  {offer.body}
                </p>

                <ul className="mt-7 space-y-2.5">
                  {offer.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-[0.92rem]">
                      <span
                        className={`grid h-5 w-5 shrink-0 place-items-center rounded-full text-[0.7rem] ${
                          offer.featured ? "bg-mint-bright text-ink" : "bg-mint-surface text-mint"
                        }`}
                      >
                        ✓
                      </span>
                      <span className={offer.featured ? "text-cream/85" : "text-ink-soft"}>
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-2">
                  <Button
                    href={offer.href}
                    variant={offer.featured ? "lemon" : "ink"}
                    className="w-full justify-center"
                  >
                    {offer.cta}
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Speaking band */}
        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-col items-center justify-between gap-6 rounded-3xl border border-ink/10 bg-paper px-8 py-8 md:flex-row md:px-10">
            <div className="flex items-center gap-5">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-lemon-surface text-2xl">
                🎤
              </span>
              <div>
                <h3 className="font-display text-2xl font-medium">Book me as a speaker</h3>
                <p className="mt-1 max-w-md text-[0.95rem] text-muted">
                  Keynotes, workshops and strategy sessions on personal branding & LinkedIn.
                  No fluff. Just real, practical insights that drive results.
                </p>
              </div>
            </div>
            <Button href={LINKS.linkedin} variant="outline">
              Check availability
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
