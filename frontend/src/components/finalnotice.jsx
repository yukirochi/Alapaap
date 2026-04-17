import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || "https://alapaap-rsmj.onrender.com";

function Finalnotice({ settog, getdata }) {
  return (
    <div
      className="modal-overlay"
      onClick={() => settog(false)}
    >
      <div
        className="glass w-[90%] max-w-[480px] p-8 flex flex-col items-center gap-6 fade-in"
        style={{ background: "var(--glass)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Logo */}
        <p className="logo-text text-5xl lg:text-6xl select-none"
          style={{ textShadow: "0 0 30px rgba(108,99,255,0.5)" }}>
          <span style={{ color: "#6c63ff" }}>A</span>L
          <span style={{ color: "#6c63ff" }}>A</span>P
          <span style={{ color: "#ff6583" }}>A</span>
          <span style={{ color: "#6c63ff" }}>A</span>P
        </p>

        {/* Divider */}
        <div className="w-[60px] h-[2px] rounded-full"
          style={{ background: "linear-gradient(90deg, #6c63ff, #ff6583)" }} />

        {/* Description */}
        <p className="text-sm text-center leading-relaxed max-w-[380px]" style={{ color: "#a0a0c0" }}>
          Welcome to the <strong style={{ color: "var(--text)" }}>Quiz Quest</strong>! Rise from{" "}
          <span style={{ color: "#6c63ff" }}>Lupa</span> (the ground) to{" "}
          <span style={{ color: "#ff6583" }}>Alapaap</span> (the skies) through{" "}
          <strong style={{ color: "var(--text)" }}>10 levels</strong> of increasing difficulty —
          Easy, Medium, Hard, and a final{" "}
          <span style={{ color: "#a855f7" }}>Boss Level</span>.
          You have <strong style={{ color: "#f87171" }}>3 lives</strong>. Use them wisely!
        </p>

        {/* Level guide */}
        <div className="w-full grid grid-cols-3 gap-2 text-center text-[10px] font-bold tracking-wider">
          {[
            { label: "EASY", color: "#4ade80", levels: "1–3" },
            { label: "MEDIUM", color: "#f59e0b", levels: "4–6" },
            { label: "HARD", color: "#ef4444", levels: "7–9" },
          ].map((d) => (
            <div key={d.label} className="rounded-lg py-2 px-1"
              style={{ background: `${d.color}15`, border: `1px solid ${d.color}30` }}>
              <p style={{ color: d.color }}>{d.label}</p>
              <p style={{ color: "var(--muted)" }}>Lvl {d.levels}</p>
            </div>
          ))}
        </div>

        <button
          className="btn-pink w-full py-3 text-sm font-bold tracking-[0.15em] rounded-full flex items-center justify-center gap-2"
          onClick={() => getdata()}
        >
          <span className="material-symbols-outlined text-lg">rocket_launch</span> BEGIN QUEST
        </button>
      </div>
    </div>
  );
}

export default Finalnotice;
