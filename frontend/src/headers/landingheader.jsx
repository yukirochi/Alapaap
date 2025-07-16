import { useState } from "react";
import { NavLink } from "react-router-dom";

function LandingHeader({ openaboutt, openlogin, opensign }) {
  return (
    <header className="bg-[#434343] h-[50%] w-[150%] absolute bottom-[-10%] right-[-86%] rotate-[120deg] flex justify-center items-center z-10 lg:right-[-70%] lg:h-[60%] lg:rotate-[130deg]">
      <div className="relative w-[100%] h-[100%] ">
        <div className="absolute bottom-[-5%] right-[] left-[50%]  rotate-[-120deg] flex flex-col w-[20%] h-[70%] items-center text-[clamp(1.3rem,2vw,2rem)] gap-[7%] text-[#6c63ff] lg:rotate-[-130deg] lg:bottom-[60%] lg:top-[20%] lg:left-[40%]">
          <NavLink
            to="/lobby"
            className="border-b-[4px]  border-b-[#ff6583] flex items-center justify-center animate-borderBeat hover:animate-hoveBeat hover:w-[50%] max-w-[80px] outline-none"
          >
            PLAY
          </NavLink>
          <NavLink
            onClick={() => opensign()}
            className="border-b-[4px]  border-b-[#ff6583] flex items-center justify-center animate-borderBeat hover:animate-hoveBeat hover:w-[50%] lg:mr-[30%] max-w-[80px] outline-none"
          >
            SIGNUP
          </NavLink>
          <NavLink
            onClick={() => openlogin()}
            className="border-b-[4px]  border-b-[#ff6583] flex items-center justify-center animate-borderBeat hover:animate-hoveBeat hover:w-[50%] lg:mr-[50%] max-w-[80px] outline-none"
          >
            LOGIN
          </NavLink>
          <NavLink
            onClick={() => openaboutt()}
            className="border-b-[4px] border-b-[#ff6583] flex items-center justify-center animate-borderBeat hover:animate-hoveBeat hover:w-[50%] lg:mr-[80%] max-w-[80px] outline-none"
          >
            ABOUT
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default LandingHeader;
