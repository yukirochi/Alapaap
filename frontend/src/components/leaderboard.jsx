import { useEffect, useState } from "react";

const API_URL = process.env.REACT_APP_API_URL || "https://alapaap-rsmj.onrender.com";

function Leaderboard() {
  let [tabledata, settabledata] = useState([]);
  let [loading, setloading] = useState(true);

  useEffect(() => {
    let leaddata = async () => {
      try {
        let res = await fetch(`${API_URL}/api/leaderboard`);
        let data = await res.json();
        settabledata(data.data || []);
      } catch (error) {
        console.error("Leaderboard fetch error:", error);
        settabledata([]);
      } finally {
        setloading(false);
      }
    };
    leaddata();
  }, []);

  return (
    <div className="w-full h-[28%] flex flex-col items-center max-w-[700px] px-4 fade-in-delay">
      {/* Title */}
      <div className="flex items-center gap-2 mb-2">
        <span className="material-symbols-outlined text-lg star-float text-yellow-400">emoji_events</span>
        <p className="text-sm font-bold tracking-[0.2em] uppercase"
          style={{ background: "linear-gradient(135deg, #ff6583, #6c63ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Leaderboard
        </p>
        <span className="material-symbols-outlined text-lg star-float-2 text-yellow-400">emoji_events</span>
      </div>

      {/* Board */}
      <div className="w-full rounded-xl p-3 overflow-hidden"
        style={{ background: "var(--glass)", border: "1px solid rgba(108,99,255,0.15)" }}>
        {loading ? (
          <div className="flex justify-center items-center h-[60px]">
            <div className="w-5 h-5 rounded-full border-2 border-t-transparent animate-spin"
              style={{ borderColor: "rgba(108,99,255,0.5)", borderTopColor: "#6c63ff" }} />
          </div>
        ) : tabledata.length === 0 ? (
          <p className="text-center text-xs py-4" style={{ color: "var(--muted)" }}>No scores yet. Be the first!</p>
        ) : (
          <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 max-h-[80px] overflow-y-auto">
            {tabledata.map((element, index) => (
              <div key={index} className="lb-row">
                <span className="font-black text-xs w-5 text-center"
                  style={{ color: index === 0 ? "#ffd700" : index === 1 ? "#c0c0c0" : index === 2 ? "#cd7f32" : "var(--muted)" }}>
                  {index + 1}
                </span>
                <span className="font-bold text-xs truncate max-w-[70px]" style={{ color: "var(--text)" }}>
                  {element.username}
                </span>
                <span className="text-[10px] truncate max-w-[55px]" style={{ color: "var(--muted)" }}>
                  {element.subject}
                </span>
                <span className="ml-auto font-bold text-xs" style={{ color: "#ff6583" }}>
                  {element.value}%
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Leaderboard;
