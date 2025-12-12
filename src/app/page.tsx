import Hero from "./components/Hero";
import About from "@/app/about/page";
import ExperienceSection from "./Experiences/page";
import Projects from "@/app/projects/page";
import Contact from "@/app/contact/page";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ExperienceSection />
      <Projects />
      <Contact />
    </>
  );
}
