import Reveal, { SectionHeader } from "./Reveal";
import { ACHIEVEMENTS } from "../data/portfolioData";

const achIconStyles = {
  gold: "bg-amber-400/12 border border-amber-400/25",
  blue: "bg-cyan-400/10 border border-cyan-400/22",
  purple: "bg-purple-400/10 border border-purple-400/22",
  green: "bg-emerald-400/10 border border-emerald-400/22",
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-[5%]" style={{ background: "#071428" }}>
      <Reveal><SectionHeader label="// 05. Achievements" title="Awards &" accent="Certifications" /></Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ACHIEVEMENTS.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.04}>
            <div className="flex items-start gap-4 p-5 rounded-2xl border border-cyan-400/14 hover:border-cyan-400/30 transition-all" style={{ background: "rgba(7,20,40,.85)" }}>
              <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-xl ${achIconStyles[a.color]}`}>{a.icon}</div>
              <div>
                <div className="font-black text-[.88rem] text-white leading-snug">{a.title}</div>
                <div className="font-mono text-[.7rem] text-slate-500 mt-1.5">{a.sub}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}