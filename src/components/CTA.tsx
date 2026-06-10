import { Reveal, Button, LemonSlice } from "./primitives";
import { LINKS } from "../site";

export default function CTA() {
  return (
    <section className="px-6 pb-10 md:px-10">
      <div className="relative mx-auto max-w-[88rem] overflow-hidden rounded-[2.5rem] bg-mint-deep px-8 py-20 text-center md:px-10 md:py-28">
        {/* glows + citrus */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-mint/30 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-lemon/15 blur-[110px]" />
        <div className="float-slow pointer-events-none absolute right-8 top-10 hidden h-20 w-20 opacity-90 md:block lg:right-20">
          <LemonSlice className="h-full w-full" />
        </div>
        <div className="float-slow pointer-events-none absolute -left-2 bottom-8 hidden h-14 w-14 opacity-80 md:block lg:left-16">
          <LemonSlice className="h-full w-full" />
        </div>

        <div className="relative mx-auto max-w-3xl">
          <Reveal>
            <p className="label text-mint-bright">Ready when you are</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display-lg mt-6 text-cream">
              Ready to take your personal brand to the{" "}
              <span className="serif-italic text-lemon-bright">next level?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-cream/70">
              Let's turn your experience into a brand that attracts clients, investors and
              opportunities, on repeat. Book a call and let's make it happen.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href={LINKS.strategy} variant="lemon">
                Book a strategy call
              </Button>
              <Button href={LINKS.powerSession} variant="outlineCream">
                Just a 1:1 power session
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
