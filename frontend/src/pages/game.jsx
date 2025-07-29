import { useState } from "react";
import Gameheader from "../headers/gameheader";
import Slider from "../components/slider";

function Game() {
  let [life, setlife] = useState(3);
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden">
      <Gameheader life={life} />
      <div className="w-[100%] h-[5%]  flex relative">
        <Slider />
      </div>
      <div className=" w-[100%] h-[70%] flex flex-col justify-center items-center">
        <div className="w-[80%] h-[40%] border-[1px] border-black rounded-lg"></div>
        <div className="w-[80%] h-[5%] flex justify-center items-center text-[20px]">
          00:00
        </div>
        <div className="w-[80%] h-[50%] flex flex-col items-center justify-center gap-[5%]">
          <div className="w-[100%] h-[15%] border-[1px] border-black rounded-lg"></div>
          <div className="w-[100%] h-[15%] border-[1px] border-black rounded-lg"></div>
          <div className="w-[100%] h-[15%] border-[1px] border-black rounded-lg"></div>
          <div className="w-[100%] h-[15%] border-[1px] border-black rounded-lg"></div>
        </div>
        <div className="w-[100%] h-[5%] flex justify-center items-center flex-col">
          <button className="bg-[#ff6583] hover:bg-transparent px-5 py-2 text-sm shadow-sm hover:shadow-lg md:mt-[10%] font-medium tracking-wider border-2 border-[#ff6583] hover:border-[#ff6583] text-white hover:text-[#ff6583] rounded-full transition ease-in duration-300">
            SUBMIT
          </button>
          <p className="text-[15px] -mb-[10px] cursor-pointer">Quit the game</p>
        </div>
   
      </div>
    </div>
  );
}

export default Game;
