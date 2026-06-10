import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  animate,
  type Variants,
} from "framer-motion";

/* ---------- Easing & shared variants ---------- */
const EASE = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE },
  },
};

export const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

/* ---------- Reveal: animates a block when scrolled into view ---------- */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "li" | "span";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px -12% 0px" });
  const MotionTag = motion[as];
  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
}

/* ---------- Section eyebrow label ---------- */
export function SectionLabel({
  index,
  children,
  tone = "ink",
}: {
  index: string;
  children: ReactNode;
  tone?: "ink" | "cream";
}) {
  const color = tone === "cream" ? "text-cream/70" : "text-mint";
  const line = tone === "cream" ? "bg-cream/30" : "bg-ink/20";
  return (
    <div className={`label flex items-center gap-3 ${color}`}>
      <span>({index})</span>
      <span className={`h-px w-8 ${line}`} />
      <span>{children}</span>
    </div>
  );
}

/* ---------- Button ---------- */
type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: "lemon" | "ink" | "outline" | "outlineCream";
  className?: string;
  arrow?: boolean;
};

export function Button({
  href,
  children,
  variant = "lemon",
  className = "",
  arrow = true,
}: BtnProps) {
  const base =
    "group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-[0.95rem] font-medium transition-all duration-300 will-change-transform";
  const styles: Record<string, string> = {
    lemon:
      "bg-lemon-bright text-ink hover:bg-ink hover:text-lemon-bright shadow-[0_18px_40px_-18px_rgba(243,210,76,0.9)]",
    ink: "bg-ink text-cream hover:bg-mint-deep",
    outline: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-cream",
    outlineCream:
      "border border-cream/30 text-cream hover:bg-cream hover:text-ink",
  };
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
      {arrow && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      )}
    </motion.a>
  );
}

/* ---------- Count-up number ---------- */
export function CountUp({
  to,
  suffix = "",
  className = "",
}: {
  to: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v).toLocaleString("en-US")),
    });
    return () => controls.stop();
  }, [inView, to, mv]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}

/* ---------- Lemon slice SVG ---------- */
export function LemonSlice({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <circle cx="50" cy="50" r="48" fill="#ffdf3a" />
      <circle cx="50" cy="50" r="48" fill="none" stroke="#0e2b22" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="38" fill="none" stroke="#0e2b22" strokeWidth="1.5" opacity="0.5" />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i / 8) * Math.PI * 2;
        return (
          <line
            key={i}
            x1="50"
            y1="50"
            x2={50 + Math.cos(a) * 37}
            y2={50 + Math.sin(a) * 37}
            stroke="#0e2b22"
            strokeWidth="1.2"
            opacity="0.45"
          />
        );
      })}
      {Array.from({ length: 8 }).map((_, i) => {
        const a = ((i + 0.5) / 8) * Math.PI * 2;
        return (
          <ellipse
            key={i}
            cx={50 + Math.cos(a) * 22}
            cy={50 + Math.sin(a) * 22}
            rx="8"
            ry="13"
            transform={`rotate(${(a * 180) / Math.PI + 90} ${50 + Math.cos(a) * 22} ${50 + Math.sin(a) * 22})`}
            fill="#fff8d6"
            stroke="#0e2b22"
            strokeWidth="0.8"
            opacity="0.85"
          />
        );
      })}
    </svg>
  );
}
