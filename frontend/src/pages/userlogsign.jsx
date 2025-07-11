import { useState } from "react";
import Loginuser from "../components/login";
import Signupuser from "../components/signup";
function Usersignlog({ log }) {
  return (
    <div className=" border-[1px] border-black border-solid w-[80%] h-[80%] ">
      {log && <Loginuser />}
      {!log && <Signupuser />}
    </div>
  );
}

export default Usersignlog;
