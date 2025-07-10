import LandingHeader from "../headers/landingheader";
import landingimage from "../assets/landing-image.svg"
import { useState } from "react";
import About from "../components/about";
function Landing() {
  let [openabout, setopenabout] = useState(false)

  const openaboutf = ()=> setopenabout(true);

  const closeaboutf = ()=> setopenabout(false);

  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden flex flex-col justify-center items-center relative lg:block">
      <div className=" w-[100%] h-[20%] text-center flex justify-center items-center lg:justify-start ">
        <p className="text-5xl font-bold lg:ml-[10%] lg:text-6xl md:text-6xl">
          <span className="text-[#6c63ff]">A</span>L
          <span className="text-[#6c63ff]">A</span>P
          <span className="text-[#ff6583]">A</span>
          <span className="text-[#6c63ff]">A</span>P
        </p>
      </div>
      <div className=" h-[80%] w-[140%]  bg-center bg-contain bg-no-repeat scale-x-[-1] lg:w-[70%] lg:h-[70%]"  style={{backgroundImage:`url(${landingimage})`}}>

      </div>
      <LandingHeader openaboutt={openaboutf}/>
      {openabout && <About closeabout={closeaboutf}/>}
    </div>
  );
}

export default Landing;
