import { CREDIBILITY } from "../site";

export default function Marquee() {
  const items = [...CREDIBILITY, ...CREDIBILITY];
  return (
    <section className="border-y border-line bg-paper/50 py-6">
      <div className="mx-auto max-w-[88rem] px-6 md:px-10">
        <p className="label mb-5 text-center text-muted">
          Trusted on stages, podcasts &amp; startups across the UK and Europe
        </p>
      </div>
      <div className="edge-fade relative flex overflow-hidden">
        <div className="marquee-track flex shrink-0 items-center gap-10 pr-10">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-10">
              <span className="whitespace-nowrap font-display text-xl text-ink/70 md:text-2xl">
                {item}
              </span>
              <span className="text-lemon">🍋</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
