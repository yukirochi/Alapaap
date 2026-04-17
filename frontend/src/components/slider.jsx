function Slider({ value }) {
  const steps = [
    { label: "Lupa", color: "#6c63ff" },
    { label: "", color: "#6c63ff" },
    { label: "", color: "#6c63ff" },
    { label: "Medium", color: "#f59e0b" },
    { label: "", color: "#f59e0b" },
    { label: "", color: "#f59e0b" },
    { label: "Hard", color: "#ef4444" },
    { label: "", color: "#ef4444" },
    { label: "", color: "#ef4444" },
    { label: "Alapaap", color: "#ff6583" },
  ];

  const getDiffLabel = () => {
    if (value <= 3) return { text: "EASY", color: "#4ade80" };
    if (value <= 6) return { text: "MEDIUM", color: "#f59e0b" };
    if (value <= 9) return { text: "HARD", color: "#ef4444" };
    return { text: "BOSS LEVEL", color: "#a855f7" };
  };

  const diff = getDiffLabel();
  const progress = ((value - 1) / 9) * 100;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 gap-1">
      {/* Labels row */}
      <div className="w-full max-w-[480px] flex justify-between items-center text-[10px] font-bold tracking-widest mb-1">
        <span style={{ color: "#6c63ff" }}>LUPA</span>
        <span className="text-xs font-extrabold" style={{ color: diff.color }}>
          {diff.text}
        </span>
        <span style={{ color: "#ff6583" }}>ALAPAAP</span>
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-[480px] h-[6px] rounded-full overflow-hidden"
        style={{ background: "rgba(108,99,255,0.08)" }}>
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{
            width: `${progress}%`,
            background: `linear-gradient(90deg, #6c63ff, ${diff.color})`,
            boxShadow: `0 0 10px ${diff.color}55`
          }}
        />
      </div>

      {/* Step indicator */}
      <p className="text-[10px] font-semibold mt-0.5" style={{ color: "var(--muted)" }}>
        Level {value} / 10
      </p>
    </div>
  );
}

export default Slider;
