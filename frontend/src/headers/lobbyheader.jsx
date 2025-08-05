import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Uselogs } from "../auth/providers";
import Userhead from "../components/userhead";
function Lobbyheader({ nickname, setopenlog }) {
  let [info, setinfo] = useState("dasdasas");

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

    let data = { username: name };
    let res = await fetch("http://localhost:4001/api/getuserid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Network Error");
    let resp = await res.json();
    console.log(resp);
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
