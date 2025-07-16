import { useState } from "react";
import { Onsignup } from "../api/auth";

function Signupuser() {
  let [wrongstatus, setwrongstats] = useState("");
  let [verifyusername, setverifyusername] = useState(false);
  let [verifyemail, setverifyemail] = useState(false);
  let [username, setusername] = useState("");
  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");
  let [cpassword, setcpassword] = useState("");
  let [isdisable, setdisable] = useState(true);
  let [showpass, setshowpass] = useState(false);
  let [showcpass, setshowcpass] = useState(false);

  const verifypass = (val, val2) => {
    if (val2 !== val) {
      setwrongstats("passwordnomatch");
    } else {
      setwrongstats("");
      setdisable(false);
    }
  };
  return (
    <div className="w-[100%] h-[60%] ">
      <form
        className="w-[100%] h-[100%]  max-sm:relative max-sm:z-30"
        onSubmit={(e) =>
          Onsignup(
            e,
            username,
            email,
            password,
            setverifyemail,
            setverifyusername,
          )
        }
      >
        <div className="h-[75px]">
          <p className="text-[20px] mb-[5px]">
            <span className="text-[#ff6583]">U</span>sern
            <span className="text-[#6c63ff]">a</span>me
          </p>
          <input
            type="text"
            className="w-[100%] h-[30px] rounded-[6px] border-[1px] border-solid border-black md:h-[40px] outline-none text-center"
            onChange={(e) => {
              setverifyusername(false);
              setusername(e.target.value);
            }}
            required
          />
          <p className="w-[100%] text-center text-[13px] text-[#611717]">
            {verifyusername && "Username is already taken"}
          </p>
        </div>
        <div className="h-[75px]">
          <p className="text-[20px] mb-[5px]">
            E<span className="text-[#6c63ff]">m</span>ail
          </p>
          <input
            type="email"
            className="w-[100%] h-[30px] rounded-[6px] border-[1px] border-solid border-black md:h-[40px]  outline-none text-center"
            onChange={(e) => {
              setemail(e.target.value);
              setverifyemail(false);
            }}
            required
          />
          <p className="w-[100%] text-center text-[13px] text-[#611717]">
            {verifyemail && "Email is already taken"}
          </p>
        </div>
        <div className="h-[70px] relative">
          <p className="text-[20px] mb-[5px]">
            Pas<span className="text-[#ff6583]">s</span>wo
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
            className="w-[100%] h-[30px] rounded-[6px] border-[1px] border-solid border-black md:h-[40px] outline-none text-center"
            required
            onChange={(e) => {
              const val = e.target.value;
              setpassword(val);
              verifypass(val, cpassword);
            }}
          />
        </div>
        <div className="h-[90px] relative">
          <p className="text-[20px] mb-[5px]">
            <span className="text-[#6c63ff]">C</span>onfirm Pas
            <span className="text-[#ff6583]">s</span>wo
            <span className="text-[#6c63ff]">r</span>d
          </p>
          <div className="absolute  h-[30px] md:h-[40px] flex justify-center items-center right-0 mr-[2%] cursor-pointer">
            <i
              className="material-symbols-outlined"
              onClick={() => setshowcpass((prev) => !prev)}
            >
              {!showcpass ? "visibility_off" : "visibility"}
            </i>
          </div>
          <input
            type={showcpass ? "text" : "password"}
            className="w-[100%] h-[30px] rounded-[6px] border-[1px] border-solid border-black bg-transparent md:h-[40px]  outline-none text-center"
            required
            onChange={(e) => {
              const val2 = e.target.value;
              setcpassword(val2);
              verifypass(password, val2);
            }}
          />

          <p className="w-[100%] text-center text-[13px] text-[#611717]">
            {wrongstatus === "passwordnomatch" && "Password dont match"}
          </p>
        </div>
        <div className="w-[100%] h-[20%] flex justify-center items-center">
          <button
            className="w-[40%] h-[50%] lg:text-[20px] bg-[#434343] flex justify-center items-center text-[#6c63ff] rounded-[5px]"
            disabled={isdisable}
          >
            JOIN
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signupuser;
