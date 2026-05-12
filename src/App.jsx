import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

export default function App() {
  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <Navbar scrollTo={scrollTo} />
      <div style={{ paddingTop: "64px" }}>
        <Hero scrollTo={scrollTo} />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Achievements />
        <Contact />
      </div>
      <footer className="border-t px-[5%] py-8 text-center" style={{ borderColor: "rgba(0,212,255,.12)" }}>
         <div className="font-mono text-[.7rem] text-slate-500">© 2026 Balaji K. Built with precision & passion.</div>
      </footer>
    </div>
  );
}