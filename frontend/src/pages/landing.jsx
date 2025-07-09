import LandingHeader from "../headers/landingheader";
import landingimage from "../assets/landing-image.svg"
import { useState } from "react";
import About from "../components/about";
function Landing() {
  let [openabout, setopenabout] = useState(false)

  const openaboutf = ()=> setopenabout(true);

  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden flex flex-col justify-center items-center relative">
      <div className=" w-[100%] h-[20%] text-center flex justify-center items-center ">
        <p className="text-5xl font-bold ">
          <span className="text-[#6c63ff]">A</span>L
          <span className="text-[#6c63ff]">A</span>P
          <span className="text-[#ff6583]">A</span>
          <span className="text-[#6c63ff]">A</span>P
        </p>
      </div>
      <div className=" h-[80%] w-[140%]  bg-center bg-contain bg-no-repeat scale-x-[-1] "  style={{backgroundImage:`url(${landingimage})`}}>

      </div>
      <LandingHeader openaboutt={openaboutf}/>
      {openabout && <About/>}
    </div>
  );
}

export default Landing;
