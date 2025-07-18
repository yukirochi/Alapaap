import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
function Lobbyheader() {

  useEffect(()=>{
    const playnav = document.querySelector(".playnav")
    if(playnav){
      playnav.classList.add("animate-playnav2")
    }
  })
  
  return (
    <header className="flex w-[100%] h-[10%] justify-between  text-[20px] items-center">
       <NavLink
       className="ml-[5%] w-[30%] max-w-[300px] flex flex-col justify-center items-center playnav"
       >
        <p className="w-[100%] border-b-[1px] text-center text-[90%] border-b-[#ff6583] ">USER</p>
        <p className="w-[100%]  text-center text-[50%] opacity-60 playnav2">click to view your profile</p>
      </NavLink>
      <NavLink className="  flex justify-center text-center mr-[5%] outline-none" to="/">
        <p className="text-[35px]  material-symbols-outlined flex justify-center border-b-[4px]  animate-borderBeat w-[100%] border-b-[#ff6583] cursor-pointer hover:animate-hoveBeat">
          HOME
        </p>
      </NavLink>
     
     
    </header>
  );
}

export default Lobbyheader;
