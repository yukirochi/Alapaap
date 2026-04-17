import { useLocation, useNavigate } from "react-router-dom";
import Changepass from "../components/changepass";
import { useState } from "react";

function Profile() {
  const location = useLocation();
  let navigate = useNavigate();
  let userinfo = location.state?.userinfo;
  let scores = userinfo?.Score || [];
  let [changetab, setchangetab] = useState(false);

  if (!userinfo) {
    navigate("/");
    return null;
  }

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      {/* Orbs */}
      <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] rounded-full pointer-events-none opacity-10"
        style={{ background: "radial-gradient(circle, #6c63ff 0%, transparent 70%)" }} />
      <div className="absolute bottom-[-80px] right-[-80px] w-[250px] h-[250px] rounded-full pointer-events-none opacity-10"
        style={{ background: "radial-gradient(circle, #ff6583 0%, transparent 70%)" }} />

      {/* Mobile logo */}
      <div className="h-[7%] w-full flex justify-center items-center lg:hidden fade-in"
        style={{ borderBottom: "1px solid rgba(108,99,255,0.1)" }}>
        <p className="logo-text text-3xl select-none">
          <span style={{ color: "#6c63ff" }}>A</span>L
          <span style={{ color: "#6c63ff" }}>A</span>P
          <span style={{ color: "#ff6583" }}>A</span>
          <span style={{ color: "#6c63ff" }}>A</span>P
        </p>
      </div>

      {/* Main layout */}
      <div className="w-full h-[93%] lg:h-full flex flex-col items-center lg:flex-row-reverse lg:justify-center lg:gap-6 py-4 px-4 lg:py-6 lg:px-8">

        {/* Profile card */}
        <div className="w-full md:w-[80%] h-[44%] lg:w-[24%] lg:h-[90%] rounded-2xl flex flex-col overflow-hidden mb-4 lg:mb-0 fade-in"
          style={{ background: "var(--glass)", border: "1px solid rgba(108,99,255,0.2)" }}>

          {/* Desktop logo */}
          <div className="w-full h-[12%] hidden lg:flex justify-center items-center"
            style={{ borderBottom: "1px solid rgba(108,99,255,0.1)" }}>
            <p className="logo-text text-4xl select-none">
              <span style={{ color: "#6c63ff" }}>A</span>L
              <span style={{ color: "#6c63ff" }}>A</span>P
              <span style={{ color: "#ff6583" }}>A</span>
              <span style={{ color: "#6c63ff" }}>A</span>P
            </p>
          </div>

          <div className="flex-1 flex flex-col justify-around items-center py-4 px-5">
            {/* Avatar */}
            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center text-4xl lg:text-5xl"
              style={{ background: "rgba(108,99,255,0.15)", border: "2px solid rgba(108,99,255,0.3)", color: "#6c63ff" }}>
              <span className="material-symbols-outlined text-[40px]">person</span>
            </div>

            {/* Username */}
            <div className="text-center">
              <p className="text-xl lg:text-2xl font-black" style={{ color: "var(--text)" }}>
                {userinfo.username}
              </p>
              <p className="text-xs mt-0.5 font-semibold tracking-widest uppercase" style={{ color: "#ff6583" }}>
                {userinfo.email}
              </p>
            </div>

            {/* Stats */}
            <div className="w-full rounded-xl p-3 text-center"
              style={{ background: "rgba(108,99,255,0.08)", border: "1px solid rgba(108,99,255,0.15)" }}>
              <p className="text-2xl font-black" style={{ color: "#6c63ff" }}>{scores.length}</p>
              <p className="text-xs" style={{ color: "var(--muted)" }}>games played</p>
            </div>

            {/* Actions */}
            <div className="w-full flex flex-col gap-2">
              <button
                className="btn-ghost w-full py-2.5 text-xs font-bold tracking-wide rounded-full flex items-center justify-center gap-2"
                onClick={() => setchangetab(true)}
              >
                <span className="material-symbols-outlined text-[16px]">key</span> Change Password
              </button>
              <button
                className="btn-ghost w-full py-2.5 text-xs font-bold tracking-wide rounded-full flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[16px]">mail</span> Contact Support
              </button>
              <button
                className="btn-pink w-full py-2.5 text-xs font-bold tracking-wide rounded-full flex items-center justify-center gap-2"
                onClick={() => navigate("/lobby", { state: { userinfo: userinfo, username: userinfo.username } })}
              >
                <span className="material-symbols-outlined text-[16px]">home</span> Back to Lobby
              </button>
            </div>
          </div>
        </div>

        {/* Records table */}
        <div className="w-full md:w-[80%] h-[53%] lg:w-[68%] lg:h-[90%] rounded-2xl overflow-hidden flex flex-col fade-in-delay"
          style={{ background: "var(--glass)", border: "1px solid rgba(108,99,255,0.2)" }}>

          <div className="w-full py-4 flex justify-center items-center"
            style={{ borderBottom: "1px solid rgba(108,99,255,0.1)" }}>
            <p className="text-xl font-black"
              style={{ background: "linear-gradient(135deg, #6c63ff, #ff6583)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Personal Records
            </p>
          </div>

          <div className="flex-1 overflow-auto px-2 py-2">
            {scores.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center gap-2 text-center p-4">
                <span className="material-symbols-outlined text-4xl" style={{ color: "var(--muted)" }}>content_paste</span>
                <p className="text-sm" style={{ color: "var(--muted)" }}>No game records yet. Start playing!</p>
              </div>
            ) : (
              <table className="styled-table w-full text-sm text-left">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-xs font-bold tracking-widest uppercase" style={{ color: "var(--text)" }}>No.</th>
                    <th className="px-4 py-3 text-xs font-bold tracking-widest uppercase" style={{ color: "var(--text)" }}>Topic</th>
                    <th className="px-4 py-3 text-xs font-bold tracking-widest uppercase" style={{ color: "var(--text)" }}>Score</th>
                    <th className="px-4 py-3 text-xs font-bold tracking-widest uppercase" style={{ color: "var(--text)" }}>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {scores.map((score, index) => (
                    <tr key={index} className="styled-table">
                      <td className="px-4 py-3 text-xs font-bold" style={{ color: "var(--muted)" }}>{index + 1}</td>
                      <td className="px-4 py-3 text-xs font-semibold" style={{ color: "var(--text)" }}>{score.subject}</td>
                      <td className="px-4 py-3 text-xs font-black"
                        style={{ color: score.value >= 70 ? "#4ade80" : score.value >= 50 ? "#f59e0b" : "#f87171" }}>
                        {score.value}%
                      </td>
                      <td className="px-4 py-3 text-xs" style={{ color: "var(--muted)" }}>
                        {new Date(score.date).toLocaleDateString("en-US")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      {changetab && <Changepass userinfo={userinfo} setchangetab={setchangetab} />}
    </div>
  );
}

export default Profile;
