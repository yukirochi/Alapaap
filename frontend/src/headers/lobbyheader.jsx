import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Uselogs } from "../auth/providers";
import Userhead from "../components/userhead";
function Lobbyheader({nickname}) {
  let [info, setinfo] = useState("dasdasas");

  useEffect(() => {
    const playnav = document.querySelector(".playnav");
    if (playnav) {
      playnav.classList.add("animate-playnav2");
    }
  });

  return (
    <header className="flex w-[100%] h-[10%] justify-between  text-[20px] items-center">
      {info && (
        <NavLink className="ml-[5%] w-[30%] max-w-[300px] flex flex-col justify-center items-center playnav">
         <Userhead nickname={nickname}/>
        </NavLink>
      )}

      <NavLink
        className="  flex justify-center text-center mr-[5%] outline-none ml-auto"
        to="/"
      >
        <p className="text-[35px]  material-symbols-outlined flex justify-center border-b-[4px]  animate-borderBeat w-[100%] border-b-[#ff6583] cursor-pointer hover:animate-hoveBeat ">
          HOME
        </p>
      </NavLink>
    </header>
  );
}

export default Lobbyheader;
