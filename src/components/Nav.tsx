import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { NAV, LINKS } from "../site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/85 backdrop-blur-md border-b border-line"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[88rem] items-center justify-between px-6 py-4 md:px-10">
          {/* Wordmark */}
          <a href="#top" className="group flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-lemon-bright text-base transition-transform duration-500 group-hover:rotate-[18deg]">
              🍋
            </span>
            <span className="font-display text-[1.18rem] font-medium leading-none tracking-tight">
              Elisabetta&nbsp;Torretti
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="link-underline text-[0.92rem] text-ink-soft hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={LINKS.strategy}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-ink px-5 py-2.5 text-[0.9rem] font-medium text-cream transition-colors duration-300 hover:bg-mint-deep sm:inline-flex"
            >
              Book a call
            </a>
            {/* Mobile toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 lg:hidden"
              aria-label="Menu"
            >
              <div className="space-y-1.5">
                <span className={`block h-px w-5 bg-ink transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
                <span className={`block h-px w-5 bg-ink transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </nav>

        {/* Scroll progress */}
        <motion.div
          style={{ scaleX: progress }}
          className="h-[2px] origin-left bg-gradient-to-r from-mint via-mint-bright to-lemon-bright"
        />
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-ink/95 backdrop-blur-md lg:hidden"
          >
            <div className="flex h-full flex-col justify-center gap-2 px-8">
              {NAV.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i + 0.1 }}
                  className="font-display text-4xl font-medium text-cream"
                >
                  {item.label}
                </motion.a>
              ))}
              <a
                href={LINKS.strategy}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex w-fit rounded-full bg-lemon-bright px-6 py-3 font-medium text-ink"
              >
                Book a call →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
