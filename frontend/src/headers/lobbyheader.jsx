import { NavLink } from "react-router-dom";
import { useState } from "react";
function Lobbyheader() {
 

  return (
    <header className="flex w-[100%] h-[10%] justify-end  text-[20px] items-center">
      <NavLink className="  flex justify-center text-center mr-[5%] " to="/">
        <p className="text-[35px]  material-symbols-outlined flex justify-center border-b-[4px]  animate-borderBeat w-[100%] border-b-[#ff6583] cursor-pointer hover:animate-hoveBeat">
          HOME
        </p>
      </NavLink>
     
    </header>
  );
}

export default Lobbyheader;
