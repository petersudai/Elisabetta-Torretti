import { Reveal, SectionLabel } from "./primitives";
import { TEAM } from "../site";

export default function Team() {
  return (
    <section id="team" className="relative scroll-mt-20 overflow-hidden bg-paper/60 px-6 py-24 md:px-10 md:py-32">
      {/* soft brand washes */}
      <div className="pointer-events-none absolute -right-48 top-0 h-[30rem] w-[30rem] rounded-full bg-mint-surface/50 blur-[150px]" />
      <div className="pointer-events-none absolute -left-40 -bottom-16 h-[24rem] w-[24rem] rounded-full bg-lemon-surface/40 blur-[150px]" />
      <div className="relative mx-auto max-w-[88rem]">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <SectionLabel index="05">The team</SectionLabel>
            <Reveal>
              <h2 className="display-lg mt-7 max-w-xl">
                Mint &amp; Lemon is <span className="serif-italic text-mint">not</span> just me. 🍋
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-md text-lg leading-relaxed text-muted lg:pb-2">
              It's the people who put their heart into every client, every post, every detail.
              Small, mighty, and very glad to be here.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.05}>
              <div className="group h-full rounded-3xl border border-ink/10 bg-cream p-7 transition-all duration-500 hover:border-mint/40 hover:bg-paper">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-mint-surface font-display text-xl text-mint transition-colors duration-500 group-hover:bg-lemon-bright group-hover:text-ink">
                    {m.name.charAt(0)}
                  </span>
                  <span className="text-lg opacity-40 transition-opacity group-hover:opacity-100">🍋</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-medium">{m.name}</h3>
                <p className="label mt-1 text-mint">{m.role}</p>
                <p className="mt-4 text-[0.92rem] leading-relaxed text-muted">{m.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
