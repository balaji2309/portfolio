import Reveal from "./Reveal";
import { RESUME_URL } from "../data/portfolioData";

export default function Resume() {
  const skills_summary = [
    { label: "AI/ML & Deep Learning", pct: 88 },
    { label: "Embedded Systems & IoT", pct: 82 },
    { label: "Computer Vision", pct: 78 },
    { label: "Backend Development", pct: 80 },
    { label: "Research & Publications", pct: 75 },
  ];

  return (
    <section id="resume" className="py-24 px-[5%]" style={{ background: "#030b18" }}>
      <Reveal>
        <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
          <div>
            <span className="font-mono text-xs tracking-widest uppercase text-cyan-400 block mb-2">// 04. Resume</span>
            <h2 className="font-black text-4xl md:text-5xl text-white tracking-tight leading-none">
              My <span className="text-cyan-400">Resume</span>
            </h2>
          </div>
          <a href={RESUME_URL} target="_blank" rel="noreferrer" className="bg-cyan-400 text-[#030b18] px-6 py-3 rounded-md font-mono text-xs tracking-widest uppercase hover:shadow-[0_0_30px_rgba(0,212,255,.5)] transition-all">📄 Download PDF</a>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Reveal>
            <div className="rounded-2xl border border-cyan-400/14 p-6" style={{ background: "rgba(7,20,40,.85)" }}>
              <div className="font-mono text-xs tracking-widest uppercase text-cyan-400 mb-5">Education</div>
              <div className="relative pl-5 border-l border-cyan-400/20">
                <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-cyan-400" />
                <div className="font-black text-white text-[.95rem]">B.Tech — Computer Science Engineering</div>
                <div className="font-mono text-xs text-cyan-400 mt-0.5">VIT Chennai</div>
                <div className="font-mono text-xs text-slate-500 mt-0.5">2022 – 2026 (Expected)</div>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="space-y-6">
          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-cyan-400/14 p-6" style={{ background: "rgba(7,20,40,.85)" }}>
              <div className="font-mono text-xs tracking-widest uppercase text-cyan-400 mb-5">Skill Proficiency</div>
              <div className="space-y-4">
                {skills_summary.map(s => (
                  <div key={s.label}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-slate-300 text-[.82rem] font-medium">{s.label}</span>
                      <span className="font-mono text-xs text-cyan-400">{s.pct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-cyan-400/10">
                      <div className="h-full rounded-full" style={{ width: `${s.pct}%`, background: "linear-gradient(90deg,#00d4ff,#39ff8a)" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}