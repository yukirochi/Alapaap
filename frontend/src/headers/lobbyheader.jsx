import { useNavigate } from "react-router-dom";

function Lobbyheader({ nickname, setopenlog, userinfo }) {
  const navigate = useNavigate();

  const VisitProfile = () => {
    if (!nickname || nickname.toLowerCase() === "guest") return;
    navigate(`/profile/${userinfo._id}`, { state: { userinfo: userinfo } });
  };

  return (
    <header className="flex w-full h-[10%] justify-between items-center px-4 lg:px-8 fade-in"
      style={{ borderBottom: "1px solid rgba(108,99,255,0.12)" }}>
      {/* User chip */}
      <div
        className="flex items-center gap-2 cursor-pointer group"
        onClick={VisitProfile}
      >
        <div className="w-9 h-9 rounded-full flex items-center justify-center text-lg"
          style={{ background: "rgba(108,99,255,0.15)", border: "2px solid rgba(108,99,255,0.4)", color: "#6c63ff" }}>
          <span className="material-symbols-outlined text-[20px]">person</span>
        </div>
        <div>
          <p className="text-xs font-bold tracking-wide leading-none" style={{ color: "var(--text)" }}>
            {nickname || "guest"}
          </p>
          <p className="text-[10px] mt-0.5" style={{ color: "var(--muted)" }}>
            {userinfo ? "tap to view profile" : "guest mode"}
          </p>
        </div>
      </div>

      {/* Logout */}
      <button
        className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all duration-200 hover:scale-105"
        style={{
          background: "rgba(255,101,131,0.1)",
          border: "1px solid rgba(255,101,131,0.3)",
          color: "#ff6583"
        }}
        onClick={() => setopenlog(true)}
      >
        <span className="material-symbols-outlined text-[18px]">logout</span> LEAVE
      </button>
    </header>
  );
}

export default Lobbyheader;
