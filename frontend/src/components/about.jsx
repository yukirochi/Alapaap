import agham from "../assets/agham.webp";
import heograpiya from "../assets/heograpiya.webp";
import matematika from "../assets/matematika.webp";
import politika from "../assets/politika.webp";
import teknolohiya from "../assets/teknolohiya.webp";

const characters = [
  { img: agham, name: "Agham", desc: "Science" },
  { img: matematika, name: "General", desc: "Knowledge" },
  { img: politika, name: "Politika", desc: "Society" },
  { img: heograpiya, name: "Heograpiya", desc: "Geography" },
  { img: teknolohiya, name: "Musika", desc: "Music" },
];

function About({ closeabout }) {
  return (
    <div
      className="modal-overlay"
      onClick={() => closeabout()}
    >
      <div
        className="glass w-[90%] max-w-[500px] p-7 flex flex-col items-center gap-5 fade-in"
        style={{ background: "var(--glass)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title */}
        <div className="text-center">
          <p className="text-2xl font-black tracking-[0.1em]"
            style={{ background: "linear-gradient(135deg, #ff6583, #6c63ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            ABOUT
          </p>
          <div className="w-[50px] h-[2px] mx-auto mt-2 rounded-full"
            style={{ background: "linear-gradient(90deg, #6c63ff, #ff6583)" }} />
        </div>

        {/* Description */}
        <div className="text-center text-sm leading-relaxed" style={{ color: "#a0a0c0" }}>
          <p>
            <strong style={{ color: "var(--text)" }}>Alapaap</strong> is a trivia game where your goal is to reach the clouds!
            Choose one of 5 unique characters, each with their own category of questions.
          </p>
          <p className="mt-2">
            Despite the Filipino character names, questions are <span style={{ color: "#6c63ff" }}>worldwide</span>.
            You have <span style={{ color: "#f87171" }}>3 lives</span> — lose them all and you'll fall. Sign up to save your scores!
          </p>
        </div>

        {/* Characters */}
        <div className="w-full">
          <p className="text-center text-[10px] font-bold tracking-[0.25em] uppercase mb-3" style={{ color: "var(--muted)" }}>
            ✦ Characters ✦
          </p>
          <div className="flex justify-center gap-3">
            {characters.map((c) => (
              <div key={c.name} className="flex flex-col items-center gap-1">
                <div className="w-12 h-12 bg-contain bg-center bg-no-repeat rounded-lg"
                  style={{ backgroundImage: `url(${c.img})`, filter: "drop-shadow(0 0 6px rgba(108,99,255,0.3))" }} />
                <p className="text-[9px] font-bold tracking-wide text-center" style={{ color: "#6c63ff" }}>{c.name}</p>
                <p className="text-[8px]" style={{ color: "var(--muted)" }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          className="btn-ghost px-8 py-2 text-sm font-bold rounded-full"
          onClick={() => closeabout()}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default About;
