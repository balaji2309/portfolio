import { useState, useEffect, useRef } from "react";

export default function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVis(true);
        io.disconnect();
      }
    }, { threshold: 0.08 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} style={{
      transition: `opacity .65s ${delay}s ease, transform .65s ${delay}s ease`,
      opacity: vis ? 1 : 0,
      transform: vis ? "translateY(0)" : "translateY(32px)"
    }}>
      {children}
    </div>
  );
}

export function SectionHeader({ label, title, accent }) {
  return (
    <div className="mb-14">
      <span className="font-mono text-xs tracking-widest uppercase text-cyan-400 block mb-2">{label}</span>
      <h2 className="font-black text-4xl md:text-5xl text-white tracking-tight leading-none">
        {title} <span className="text-cyan-400">{accent}</span>
      </h2>
      <div className="w-12 h-0.5 mt-4 rounded-full" style={{ background: "linear-gradient(90deg,#00d4ff,transparent)" }} />
    </div>
  );
}