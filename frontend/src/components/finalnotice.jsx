import { NavLink } from "react-router-dom";

function Finalnotice({settog, getdata}) {
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1000 bg-[rgba(67,67,67,0.4)] flex items-center justify-center"
    onClick={()=> settog(false)}>
      <div className="m-12 bg-white max-w-[500px] rounded-xl duration-700 p-5 h-[60%] flex flex-col justify-center items-center  w-[80%] gap-[10%] ">
        <p className="text-4xl font-bold  lg:text-6xl md:text-6xl md:-mt-[5%]">
          <span className="text-[#6c63ff]">A</span>L
          <span className="text-[#6c63ff]">A</span>P
          <span className="text-[#ff6583]">A</span>
          <span className="text-[#6c63ff]">A</span>P
        </p>

        <p class="text-[13px]  text-center mt-[10px] max-sm:text-[10px] lg:h-[30%] md:h-[30%] md:w-[60%]">
          Welcome to the Quiz Quest! Your goal is to rise from Lupa (the ground)
          all the way to Alapaap (the skies) by completing 10 levels of
          increasing difficulty. The quiz is divided into three tiers: Easy,
          Medium, and Hard, with the final stage—Level 10—being the ultimate
          Boss Level. Each correct answer brings you closer to the top, while
          wrong answers can slow you down. Think fast, stay sharp, and conquer
          every level to claim victory in the skies. Good luck!
        </p>

        <button className="bg-[#ff6583] hover:bg-transparent px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg md:mt-[10%] font-medium tracking-wider border-2 border-[#ff6583] hover:border-[#ff6583] text-white hover:text-[#ff6583] rounded-full transition ease-in duration-300"
        onClick={()=> getdata()}
        >
          BEGIN
        </button>
      </div>
    </div>
  );
}

export default Finalnotice;
