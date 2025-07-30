import { useState } from "react";
import Gameheader from "../headers/gameheader";
import Slider from "../components/slider";

function Game() {
  let [life, setlife] = useState(3);
  let [level, setlevel] = useState(1)
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden">
      <Gameheader life={life} />
      <div className="w-[100%] h-[5%]  flex relative">
        <Slider value={level}/>
      </div>
    
      <div className=" w-[100%] h-[70%] flex flex-col justify-center items-center">
        <div className="w-[80%] h-[40%] border-[1px] rounded-sm max-w-[500px] flex justify-center text-center items-center">
          <p className="w-[80%]"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tenetur eos suscipit, repudiandae modi fuga perferendis dolore sequi beatae mollitia autem nesciunt ad, ipsam ullam iure aut laborum incidunt unde!</p>
        </div>
        <div className="w-[80%] h-[5%] flex justify-center items-center text-[20px] mt-[10px]">
          00:00
        </div>
        <div className="w-[80%] h-[50%] flex flex-col items-center justify-center gap-[5%]">
          <div className="w-[100%] h-[15%]  max-w-[500px] bg-[white] text-[#ff6583] px-5 py-2 text-sm shadow-sm hover:shadow-lg   flex justify-center items-center font-medium tracking-wider border-2 border-[#ff6583] hover:bg-[#ff6583] hover:border-[#ff6583] hover:text-white  rounded-sm transition ease-in duration-300">
           <p className="w-[90%]">A. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
          </div>
          <div className="w-[100%] h-[15%]  max-w-[500px] bg-[white] text-[#ff6583] px-5 py-2 text-sm shadow-sm hover:shadow-lg   flex justify-center items-center font-medium tracking-wider border-2 border-[#ff6583] hover:bg-[#ff6583] hover:border-[#ff6583] hover:text-white  rounded-sm transition ease-in duration-300">
           <p className="w-[90%]">A. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
          </div>
          <div className="w-[100%] h-[15%]  max-w-[500px] bg-[white] text-[#ff6583] px-5 py-2 text-sm shadow-sm hover:shadow-lg   flex justify-center items-center font-medium tracking-wider border-2 border-[#ff6583] hover:bg-[#ff6583] hover:border-[#ff6583] hover:text-white  rounded-sm transition ease-in duration-300">
           <p className="w-[90%]">A. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
          </div>
          <div className="w-[100%] h-[15%]  max-w-[500px] bg-[white] text-[#ff6583] px-5 py-2 text-sm shadow-sm hover:shadow-lg   flex justify-center items-center font-medium tracking-wider border-2 border-[#ff6583] hover:bg-[#ff6583] hover:border-[#ff6583] hover:text-white  rounded-sm transition ease-in duration-300">
           <p className="w-[90%]">A. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
           
          </div>

         
        </div>
        <div className="w-[100%] h-[5%] flex justify-center items-center flex-col">
          <button className="bg-[#6c63ff] hover:bg-transparent px-5 py-2 text-sm shadow-sm hover:shadow-lg  font-medium tracking-wider border-2 border-[#6c63ff] hover:border-[#6c63ff] text-white hover:text-[#6c63ff] rounded-full transition ease-in duration-300">
            SUBMIT
          </button>
          <p className="text-[15px] -mb-[10px] cursor-pointer border-b-black border-b-[1px] hover:opacity-50">Quit the game</p>
        </div>
   
      </div>
    </div>
  );
}

export default Game;
