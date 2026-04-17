function LandingHeader({ openaboutt, openlogin, opensign, opennotice }) {

  return (
    <header
      id="landinghead"
      className="bg-dark3 h-[50%] w-[150%] absolute bottom-[-10%] right-[-86%] rotate-[120deg] flex justify-center items-center lg:right-[-70%] lg:h-[60%] lg:rotate-[130deg] animate-headlan2 lg:animate-headlan"
      style={{
        background: "linear-gradient(135deg, #1a1a35 0%, #12122a 60%, #0d0d1a 100%)",
        borderTop: "1px solid rgba(108,99,255,0.2)",
        boxShadow: "0 -20px 60px rgba(108,99,255,0.15)"
      }}
    >
      <div className="relative w-full h-full">
        <div className="absolute bottom-[-5%] left-[50%] rotate-[-120deg] flex flex-col w-[22%] h-[70%] items-center text-[clamp(1rem,2vw,1.4rem)] gap-[8%] lg:rotate-[-130deg] lg:bottom-[60%] lg:top-[20%] lg:left-[40%]">

          <button
            onClick={() => opennotice()}
            className="nav-link-item text-[clamp(0.75rem,1.5vw,1.1rem)] font-extrabold tracking-[0.15em] transition-all duration-200 hover:scale-105 bg-transparent border-0 outline-none"
            style={{ color: "#6c63ff" }}
          >
            PLAY
          </button>

          <button
            onClick={() => opensign()}
            className="nav-link-item text-[clamp(0.75rem,1.5vw,1.1rem)] font-bold tracking-[0.12em] lg:mr-[30%] bg-transparent border-0 outline-none"
          >
            SIGNUP
          </button>

          <button
            onClick={() => openlogin()}
            className="nav-link-item text-[clamp(0.75rem,1.5vw,1.1rem)] font-bold tracking-[0.12em] lg:mr-[50%] bg-transparent border-0 outline-none"
          >
            LOGIN
          </button>

          <button
            onClick={() => openaboutt()}
            className="nav-link-item text-[clamp(0.75rem,1.5vw,1.1rem)] font-bold tracking-[0.12em] lg:mr-[80%] bg-transparent border-0 outline-none"
          >
            ABOUT
          </button>
        </div>
      </div>
    </header>
  );
}

export default LandingHeader;
