import { Reveal, SectionLabel } from "./primitives";
import { HELP } from "../site";

export default function Help() {
  return (
    <section id="help" className="scroll-mt-20 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[88rem]">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <SectionLabel index="02">What you get</SectionLabel>
            <Reveal>
              <h2 className="display-lg mt-7 max-w-xl">
                A personal brand is the <span className="marker">unfair advantage</span> most founders ignore.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-md text-lg leading-relaxed text-muted lg:pb-3">
              When you show up with clarity and consistency, the right people come to you.
              Here's what we build toward together.
            </p>
          </Reveal>
        </div>

        {/* Rows */}
        <div className="mt-16 border-t border-line">
          {HELP.map((item, i) => (
            <Reveal key={item.n} delay={i * 0.04}>
              <div className="group relative grid grid-cols-[auto_1fr] items-center gap-6 border-b border-line py-7 transition-colors duration-500 hover:bg-paper md:grid-cols-[5rem_1fr_1.2fr] md:gap-10 md:px-4">
                <span className="font-mono text-sm text-mint">{item.n}</span>
                <h3 className="font-display text-2xl font-medium tracking-tight transition-transform duration-500 group-hover:translate-x-2 md:text-[2rem]">
                  {item.title}
                </h3>
                <p className="col-span-2 text-muted md:col-span-1 md:max-w-sm">
                  {item.body}
                </p>
                <span className="pointer-events-none absolute right-3 hidden text-2xl text-mint opacity-0 transition-all duration-500 group-hover:opacity-100 md:block">
                  →
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
