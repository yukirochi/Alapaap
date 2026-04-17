import { useParams, useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || "https://alapaap-rsmj.onrender.com";

function Failednotice({ setlevel, setlife, setfailed, setpoints, scores, setscores, finalscore, userinfo, nickname, subject }) {
  let { id } = useParams();
  const navigate = useNavigate();

  const savescore = async () => {
    try {
      if (!nickname || nickname.toLowerCase() === "guest" || nickname === "") return;
      let res = await fetch(`${API_URL}/api/game/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ score: finalscore, subject: subject }),
      });
      if (!res.ok) throw new Error("network error");
      let data = await res.json();
      console.log(data.msg);
    } catch (error) {
      console.error(error);
    }
  };

  const handleReturn = () => {
    savescore();
    navigate("/lobby", { state: { username: nickname, userinfo: userinfo } });
  };

  const handleRetry = () => {
    savescore();
    setlife(3);
    setlevel(1);
    setpoints(0);
    setfailed(false);
    setscores([]);
  };

  return (
    <div className="modal-overlay">
      <div className="glass w-[90%] max-w-[400px] p-7 flex flex-col items-center gap-5 fade-in"
        style={{ background: "var(--glass)" }}>

        {/* Icon */}
        <div className="w-20 h-20 rounded-full flex items-center justify-center text-[#f87171]"
          style={{ background: "rgba(248,113,113,0.15)", border: "2px solid rgba(248,113,113,0.4)" }}>
          <span className="material-symbols-outlined text-5xl">heart_broken</span>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-black mb-2" style={{ color: "#f87171" }}>Defeated!</h2>
          <p className="text-sm" style={{ color: "#a0a0c0" }}>
            You ran out of lives before reaching the Alapaap.
          </p>
        </div>

        {/* Score breakdown */}
        <div className="w-full rounded-xl p-4"
          style={{ background: "rgba(108,99,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-xs font-bold tracking-wider mb-2 text-center uppercase" style={{ color: "var(--muted)" }}>
            Your Status
          </p>
          <div className="flex flex-col gap-1 max-h-[120px] overflow-y-auto">
            {scores.map((score, index) => (
              <div key={index} className="flex justify-between items-center text-xs px-1">
                <span style={{ color: "var(--muted)" }}>Level {index + 1}</span>
                <span className={`font-bold ${score === "win" ? "score-win" : "score-lost"}`}>
                  {score === "win" ? "✓ WIN" : "✗ LOST"}
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-3 pt-3 border-t" style={{ borderColor: "rgba(108,99,255,0.06)" }}>
            <span className="text-xs font-semibold" style={{ color: "var(--muted)" }}>Final Score</span>
            <span className="text-lg font-black" style={{ color: "#ff6583" }}>{finalscore.toFixed(0)}%</span>
          </div>
        </div>

        <div className="w-full flex gap-3">
          <button
            className="btn-ghost flex-1 py-2.5 text-sm font-bold rounded-full"
            onClick={handleReturn}
          >
            ← Return
          </button>
          <button
            className="btn-pink flex-1 py-2.5 text-sm font-bold rounded-full"
            onClick={handleRetry}
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default Failednotice;
