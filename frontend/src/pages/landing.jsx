import LandingHeader from "../headers/landingheader";
import landingimage from "../assets/landing-image.svg";
import { useState } from "react";
import About from "../components/about";
import Usersignlog from "./userlogsign";
import NoticeSign from "../components/noticesign";


function Landing() {
  let [openabout, setopenabout] = useState(false);
  let [openview, setopenview] = useState("image");
  let [notice, setnotice] = useState(false)

  const openaboutf = () => setopenabout(true);
  const closeaboutf = () => setopenabout(false);
  const openlog = () => setopenview("login");
  const opensign = () => setopenview("signup");
  const opennotice = () => setnotice(true)
  const closennotice = ()=> setnotice(false)

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
      {openview === "image" && (
        <div
          className=" h-[80%] w-[140%]  bg-center bg-contain bg-no-repeat scale-x-[-1] lg:w-[70%] lg:h-[70%]"
          style={{ backgroundImage: `url(${landingimage})` }}
        ></div>
      )}
      {openview === "login" && <Usersignlog log={true}/>}
      {openview === "signup" && <Usersignlog log={false} />}
      <LandingHeader
        openaboutt={openaboutf}
        openlogin={openlog}
        opensign={opensign}
        opennotice={opennotice}
      />
      {openabout && <About closeabout={closeaboutf} />}
      {notice && <NoticeSign closennotice={closennotice} opensign={opensign} />}
    </div>
  );
}

export default Landing;
