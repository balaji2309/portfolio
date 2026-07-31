import Reveal, { SectionHeader } from "./Reveal";
import { PROFILE_PHOTO } from "../data/portfolioData";

export default function About() {
  const tags = ["Machine Learning", "Embedded Systems", "Computer Vision", "Full Stack", "IoT", "Multi-Agent AI", "Signal Processing", "Research"];
  
  const infoItems = [
    ["🎓", "Integrated M.Tech, Software Engineering", "VIT Chennai — Vellore Institute of Technology"],
    ["📍", "Chennai, Tamil Nadu", "India — Open to remote & on-site roles"],
    ["🧪", "Research & Innovation", "Utility Patent · ML Publications · Hackathon Top 8"],
    ["📜", "IBM Certified", "Z Day AI & Data · Z Day Security · Build Your Own Chatbot"],
    ["⚡", "Interests", "Neural Architecture · Industrial Safety · Generative AI"],
  ];

  return (
    <section id="about" className="py-24 px-[5%]" style={{ background: "#071428" }}>
      <Reveal><SectionHeader label="// 01. About" title="Who I" accent="Am" /></Reveal>
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <Reveal delay={0.1}>
          <div className="flex items-start gap-6 mb-8">
            <div className="relative flex-shrink-0">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden border-2 border-cyan-400/40 shadow-[0_0_30px_rgba(0,212,255,.2)]">
                <img src={PROFILE_PHOTO} alt="Balaji K" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-emerald-400 border-2 border-[#071428] flex items-center justify-center text-xs" title="Available">✓</div>
            </div>
            <div>
              <div className="font-black text-2xl text-white mb-1">Balaji K</div>
              <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-2">CS Engineer · VIT Chennai</div>
              <div className="text-slate-400 text-sm">Chennai, TN — Open to remote & on-site</div>
            </div>
          </div>

          <div className="space-y-4 text-slate-400 text-[.95rem] leading-relaxed">
            <p>I'm a Software Science student who builds systems that actually work in the real world. My work spans the full spectrum: from training neural networks to flashing firmware on microcontrollers.</p>
            <p>Deeply curious about the edge where <strong className="text-white">AI meets physical systems</strong> — building IoT devices that use ML, safety-critical embedded firmware, and multi-agent pipelines.</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-6">
            {tags.map(t => (
              <span key={t} className="font-mono text-[.68rem] tracking-wide px-3 py-1 rounded-full border border-white/10 text-slate-400 hover:border-cyan-400 hover:text-cyan-400 transition-colors cursor-default">{t}</span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="rounded-2xl border border-cyan-400/14 p-6 divide-y divide-cyan-400/10" style={{ background: "rgba(7,20,40,.85)" }}>
            {infoItems.map(([ic, title, sub]) => (
              <div key={title} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0" style={{ background: "rgba(0,212,255,.1)", border: "1px solid rgba(0,212,255,.2)" }}>{ic}</div>
                <div>
                  <div className="text-white font-semibold text-sm">{title}</div>
                  <div className="font-mono text-[.7rem] text-slate-500 mt-0.5">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
