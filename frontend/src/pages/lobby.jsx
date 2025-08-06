import Leaderboard from "../components/leaderboard";
import Lobbyheader from "../headers/lobbyheader";
import agham from "../assets/agham.webp";
import heograpiya from "../assets/heograpiya.webp";
import matematika from "../assets/matematika.webp";
import politika from "../assets/politika.webp";
import teknolohiya from "../assets/teknolohiya.webp";
import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Finalnotice from "../components/finalnotice";
import Openlogout from "../components/logout";
function Lobby() {
  let [select, setselect] = useState("");
  const location = useLocation();
  let nickname = location.state?.username || "guest";
  let userinfo = location.state?.userinfo;
  console.log(location.state);
    

  const navigate = useNavigate();
  let [tog, settog] = useState(false);
  let [openlog, setopenlog] = useState(false);
  let subjects = [
    {
      name: "Science",
      category: "AGHAM",
    },
    {
      name: "Geography",
      category: "HEOGRAPIYA",
    },
    {
      name: "General Knowledge",
      category: "MATEMATIKA",
    },
    {
      name: "Society & Culture",
      category: "POLITIKA",
    },
    {
      name: "Music",
      category: "TEKNOLOHIYA",
    },
  ];
  const getdata = () => {
    if (select === "") {
      alert("pls choose a scarf first");
      return;
    }

    if (
      nickname.toLowerCase() === "guest" ||
      nickname === "" ||
      nickname === null
    ) {
      navigate("/game/guest", {
        state: { selected: select, nickname: nickname },
      });
    }else{
       navigate(`/game/${userinfo._id}`, {
        state: { selected: select, nickname: nickname },
      });
    }
  
  };

  const selected = (items) => {
    document.querySelectorAll(".select").forEach((itm) => {
      itm.classList.remove("grayscale-0");
    });
    setselect(items);

    subjects.forEach((key) => {
      if (items === key.name) {
        document
          .getElementsByClassName(`${key.category}`)[0]
          .classList.add("grayscale-0");
      }
    });
  };

  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden flex flex-col  items-center">
      <Lobbyheader
        nickname={nickname}
        setopenlog={setopenlog}
        userinfo={userinfo}
      />
      <div className=" w-[100%] h-[5%] flex justify-center items-center">
        <p className="text-5xl font-bold  lg:text-6xl md:text-6xl">
          <span className="text-[#6c63ff]">A</span>L
          <span className="text-[#6c63ff]">A</span>P
          <span className="text-[#ff6583]">A</span>
          <span className="text-[#6c63ff]">A</span>P
        </p>
      </div>
      <Leaderboard />
      <div className="w-[100%] h-[5%] flex justify-center font-bold text-[15px] cursor-pointer">
        PLEASE CHOOSE YOUR SCARF
      </div>
      <div className="w-[100%] h-[40%] flex justify-center max-w-[600px]">
        <div className="w-[80%] h-[90%] ">
          <div className="w-[100%] h-[33%]  flex justify-between">
            <div
              className=" w-[33%] h-[100%]  bg-center bg-contain bg-no-repeat relative grayscale hover:grayscale-0 pics AGHAM select"
              style={{ backgroundImage: `url(${agham})` }}
              onClick={() => selected("Science")}
            >
              <p className="absolute flex justify-center items-end h-[105%] w-[100%] text-[13px] cursor-pointer -mt-[10px] ">
                AGHAM
              </p>
            </div>
            <div
              className=" w-[33%] h-[100%]  bg-center bg-contain bg-no-repeat relative grayscale hover:grayscale-0 pics HEOGRAPIYA select"
              style={{ backgroundImage: `url(${heograpiya})` }}
              onClick={() => selected("Geography")}
            >
              <p className="absolute flex justify-center items-end h-[105%] w-[100%] text-[13px] cursor-pointer -mt-[10px]">
                HEOGRAPIYA
              </p>
            </div>
          </div>
          <div className="w-[100%] h-[33%]  flex justify-center">
            <div
              className=" w-[33%] h-[100%]  bg-center bg-contain bg-no-repeat relative grayscale hover:grayscale-0 pics MATEMATIKA select"
              style={{ backgroundImage: `url(${matematika})` }}
              onClick={() => selected("General Knowledge")}
            >
              <p className="absolute flex justify-center items-end h-[105%] w-[100%] text-[13px] cursor-pointer -mt-[10px]">
                GENERAL
              </p>
            </div>
          </div>
          <div className="w-[100%] h-[33%] flex justify-between">
            <div
              className=" w-[33%] h-[100%]  bg-center bg-contain bg-no-repeat relative grayscale hover:grayscale-0 pics  POLITIKA select"
              style={{ backgroundImage: `url(${politika})` }}
              onClick={() => selected("Society & Culture")}
            >
              <p className="absolute flex justify-center items-end h-[105%] w-[100%] text-[13px] cursor-pointer -mt-[10px]">
                POLITIKA
              </p>
            </div>
            <div
              className=" w-[33%] h-[100%]  bg-center bg-contain bg-no-repeat relative grayscale hover:grayscale-0 pics TEKNOLOHIYA select"
              style={{ backgroundImage: `url(${teknolohiya})` }}
              onClick={() => selected("Music")}
            >
              <p className="absolute flex justify-center items-end h-[105%] w-[100%] text-[13px] cursor-pointer -mt-[10px]">
                MUSIKA
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[4%] flex justify-center ">
        <button
          className="w-[30%] h-[100%] lg:text-[20px] bg-gray-700 flex justify-center items-center text-[#6c63ff] rounded-[5px] max-w-[200px]"
          onClick={() => settog(true)}
        >
          START
        </button>
      </div>
      <p className="w-[100%] text-center text-[10px]">
        Login to be in Leaderboard
      </p>
      {tog && <Finalnotice settog={settog} getdata={getdata} />}
      {openlog && <Openlogout setopenlog={setopenlog}></Openlogout>}
    </div>
  );
}

export default Lobby;
