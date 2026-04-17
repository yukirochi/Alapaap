function Gameheader({ life, subject }) {
  const hearts = [life > 0, life > 1, life > 2];

  return (
    <header className="w-full h-[14%] flex justify-between items-center px-5 relative fade-in"
      style={{ borderBottom: "1px solid rgba(108,99,255,0.12)" }}>

      {/* Subject badge */}
      <div className="flex items-center gap-2">
        <div className="px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
          style={{
            background: "rgba(108,99,255,0.15)",
            border: "1px solid rgba(108,99,255,0.3)",
            color: "#6c63ff"
          }}>
          {subject || "—"}
        </div>
      </div>

      {/* Hearts */}
      <div className="flex items-center gap-2">
        {hearts.map((alive, i) => (
          <div key={i} className={`heart-icon transition-all duration-300 ${alive ? "heart-active" : "heart-broken"}`}
            style={{ fontSize: "22px" }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: alive ? "'FILL' 1" : "'FILL' 0" }}>favorite</span>
          </div>
        ))}
      </div>
    </header>
  );
}

export default Gameheader;