import Loginuser from "../components/login";
import Signupuser from "../components/signup";

function Usersignlog({ log }) {
  return (
    <div className="w-full relative z-10">
      <div className="glass w-full rounded-2xl p-6" style={{ background: "var(--glass)", border: "1px solid rgba(108,99,255,0.2)" }}>
        {log ? <Loginuser /> : <Signupuser />}
      </div>
    </div>
  );
}

export default Usersignlog;
