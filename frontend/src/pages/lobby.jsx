import Leaderboard from "../components/leaderboard";
import Lobbyheader from "../headers/lobbyheader";
import agham from "../assets/agham.webp";
import heograpiya from "../assets/heograpiya.webp";
import matematika from "../assets/matematika.webp";
import politika from "../assets/politika.webp";
import teknolohiya from "../assets/teknolohiya.webp";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Finalnotice from "../components/finalnotice";
import Openlogout from "../components/logout";

const subjects = [
  { name: "Science", category: "AGHAM", img: agham, label: "AGHAM" },
  { name: "Geography", category: "HEOGRAPIYA", img: heograpiya, label: "HEOGRAPIYA" },
  { name: "General Knowledge", category: "MATEMATIKA", img: matematika, label: "GENERAL" },
  { name: "Society & Culture", category: "POLITIKA", img: politika, label: "POLITIKA" },
  { name: "Music", category: "TEKNOLOHIYA", img: teknolohiya, label: "MUSIKA" },
];

function Lobby() {
  let [select, setselect] = useState("");
  const location = useLocation();
  let nickname = location.state?.username || "guest";
  let userinfo = location.state?.userinfo;
  const navigate = useNavigate();
  let [tog, settog] = useState(false);
  let [openlog, setopenlog] = useState(false);

  const getdata = () => {
    if (select === "") {
      return;
    }
    if (nickname.toLowerCase() === "guest" || nickname === "" || nickname === null) {
      navigate("/game/guest", {
        state: { selected: select, nickname: nickname, userinfo: userinfo },
      });
    } else {
      navigate(`/game/${userinfo._id}`, {
        state: { selected: select, nickname: nickname, userinfo: userinfo },
      });
    }
  };

  const selected = (name) => {
    setselect(name);
  };

  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col items-center relative">
      {/* Orbs */}
      <div className="absolute top-[-80px] right-[-80px] w-[300px] h-[300px] rounded-full pointer-events-none opacity-10"
        style={{ background: "radial-gradient(circle, #6c63ff 0%, transparent 70%)" }} />
      <div className="absolute bottom-[-80px] left-[-80px] w-[250px] h-[250px] rounded-full pointer-events-none opacity-10"
        style={{ background: "radial-gradient(circle, #ff6583 0%, transparent 70%)" }} />

      <Lobbyheader nickname={nickname} setopenlog={setopenlog} userinfo={userinfo} />

      {/* Logo */}
      <div className="w-full h-[6%] flex justify-center items-center fade-in">
        <p className="logo-text text-4xl lg:text-5xl select-none"
          style={{ textShadow: "0 0 30px rgba(108,99,255,0.4)" }}>
          <span style={{ color: "#6c63ff" }}>A</span>L
          <span style={{ color: "#6c63ff" }}>A</span>P
          <span style={{ color: "#ff6583" }}>A</span>
          <span style={{ color: "#6c63ff" }}>A</span>P
        </p>
      </div>

      <Leaderboard />

      {/* Subject selection label */}
      <div className="w-full h-[5%] flex justify-center items-center">
        <p className="text-xs font-bold tracking-[0.25em] uppercase fade-in-delay"
          style={{ color: "var(--muted)" }}>
          ✦ Choose Your Scarf ✦
        </p>
      </div>

      {/* Scarf grid */}
      <div className="w-full h-[36%] flex justify-center fade-in-delay">
        <div className="w-[90%] max-w-[520px] h-full flex flex-col justify-between">

          {/* Row 1 */}
          <div className="h-[31%] flex justify-center gap-[6%]">
            {subjects.slice(0, 2).map((sub) => (
              <div
                key={sub.name}
                onClick={() => selected(sub.name)}
                className={`w-[38%] h-full rounded-xl cursor-pointer transition-all duration-300 relative overflow-hidden
                  ${select === sub.name ? "scarf-item active" : "scarf-item"}`}
                style={{ backgroundImage: `url(${sub.img})`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
              >
                <div className="absolute bottom-0 w-full text-center py-1 text-[10px] font-bold tracking-widest"
                  style={{ background: "rgba(13,13,26,0.7)", color: select === sub.name ? "#ff6583" : "var(--muted)" }}>
                  {sub.label}
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="h-[31%] flex justify-center">
            <div
              onClick={() => selected(subjects[2].name)}
              className={`w-[38%] h-full rounded-xl cursor-pointer transition-all duration-300 relative overflow-hidden
                ${select === subjects[2].name ? "scarf-item active" : "scarf-item"}`}
              style={{ backgroundImage: `url(${subjects[2].img})`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
            >
              <div className="absolute bottom-0 w-full text-center py-1 text-[10px] font-bold tracking-widest"
                style={{ background: "rgba(13,13,26,0.7)", color: select === subjects[2].name ? "#ff6583" : "var(--muted)" }}>
                {subjects[2].label}
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="h-[31%] flex justify-center gap-[6%]">
            {subjects.slice(3, 5).map((sub) => (
              <div
                key={sub.name}
                onClick={() => selected(sub.name)}
                className={`w-[38%] h-full rounded-xl cursor-pointer transition-all duration-300 relative overflow-hidden
                  ${select === sub.name ? "scarf-item active" : "scarf-item"}`}
                style={{ backgroundImage: `url(${sub.img})`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
              >
                <div className="absolute bottom-0 w-full text-center py-1 text-[10px] font-bold tracking-widest"
                  style={{ background: "rgba(13,13,26,0.7)", color: select === sub.name ? "#ff6583" : "var(--muted)" }}>
                  {sub.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Start button area */}
      <div className="w-full h-[8%] flex flex-col justify-center items-center gap-1 fade-in-delay2">
        <button
          className={`px-10 py-2.5 font-bold text-sm tracking-[0.15em] rounded-full transition-all duration-300
            ${select ? "btn-primary pulse-ring" : "btn-ghost opacity-60 cursor-not-allowed"}`}
          onClick={() => select && settog(true)}
        >
          {select ? `START — ${select}` : "SELECT A SCARF FIRST"}
        </button>
        {!userinfo && (
          <p className="text-[10px] mt-1" style={{ color: "var(--muted)" }}>
            Login to save scores on the leaderboard
          </p>
        )}
      </div>

      {tog && <Finalnotice settog={settog} getdata={getdata} />}
      {openlog && <Openlogout setopenlog={setopenlog} />}
    </div>
  );
}

export default Lobby;
