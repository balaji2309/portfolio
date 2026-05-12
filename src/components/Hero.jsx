import { useState, useEffect } from "react";
import { ROLES } from "../data/portfolioData";

const RESUME_URL = "/resume.pdf"; // Put your pdf in public folder

export default function Hero({ scrollTo }) {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const cur = ROLES[roleIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setCharIdx(i => i + 1);
        setText(cur.slice(0, charIdx + 1));
        if (charIdx + 1 === cur.length) setTimeout(() => setDeleting(true), 1800);
      } else {
        setCharIdx(i => i - 1);
        setText(cur.slice(0, charIdx - 1));
        if (charIdx - 1 <= 0) { setDeleting(false); setRoleIdx(i => (i + 1) % ROLES.length); }
      }
    }, deleting ? 40 : 65);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIdx]);

  return (
    <section id="hero" className="min-h-screen flex items-center px-[5%] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0,212,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,.04) 1px,transparent 1px)", backgroundSize: "60px 60px", animation: "gridMove 12s linear infinite" }} />
      <div className="relative z-10 max-w-3xl">
         <h1 className="font-black text-white leading-none tracking-tight mb-3" style={{ fontSize: "clamp(3rem,7vw,6rem)", letterSpacing: "-2px", animation: "fadeUp .7s .1s ease both" }}>
          Balaji <span className="text-cyan-400">K.</span>
        </h1>
        <div className="font-black text-slate-400 mb-6" style={{ fontSize: "clamp(1.1rem,2.5vw,1.7rem)", minHeight: "2.2rem", animation: "fadeUp .7s .2s ease both" }}>
          {text}<span className="inline-block w-0.5 h-[1.1em] bg-cyan-400 ml-0.5 align-middle" style={{ animation: "blink 1s infinite" }} />
        </div>
        <div className="flex gap-4 flex-wrap">
           <button onClick={() => scrollTo("projects")} className="bg-cyan-400 text-[#030b18] px-6 py-3 rounded-md font-medium uppercase text-xs tracking-widest">▶ View Projects</button>
           <a href={RESUME_URL} target="_blank" rel="noreferrer" className="border border-amber-400/40 text-amber-400 px-6 py-3 rounded-md uppercase text-xs tracking-widest">📄 Resume</a>
        </div>
      </div>
    </section>
  );
}