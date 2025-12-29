import Navbar from "../components/navigation/Navbar";
import About from "../sections/About/About";
import Certifications from "../sections/Certifications/Certifications";
import Contact from "../sections/Contact/Contact";
import Hero from "../sections/Hero/Hero";
import Projects from "../sections/Projects/Projects";
import Skills from "../sections/Skills/Skills";

export default function RootLayout() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />

      <div className="pt-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </div>
    </main>
  );
}
