import { Reveal, SectionLabel } from "./primitives";
import { TIMELINE } from "../site";

export default function Story() {
  return (
    <section id="story" className="relative scroll-mt-20 overflow-hidden bg-ink text-cream">
      {/* soft glow */}
      <div className="pointer-events-none absolute -right-32 top-0 h-[30rem] w-[30rem] rounded-full bg-mint/20 blur-[120px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[26rem] w-[26rem] rounded-full bg-lemon/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[88rem] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* Left — sticky intro */}
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <SectionLabel index="01" tone="cream">
              The story
            </SectionLabel>
            <Reveal>
              <h2 className="display-lg mt-7 text-cream">
                They told me I&nbsp;
                <span className="serif-italic text-lemon-bright">wouldn't</span> make it.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-cream/70">
                My journey has been defined by resilience, self-belief and a refusal to stand
                still. From language barriers to leading teams in fast-growing startups, grit
                takes you further than anyone expects.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <blockquote className="mt-10 border-l-2 border-lemon-bright pl-6">
                <p className="font-display text-2xl font-medium italic leading-snug text-cream md:text-[1.7rem]">
                  “Thank God they told me I wouldn't make it. They just pushed me to do more.” 💪🏼
                </p>
              </blockquote>
            </Reveal>
          </div>

          {/* Right — timeline */}
          <ol className="relative">
            <span className="absolute left-[5.2rem] top-2 bottom-2 w-px bg-cream/15 md:left-[6.4rem]" />
            {TIMELINE.map((item, i) => (
              <Reveal as="li" key={item.year} delay={i * 0.05} className="relative flex gap-6 pb-9 last:pb-0">
                <div className="w-[4.2rem] shrink-0 text-right md:w-[5.4rem]">
                  <span className="font-display text-2xl font-medium text-lemon-bright md:text-[1.7rem]">
                    {item.year}
                  </span>
                </div>
                <div className="relative pl-5">
                  <span className="absolute -left-[0.875rem] top-[0.55rem] h-3 w-3 rounded-full bg-mint-bright ring-4 ring-ink" />
                  <p className="max-w-md text-[1.02rem] leading-relaxed text-cream/85">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
