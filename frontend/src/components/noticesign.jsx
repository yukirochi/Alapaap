import { NavLink, useNavigate } from "react-router-dom";

function NoticeSign({ closennotice, opensign }) {
  const navigate = useNavigate();

  return (
    <div
      className="modal-overlay"
      onClick={() => closennotice()}
    >
      <div
        className="glass w-[300px] p-6 flex flex-col items-center gap-5 fade-in"
        onClick={(e) => e.stopPropagation()}
        style={{ background: "var(--glass)" }}
      >
        {/* Icon */}
        <div
          className="w-[60px] h-[60px] rounded-full flex items-center justify-center text-3xl star-float"
          style={{ background: "rgba(255,101,131,0.15)", border: "1.5px solid rgba(255,101,131,0.4)" }}
        >
          <span className="material-symbols-outlined text-[36px]" style={{ color: "#ff6583" }}>cloud</span>
        </div>

        <div className="text-center">
          <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text)" }}>
            Ready to play?
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
            Your progress won't be saved without an account. Sign up to track your scores on the leaderboard!
          </p>
        </div>

        <div className="w-full flex flex-col gap-3">
          <button
            className="btn-pink w-full py-2.5 text-sm font-bold tracking-wide rounded-full"
            onClick={() => opensign()}
          >
            SIGNUP & SAVE SCORES
          </button>

          <NavLink
            to="/lobby"
            state={{ username: "guest", userinfo: null }}
            className="btn-ghost w-full py-2.5 text-sm font-bold tracking-wide rounded-full text-center"
            onClick={() => closennotice()}
          >
            PLAY AS GUEST
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NoticeSign;