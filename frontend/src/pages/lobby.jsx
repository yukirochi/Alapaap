import Leaderboard from "../components/leaderboard";
import Lobbyheader from "../headers/lobbyheader";
import agham from "../assets/agham.webp";
import heograpiya from "../assets/heograpiya.webp";
import matematika from "../assets/matematika.webp";
import politika from "../assets/politika.webp";
import teknolohiya from "../assets/teknolohiya.webp";
import { useEffect } from "react";

//usecontext to avoid too much nesting props
function Lobby() {
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden flex flex-col  items-center">
      <Lobbyheader />
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
              className=" w-[33%] h-[100%]  bg-center bg-contain bg-no-repeat relative grayscale hover:grayscale-0 pics "
              style={{ backgroundImage: `url(${agham})` }}
            >
              <p className="absolute flex justify-center items-end h-[105%] w-[100%] text-[13px] cursor-pointer -mt-[10px] ">
                AGHAM
              </p>
            </div>
            <div
              className=" w-[33%] h-[100%]  bg-center bg-contain bg-no-repeat relative grayscale hover:grayscale-0 pics"
              style={{ backgroundImage: `url(${heograpiya})` }}
            >
              <p className="absolute flex justify-center items-end h-[105%] w-[100%] text-[13px] cursor-pointer -mt-[10px]">
                HEOGRAPIYA
              </p>
            </div>
          </div>
          <div className="w-[100%] h-[33%]  flex justify-center">
            <div
              className=" w-[33%] h-[100%]  bg-center bg-contain bg-no-repeat relative grayscale hover:grayscale-0 pics"
              style={{ backgroundImage: `url(${matematika})` }}
            >
              <p className="absolute flex justify-center items-end h-[105%] w-[100%] text-[13px] cursor-pointer -mt-[10px]">
                MATEMATIKA
              </p>
            </div>
          </div>
          <div className="w-[100%] h-[33%] flex justify-between">
            <div
              className=" w-[33%] h-[100%]  bg-center bg-contain bg-no-repeat relative grayscale hover:grayscale-0 pics"
              style={{ backgroundImage: `url(${politika})` }}
            >
              <p className="absolute flex justify-center items-end h-[105%] w-[100%] text-[13px] cursor-pointer -mt-[10px]">
                POLITIKA
              </p>
            </div>
            <div
              className=" w-[33%] h-[100%]  bg-center bg-contain bg-no-repeat relative grayscale hover:grayscale-0 pics"
              style={{ backgroundImage: `url(${teknolohiya})` }}
            >
              <p className="absolute flex justify-center items-end h-[105%] w-[100%] text-[13px] cursor-pointer -mt-[10px]">
                TEKNOLOHIYA
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[4%] flex justify-center ">
        <button className="w-[30%] h-[100%] lg:text-[20px] bg-[#434343] flex justify-center items-center text-[#6c63ff] rounded-[5px] max-w-[200px]">
          START
        </button>
      </div>
      <p className="w-[100%] text-center text-[10px]">
        Login to be in Leaderboard
      </p>
    </div>
  );
}

export default Lobby;
