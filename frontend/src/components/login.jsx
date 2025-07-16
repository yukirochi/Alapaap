import { useState } from "react";
import { Onlogin } from "../api/auth";

function Loginuser() {
  let [wrongstatus, setwrongstats] = useState(false);
  let [username, setusername] = useState("");
  let [password, setpassword] = useState("");
  let [showpass, setshowpass] = useState(false);

  return (
    <div className="w-[100%] h-[60%] mt-[10%]">
      <form
        className="w-[100%] h-[100%]  max-sm:relative max-sm:z-30"
        onSubmit={(e)=> Onlogin(e, username, password, setwrongstats)}
      >
        <div className="h-[80px]">
          <p className="text-[20px] mb-[5px]">
            <span className="text-[#ff6583]">U</span>sern
            <span className="text-[#6c63ff]">a</span>me
          </p>
          <input
            type="text"
            className="w-[100%] h-[30px] rounded-[6px] border-[1px] border-solid border-black md:h-[40px] outline-none text-center"
            onChange={(e) => {
              setusername(e.target.value);
              setwrongstats(false);
            }}
            required
          />
          <p className="w-[100%] text-center text-[13px] text-[#611717]">
            {wrongstatus && "Wrong Username"}
          </p>
        </div>
        <div className="h-[90px] relative">
          <p className="text-[20px] mb-[5px]">
            Pas
            <span className="text-[#ff6583]">s</span>wo
            <span className="text-[#6c63ff]">r</span>d
          </p>
          <div className="absolute  h-[30px] md:h-[40px] flex justify-center items-center right-0 mr-[2%] cursor-pointer">
            <i
              className="material-symbols-outlined"
              onClick={() => setshowpass((prev) => !prev)}
            >
              {!showpass ? "visibility_off" : "visibility"}
            </i>
          </div>
          <input
            type={showpass ? "text" : "password"}
            className="w-[100%] h-[30px] rounded-[6px] border-[1px] border-solid border-black bg-transparent md:h-[40px]  outline-none text-center"
            onChange={(e) => {
              setpassword(e.target.value);
              setwrongstats(false);
            }}
            required
          />
          <p className="w-[100%] text-center text-[13px] text-[#611717]">
            {wrongstatus && "OR Password"}
          </p>
        </div>
        <div className="w-[100%] h-[20%] flex justify-center items-center">
          <button className="w-[40%] h-[50%] lg:text-[20px] bg-[#434343] flex justify-center items-center text-[#ff6583] rounded-[5px]">
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
}

export default Loginuser;
