import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button, LemonSlice } from "./primitives";
import { LINKS } from "../site";

const EASE = [0.16, 1, 0.3, 1] as const;

const HEADLINE: { text: string; cls?: string }[] = [
  { text: "I" },
  { text: "build" },
  { text: "personal", cls: "marker" },
  { text: "brands", cls: "marker" },
  { text: "that" },
  { text: "open" },
  { text: "doors.", cls: "serif-italic text-mint" },
];

function Portrait() {
  const [err, setErr] = useState(false);
  return (
    <div className="relative">
      <div className="arch relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-mint-surface via-cream to-lemon-surface ring-1 ring-ink/10">
        {/* Drop a real photo at /public/images/elisabetta.jpg to replace the monogram */}
        {!err ? (
          <img
            src="/images/elisabetta.jpg"
            alt="Elisabetta Torretti, Founder & CEO of Mint & Lemon"
            onError={() => setErr(true)}
            className="absolute inset-0 h-full w-full scale-[1.5] object-cover"
            style={{ objectPosition: "53% 19%", transformOrigin: "52% 17%" }}
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center">
            <div className="absolute h-[78%] w-[78%] rounded-full border border-ink/15" />
            <div className="absolute h-[58%] w-[58%] rounded-full border border-ink/10" />
            <span className="font-display text-[7rem] font-light leading-none text-ink/85">
              ET
            </span>
            <span className="label absolute bottom-7 text-ink/45">
              Elisabetta Torretti
            </span>
          </div>
        )}
      </div>

      {/* Floating proof badges */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.7, ease: EASE }}
        className="absolute -left-5 top-10 rounded-2xl border border-ink/10 bg-paper/90 px-4 py-3 shadow-[0_20px_50px_-30px_rgba(14,43,34,0.7)] backdrop-blur md:-left-10"
      >
        <p className="font-display text-2xl font-medium leading-none">137K+</p>
        <p className="label mt-1 text-muted">followers</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.7, ease: EASE }}
        className="absolute -right-4 bottom-16 max-w-[10rem] rounded-2xl border border-ink/10 bg-ink px-4 py-3 text-cream shadow-xl md:-right-8"
      >
        <p className="text-lemon-bright text-sm">★★★★★</p>
        <p className="mt-1 text-[0.82rem] leading-snug text-cream/85">
          “Best money I've spent all year.”
        </p>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yLemon = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const yBlob = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const rotateLemon = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative overflow-hidden px-6 pt-32 pb-16 md:px-10 md:pt-40 lg:pb-24"
    >
      {/* Decorative shapes */}
      <motion.div
        style={{ y: yBlob }}
        className="pointer-events-none absolute -left-40 top-24 h-[34rem] w-[34rem] rounded-full bg-mint-surface/70 blur-3xl"
      />
      <motion.div
        style={{ y: yLemon, rotate: rotateLemon }}
        className="float-slow pointer-events-none absolute right-[6%] top-28 hidden h-28 w-28 lg:block"
      >
        <LemonSlice className="h-full w-full drop-shadow-[0_18px_30px_rgba(243,210,76,0.45)]" />
      </motion.div>

      <div className="relative mx-auto grid max-w-[88rem] items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-ink/15 bg-paper/70 px-4 py-2"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-mint" />
            <span className="label text-ink-soft">Hi, I'm Elisabetta 🙋🏻‍♀️</span>
          </motion.div>

          <h1 className="display-xl flex flex-wrap gap-x-[0.28em] gap-y-1">
            {HEADLINE.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden pb-[0.06em]">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.95, ease: EASE, delay: 0.25 + i * 0.07 }}
                  className={`inline-block ${w.cls ?? ""}`}
                >
                  {w.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.9 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted md:text-xl"
          >
            Speaker. Startup advisor. Founder of <span className="text-ink">Mint &amp; Lemon</span>.
            I went from sleeping on a couch with no English to{" "}
            <span className="text-ink">137,000+ LinkedIn followers</span> and a business built
            entirely on personal branding. Let me show you what actually works. No fluff, just results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 1.05 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href={LINKS.strategy} variant="lemon">
              Book a strategy call
            </Button>
            <Button href="#work" variant="outline" arrow={false}>
              See how I can help ↓
            </Button>
          </motion.div>
        </div>

        {/* Right: portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.4 }}
          className="mx-auto w-full max-w-sm lg:max-w-none"
        >
          <Portrait />
        </motion.div>
      </div>
    </section>
  );
}
