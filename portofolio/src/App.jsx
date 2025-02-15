import "./app.scss";
import Certificates from "./components/certificates/Certificates";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
// import Test from "./Test";

export default function app() {
  return (
    <>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>

      <section id="Skills">
        <Parallax type="skills" />
      </section>

      <section>
        <Skills />
      </section>

      <section id="Projects">
        <Parallax type="projects" />
      </section>

      <Projects />

      <section id="Certificates">
        <Parallax type="certificates" />
      </section>

      <Certificates />

      <section id="Contact">
        <Contact />
      </section>
    </>
  );
}
