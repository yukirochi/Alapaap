import { useEffect, useState } from "react";

function Leaderboard() {
  let [tabledata, settabledata] = useState();
  let [num, setnum] = useState(0) 
  useEffect(() => {
    const board = document.getElementById("board");
    const lead = document.getElementById("lead");
    if (board) {
      board.classList.add("animate-lead");

      board.addEventListener("animationend", () => {
        lead.classList.add("animate-opa");
        lead.classList.add("opacity-100");
      });
    }
  }, []);

  useEffect(() => {
    let leaddata = async () => {
      try {
        let res = await fetch("http://localhost:4001/api/leaderboard");
        let data = await res.json();
        settabledata(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    leaddata();
  }, []);

  return (
    <div className="w-[100%] h-[28%] flex flex-col justify-center items-center max-w-[800px]">
      <p id="lead" className="text-[20px] font-semibold opacity-0">
        <span className="text-[#ff6583]">L</span>eader Boar
        <span className="text-[#ff6583]">d</span>
      </p>
      <div
        id="board"
        className="w-[80%] h-[50%] border-b-[1px] rounded-[5px] flex justify-center items-center gap-[5%]"
      >
        <div className="w-[100%] h-[100px] lg:h-[120px]  text-[70%] flex flex-col  items-center lg:text-[90%] flex-wrap gap-x-[20px] mt-5 uppercase">
          {tabledata && 
            tabledata.map((element, index) => (
              <p key={index}>{index + 1}. {element.username} {element.subject} {element.value}%</p>
            ))
          }
          
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
