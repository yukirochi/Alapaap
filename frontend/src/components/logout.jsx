import { NavLink } from "react-router-dom";

function Openlogout({ setopenlog }) {
  return (
    <div
      className="modal-overlay"
      onClick={() => setopenlog(false)}
    >
      <div
        className="glass w-[280px] p-6 flex flex-col items-center gap-5 fade-in"
        style={{ background: "var(--glass)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-14 h-14 rounded-full flex items-center justify-center text-3xl"
          style={{ background: "rgba(255,101,131,0.15)", border: "1.5px solid rgba(255,101,131,0.4)" }}>
          <span className="material-symbols-outlined text-[30px]" style={{ color: "#ff6583" }}>power_settings_new</span>
        </div>

        <div className="text-center">
          <p className="text-lg font-bold" style={{ color: "var(--text)" }}>Leave the lobby?</p>
          <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>
            You'll return to the main screen.
          </p>
        </div>

        <div className="w-full flex gap-3">
          <button
            className="btn-ghost flex-1 py-2.5 text-sm font-bold rounded-full"
            onClick={() => setopenlog(false)}
          >
            Stay
          </button>
          <NavLink
            to="/"
            className="btn-pink flex-1 py-2.5 text-sm font-bold rounded-full text-center"
          >
            Yes, Leave
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Openlogout;
