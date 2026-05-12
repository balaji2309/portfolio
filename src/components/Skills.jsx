import Reveal, { SectionHeader } from "./Reveal";
import { SKILLS } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-[5%]" style={{ background: "#030b18" }}>
      <Reveal><SectionHeader label="// 02. Skills" title="Tech" accent="Stack" /></Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SKILLS.map((cat, i) => (
          <Reveal key={cat.title} delay={i * 0.05}>
            <div className="rounded-2xl border border-cyan-400/14 p-6 hover:border-cyan-400/35 hover:shadow-[0_0_28px_rgba(0,212,255,.18)] transition-all duration-300 h-full" style={{ background: "rgba(7,20,40,.85)" }}>
              <div className="flex items-center gap-2 font-black text-cyan-400 text-sm mb-4">
                <span className="text-xl">{cat.icon}</span> {cat.title}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.pills.map(p => (
                  <span key={p} className="font-mono text-[.67rem] px-2 py-1 rounded-md border border-cyan-400/15 text-slate-300 hover:bg-cyan-400/10 transition-colors cursor-default" style={{ background: "rgba(0,212,255,.07)" }}>
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}