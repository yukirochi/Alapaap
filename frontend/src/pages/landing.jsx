import LandingHeader from "../headers/landingheader";
import landingimage from "../assets/landing-image.svg";
import { useState } from "react";
import About from "../components/about";
import Usersignlog from "./userlogsign";
import NoticeSign from "../components/noticesign";

function Landing() {
  let [openabout, setopenabout] = useState(false);
  let [openview, setopenview] = useState("image");
  let [notice, setnotice] = useState(false);

  const openaboutf = () => setopenabout(true);
  const closeaboutf = () => setopenabout(false);
  const openlog = () => setopenview("login");
  const opensign = () => setopenview("signup");
  const opennotice = () => setnotice(true);
  const closennotice = () => setnotice(false);

  return (
    <div className="w-screen h-screen overflow-hidden relative flex flex-col items-center justify-center">
      {/* Gradient orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #6c63ff 0%, transparent 70%)" }} />
      <div className="absolute bottom-[-10%] right-[-5%] w-[350px] h-[350px] rounded-full opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #ff6583 0%, transparent 70%)" }} />

      {/* Logo */}
      <div className="w-full h-[18%] flex justify-center items-center lg:justify-start fade-in">
        <p className="logo-text text-5xl lg:ml-[10%] lg:text-7xl md:text-6xl select-none"
          style={{ textShadow: "0 0 40px rgba(108,99,255,0.5)" }}>
          <span style={{ color: "#6c63ff" }}>A</span>L
          <span style={{ color: "#6c63ff" }}>A</span>P
          <span style={{ color: "#ff6583" }}>A</span>
          <span style={{ color: "#6c63ff" }}>A</span>P
        </p>
      </div>

      {/* Floating tagline */}
      {openview === "image" && (
        <div className="absolute bottom-[22%] left-[5%] fade-in-delay hidden lg:block pointer-events-none">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] opacity-40" style={{ color: "var(--muted)" }}>
            reach the skies
          </p>
          <p className="text-2xl font-bold mt-1"
            style={{ background: "linear-gradient(135deg, #6c63ff, #ff6583)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            The Filipino Quiz Quest
          </p>
        </div>
      )}

      {/* Hero image */}
      {openview === "image" && (
        <div
          className="h-[75%] w-[140%] bg-center bg-contain bg-no-repeat scale-x-[-1] lg:w-[65%] lg:h-[68%] fade-in-delay"
          style={{
            backgroundImage: `url(${landingimage})`,
            filter: "drop-shadow(0 0 30px rgba(108,99,255,0.3))"
          }}
        />
      )}

      {openview === "login" && (
        <div className="fade-in w-full max-w-[420px] z-10">
          <Usersignlog log={true} />
        </div>
      )}
      {openview === "signup" && (
        <div className="fade-in w-full max-w-[420px] z-10">
          <Usersignlog log={false} />
        </div>
      )}

      {/* Theme Toggle Button */}
      <button 
        onClick={() => {
          document.documentElement.classList.toggle('light-mode');
          localStorage.setItem('theme', document.documentElement.classList.contains('light-mode') ? 'light' : 'dark');
        }}
        className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center btn-ghost z-50 transition-transform hover:scale-110"
        style={{ background: "rgba(108,99,255,0.1)", border: "1px solid var(--border)" }}
      >
        <span className="material-symbols-outlined text-[1.2rem] transform -rotate-45" style={{ color: "var(--text)" }}>
          light_mode
        </span>
      </button>

      <LandingHeader
        openaboutt={openaboutf}
        openlogin={openlog}
        opensign={opensign}
        opennotice={opennotice}
      />

      {openabout && <About closeabout={closeaboutf} />}
      {notice && <NoticeSign closennotice={closennotice} opensign={opensign} />}
    </div>
  );
}

export default Landing;
