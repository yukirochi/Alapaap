import { useState } from "react";
import Loginuser from "../components/login";
import Signupuser from "../components/signup";
function Usersignlog({ log }) {
  return (
    <div className=" w-[70%] h-[80%] max-w-[400px] lg:relative lg:left-[50%] lg:-translate-x-1/2">
      {log && <Loginuser />}
      {!log && <Signupuser />}
    </div>
  );
}

export default Usersignlog;
