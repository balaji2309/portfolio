import { useState } from "react";
import Reveal, { SectionHeader } from "./Reveal";
import { PROJECTS } from "../data/portfolioData";

const badgeStyles = {
  cyan: "bg-cyan-400/10 text-cyan-400 border border-cyan-400/25",
  green: "bg-emerald-400/10 text-emerald-400 border border-emerald-400/25",
  amber: "bg-amber-400/10 text-amber-400 border border-amber-400/25",
  purple: "bg-purple-400/10 text-purple-400 border border-purple-400/25",
};

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const filters = [["all", "All"], ["backend", "Backend & Agents"], ["ai", "AI / ML"], ["cv", "Computer Vision"], ["embedded", "Embedded & IoT"]];

  return (
    <section id="projects" className="py-24 px-[5%]" style={{ background: "#071428" }}>
      <Reveal><SectionHeader label="// 03. Projects" title="What I've" accent="Built" /></Reveal>

      <Reveal>
        <div className="flex gap-2 flex-wrap mb-10">
          {filters.map(([key, label]) => (
            <button key={key} onClick={() => setFilter(key)}
              className={`font-mono text-[.7rem] tracking-widest uppercase px-4 py-1.5 rounded-full border transition-all duration-200 ${filter === key ? "bg-cyan-400 text-[#030b18] border-cyan-400" : "border-white/10 text-slate-400 hover:border-cyan-400 hover:text-cyan-400"}`}>
              {label}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS.filter(p => filter === "all" || p.cat === filter).map((p, i) => (
          <Reveal key={p.title} delay={i * 0.04}>
            <div className="rounded-2xl border border-cyan-400/14 p-6 flex flex-col h-full relative overflow-hidden group hover:border-cyan-400/35 hover:shadow-[0_0_28px_rgba(0,212,255,.18)] hover:-translate-y-1 transition-all duration-300" style={{ background: "rgba(7,20,40,.85)" }}>
              <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "linear-gradient(90deg,#00d4ff,transparent)" }} />
              <div className="flex items-start justify-between mb-4">
                <span className={`font-mono text-[.62rem] tracking-widest uppercase px-2.5 py-1 rounded-full ${badgeStyles[p.badgeColor]}`}>{p.badge}</span>
                <span className="text-3xl">{p.icon}</span>
              </div>
              <h3 className="font-black text-white text-[1.02rem] leading-snug mb-2">{p.title}</h3>
              <p className="text-slate-400 text-[.85rem] leading-relaxed flex-1" dangerouslySetInnerHTML={{ __html: p.desc.replace(/(\d+\.?\d*%)/g, '<strong class="text-white">$1</strong>') }} />
              <div className="flex flex-wrap gap-1.5 mt-4">
                {p.techs.map(t => (
                  <span key={t} className="font-mono text-[.62rem] px-2 py-0.5 rounded border border-white/8 text-slate-500" style={{ background: "rgba(255,255,255,.04)" }}>{t}</span>
                ))}
              </div>
              {p.award && <div className="mt-3 text-amber-400 text-[.7rem] font-mono">{p.award}</div>}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}