import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Reveal from "./components/Reveal";
import CursorGlow from "./components/CursorGlow";
import SmoothScroll from "./components/SmoothScroll";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <SmoothScroll />

      <CursorGlow />

      <Hero />

      <Reveal>
        <Experience />
      </Reveal>

      <Reveal>
        <Projects />
      </Reveal>

      <Reveal>
        <Skills />
      </Reveal>

      <Reveal>
        <Contact />
      </Reveal>
    </main>
  );
}