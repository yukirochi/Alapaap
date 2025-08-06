import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Uselogs } from "../auth/providers";
import Userhead from "../components/userhead";
function Lobbyheader({ nickname, setopenlog,userinfo }) {
  let [info, setinfo] = useState("dasdasas");
  let navigate = useNavigate()
  useEffect(() => {
    const playnav = document.querySelector(".playnav");
    if (playnav) {
      playnav.classList.add("animate-playnav2");
    }
  });

  const VisitProfile = async (name) => {
    if (name.toLowerCase() === "guest" || name === "" || name === null) {
      return;
    }
    
     navigate(`/profile/${userinfo._id}`,{state:{userinfo: userinfo}})
  };

  return (
    <header className="flex w-[100%] h-[10%] justify-between  text-[20px] items-center">
      {info && (
        <div
          className="ml-[5%] w-[30%] max-w-[300px] flex flex-col justify-center items-center playnav"
          onClick={() => VisitProfile(nickname)}
        >
          <Userhead nickname={nickname} />
        </div>
      )}

      <button
        className="  flex justify-center text-center mr-[5%] outline-none ml-auto"
        onClick={() => setopenlog(true)}
      >
        <p className="text-[30px]  material-symbols-outlined flex justify-center border-b-[4px]  animate-borderBeat w-[100%] border-b-[#ff6583] cursor-pointer hover:animate-hoveBeat ">
          LOGOUT
        </p>
      </button>
    </header>
  );
}

export default Lobbyheader;
