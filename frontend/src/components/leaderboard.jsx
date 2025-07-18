import { useEffect } from "react";

function Leaderboard() {

  useEffect(()=>{
    const board = document.getElementById("board")
    const lead = document.getElementById("lead")
    if(board){
      board.classList.add("animate-lead")
      
      board.addEventListener("animationend", ()=>{
        lead.classList.add("animate-opa")
        lead.classList.add("opacity-100")
      })
      
    }
  },[])
  return (
    <div  className="w-[100%] h-[28%] flex flex-col justify-center items-center max-w-[800px]">
      <p id="lead" className="text-[20px] font-semibold opacity-0">
        <span className="text-[#ff6583]">L</span>eader Boar
        <span className="text-[#ff6583]">d</span>
      </p>
      <div  id="board" className="w-[80%] h-[50%] border-[1px] border-black rounded-[5px]"></div>
    </div>
  );
}

export default Leaderboard;
