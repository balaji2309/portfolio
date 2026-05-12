import { useState } from "react";
import Reveal, { SectionHeader } from "./Reveal";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });

  function send() {
    if (!form.name || !form.email || !form.msg) { alert("Please fill in all fields."); return; }
    window.open(`mailto:balajicgm23@gmail.com?subject=Portfolio Contact&body=From: ${form.name}%0AEmail: ${form.email}%0A%0A${form.msg}`);
  }

  return (
    <section id="contact" className="py-24 px-[5%]" style={{ background: "#030b18" }}>
      <Reveal><SectionHeader label="// 06. Contact" title="Let's" accent="Talk" /></Reveal>
      <div className="grid md:grid-cols-2 gap-16">
        <Reveal delay={0.1}>
          <p className="text-slate-400 mb-8">Open to full-time roles, research collaborations, or a great technical conversation.</p>
          <div className="font-mono text-cyan-400">balajicgm23@gmail.com</div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="space-y-4">
            <input placeholder="Name" className="w-full bg-cyan-400/4 border border-cyan-400/14 p-3 rounded-xl text-white outline-none focus:border-cyan-400" onChange={e => setForm({...form, name: e.target.value})} />
            <input placeholder="Email" className="w-full bg-cyan-400/4 border border-cyan-400/14 p-3 rounded-xl text-white outline-none focus:border-cyan-400" onChange={e => setForm({...form, email: e.target.value})} />
            <textarea placeholder="Message" rows={5} className="w-full bg-cyan-400/4 border border-cyan-400/14 p-3 rounded-xl text-white outline-none focus:border-cyan-400" onChange={e => setForm({...form, msg: e.target.value})} />
            <button onClick={send} className="w-full bg-cyan-400 text-[#030b18] py-3.5 rounded-xl font-bold uppercase tracking-widest text-xs">✈ Send Message</button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}