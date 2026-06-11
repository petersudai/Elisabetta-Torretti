import { Analytics } from "@vercel/analytics/react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Story from "./components/Story";
import Help from "./components/Help";
import Offers from "./components/Offers";
import Proof from "./components/Proof";
import Team from "./components/Team";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="grain hidden md:block" aria-hidden />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Story />
        <Help />
        <Offers />
        <Proof />
        <Team />
        <CTA />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}
