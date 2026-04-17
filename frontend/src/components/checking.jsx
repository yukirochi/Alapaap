function Checking({ answerstats, points, closethecheck, setfailed, life, calculatewin, setsuccess, level }) {
  const isCorrect = answerstats;

  return (
    <div className="modal-overlay" onClick={() => {}}>
      <div className="glass w-[280px] p-6 flex flex-col items-center gap-4 fade-in answer-pop"
        style={{ background: isCorrect ? "rgba(20,40,30,0.95)" : "rgba(40,15,20,0.95)" }}>

        {/* Result icon */}
        <div className="w-16 h-16 rounded-full flex items-center justify-center text-4xl"
          style={{
            background: isCorrect ? "rgba(74,222,128,0.15)" : "rgba(248,113,113,0.15)",
            border: `2px solid ${isCorrect ? "rgba(74,222,128,0.5)" : "rgba(248,113,113,0.5)"}`
          }}>
          <span className="material-symbols-outlined text-4xl">
            {isCorrect ? "check_circle" : "cancel"}
          </span>
        </div>

        <div className="text-center">
          <p className="text-xl font-black mb-1" style={{ color: isCorrect ? "#4ade80" : "#f87171" }}>
            {isCorrect ? "CORRECT!" : "WRONG!"}
          </p>
          <p className="text-xs" style={{ color: "var(--muted)" }}>
            Points so far: <span className="font-bold" style={{ color: "var(--text)" }}>{points}</span>
          </p>
          {!isCorrect && (
            <p className="text-xs mt-1 flex items-center justify-center gap-1" style={{ color: "#f87171" }}>
              <span className="material-symbols-outlined text-[14px]">favorite</span> {life} {life === 1 ? "life" : "lives"} remaining
            </p>
          )}
        </div>

        <button
          className="btn-primary w-full py-2.5 text-sm font-bold tracking-wide rounded-full"
          style={{
            background: isCorrect
              ? "linear-gradient(135deg, #166534, #4ade80)"
              : "linear-gradient(135deg, #7f1d1d, #f87171)"
          }}
          onClick={() => {
            if (life === 0) {
              calculatewin();
              setfailed(true);
              closethecheck();
            } else if (level > 10) {
              calculatewin();
              setsuccess(true);
            } else {
              closethecheck();
            }
          }}
        >
          {level > 10 ? "See Results" : life === 0 ? "Game Over" : "Continue →"}
        </button>
      </div>
    </div>
  );
}

export default Checking;
