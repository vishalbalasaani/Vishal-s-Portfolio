import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Certifications from "@/components/certifications";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
