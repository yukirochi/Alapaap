
import { useEffect } from "react"
import agham from "../assets/agham.webp"
import heograpiya from "../assets/heograpiya.webp"
import matematika from "../assets/matematika.webp"
import politika from "../assets/politika.webp"
import teknolohiya from "../assets/teknolohiya.webp"

function About({ closeabout }) {

  return (
    <div
      className="w-[100vw] h-[100vh] absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 z-10000 bg-[rgba(67,67,67,0.4)]"
      onClick={() => closeabout()}
    >
      <div id="about-cont" className=" bg-white flex flex-col items-center border-[1px] border-solid w-[80%] h-[55%] absolute top-1/2 left-1/2  z-1000 transform -translate-x-1/2 -translate-y-1/2 rounded-[6px]  max-w-[500px] ">
        <div className="h-[12%] w-[100%] flex justify-center items-end">
          <p className="text-[clamp(15px,10%,30px)] font-bold">
            <span className="text-[#ff6583]">A</span>BO
            <span className="text-[#6c63ff]">U</span>T
           
          </p>
        </div>
        <div className="h-[20%] w-[80%] text-center text-[13px] mt-[10px] max-sm:text-[10px]">
          A trivia game that the main goal is to achieve the alapaap (clouds)
          there 5 different characters the user can take (agham,
          matematika,pulitika,heograpiya, teknolohiya) 
        </div>
         <div className="h-[40%] w-[80%] text-center text-[13px] mt-[10px] max-sm:text-[10px] lg:h-[30%] md:h-[30%]">
         every characters have
          different set of question and their difficulty note that even the
          names are based on filipino terms the question still be world wide The
          user have 3 lives and if they loss all their lives they will face bad
          outcome The user can save their scores if they sign up
        </div>
        <div className="w-[80%] h-[10%] flex">
             <div className=" w-[20%] h-[100%]  bg-center bg-contain bg-no-repeat" style={{backgroundImage: `url(${agham})`}}></div>
             <div className=" w-[20%] h-[100%]  bg-center bg-contain bg-no-repeat" style={{backgroundImage: `url(${matematika})`}}></div>
             <div className=" w-[20%] h-[100%]  bg-center bg-contain bg-no-repeat" style={{backgroundImage: `url(${politika})`}}></div>
             <div className=" w-[20%] h-[100%]  bg-center bg-contain bg-no-repeat" style={{backgroundImage: `url(${heograpiya})`}}></div>
             <div className=" w-[20%] h-[100%]  bg-center bg-contain bg-no-repeat" style={{backgroundImage: `url(${teknolohiya})`}}></div>
        </div>
        
      </div>
    </div>
  );
}

export default About;
