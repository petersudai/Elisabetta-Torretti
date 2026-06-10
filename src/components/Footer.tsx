import { NAV, LINKS } from "../site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-6 pb-10 md:px-10">
      <div className="mx-auto max-w-[88rem] rounded-[2.5rem] border border-line bg-paper px-8 py-14 md:px-12">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-lemon-bright">
                🍋
              </span>
              <span className="font-display text-xl font-medium">Elisabetta Torretti</span>
            </div>
            <p className="mt-5 max-w-xs font-display text-2xl font-medium leading-tight text-ink">
              Personal brands that <span className="marker">open doors.</span>
            </p>
            <p className="mt-4 text-sm text-muted">Founder &amp; CEO, Mint &amp; Lemon · London, UK 🇬🇧</p>
          </div>

          {/* Explore */}
          <div>
            <p className="label text-mint">Explore</p>
            <ul className="mt-5 space-y-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="link-underline text-ink-soft hover:text-ink">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="label text-mint">Work with me</p>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={LINKS.strategy} target="_blank" rel="noopener noreferrer" className="link-underline text-ink-soft hover:text-ink">
                  Brand strategy call
                </a>
              </li>
              <li>
                <a href={LINKS.powerSession} target="_blank" rel="noopener noreferrer" className="link-underline text-ink-soft hover:text-ink">
                  1:1 Power session
                </a>
              </li>
              <li>
                <a href={LINKS.partnerships} target="_blank" rel="noopener noreferrer" className="link-underline text-ink-soft hover:text-ink">
                  Brand partnerships
                </a>
              </li>
              <li>
                <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="link-underline text-ink-soft hover:text-ink">
                  LinkedIn ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-sm text-muted md:flex-row">
          <p>© {year} Elisabetta Torretti · Mint &amp; Lemon</p>
          <p className="font-mono text-xs uppercase tracking-wider">Speak like you eat 🍋</p>
        </div>
      </div>
    </footer>
  );
}
