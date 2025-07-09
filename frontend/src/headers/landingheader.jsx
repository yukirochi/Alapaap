import { useState } from "react";
import { NavLink } from "react-router-dom";

function LandingHeader({openaboutt}) {
  return (
    <header className="bg-[#434343] h-[50%] w-[150%] absolute bottom-[-10%] right-[-86%] rotate-[120deg] flex justify-center items-center z-10">
      <div className="relative w-[100%] h-[100%] ">
        <div className="absolute bottom-[-5%] right-[] left-[50%]  rotate-[-120deg] flex flex-col w-[20%] h-[70%] items-center text-[clamp(1.3rem,2vw,2rem)] gap-[7%] text-[#6c63ff]">
          <NavLink
            to="/play"
            className="border-b-[4px]  border-b-[#ff6583] flex items-center justify-center animate-borderBeat hover:animate-hoveBeat hover:w-[50%]"
          >
            PLAY
          </NavLink>
          <NavLink
            to="/signup"
            className="border-b-[4px]  border-b-[#ff6583] flex items-center justify-center animate-borderBeat hover:animate-hoveBeat hover:w-[50%]"
          >
            SIGNUP
          </NavLink>
          <NavLink
            to="/login"
            className="border-b-[4px]  border-b-[#ff6583] flex items-center justify-center animate-borderBeat hover:animate-hoveBeat hover:w-[50%]"
          >
            LOGIN
          </NavLink>
          <NavLink 
          onClick={()=> openaboutt()}
          className="border-b-[4px] border-b-[#ff6583] flex items-center justify-center animate-borderBeat hover:animate-hoveBeat hover:w-[50%]">
            ABOUT
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default LandingHeader;
