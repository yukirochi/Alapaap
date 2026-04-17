import { useEffect, useState } from "react";

function Userhead({ nickname }) {
  let [username, setusername] = useState("guest");

  useEffect(() => {
    setusername(nickname || "guest");
  }, [nickname]);

  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full flex items-center justify-center text-base"
        style={{ background: "rgba(108,99,255,0.15)", border: "1.5px solid rgba(108,99,255,0.3)", color: "#6c63ff" }}>
        <span className="material-symbols-outlined text-[18px]">person</span>
      </div>
      <div>
        <p className="text-xs font-bold truncate max-w-[100px]" style={{ color: "var(--text)" }}>
          {username}
        </p>
        {username !== "guest" && (
          <p className="text-[9px]" style={{ color: "var(--muted)" }}>view profile →</p>
        )}
      </div>
    </div>
  );
}

export default Userhead;
