import { useState } from "react";
import { Onsignup } from "../api/auth";
import { useNavigate } from "react-router-dom";

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
  let [loading, setloading] = useState(false);
  let navigate = useNavigate();

  const verifypass = (val, val2) => {
    if (val2 !== val) {
      setwrongstats("passwordnomatch");
      setdisable(true);
    } else {
      setwrongstats("");
      setdisable(false);
    }
  };

  const handleSubmit = async (e) => {
    setloading(true);
    await Onsignup(e, username, email, password, setverifyemail, setverifyusername, navigate);
    setloading(false);
  };

  const inputStyle = {
    background: "rgba(108,99,255,0.06)",
    border: "1.5px solid rgba(108,99,255,0.2)",
    color: "var(--text)",
    borderRadius: "12px",
    padding: "9px 14px",
    width: "100%",
    outline: "none",
    fontSize: "13px",
    fontWeight: "500",
    transition: "border-color 0.2s ease",
  };

  return (
    <div className="w-full flex flex-col pt-4 px-2">
      <div className="text-center mb-4 fade-in">
        <p className="logo-text text-3xl mb-1 select-none">
          <span style={{ color: "#6c63ff" }}>A</span>L
          <span style={{ color: "#6c63ff" }}>A</span>P
          <span style={{ color: "#ff6583" }}>A</span>
          <span style={{ color: "#6c63ff" }}>A</span>P
        </p>
        <p className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--muted)" }}>
          Create an account
        </p>
      </div>

      <form className="flex flex-col gap-3 fade-in-delay" onSubmit={handleSubmit}>
        {/* Username */}
        <div>
          <label className="text-xs font-bold tracking-wide block mb-1" style={{ color: "var(--muted)" }}>
            Username
          </label>
          <input
            type="text" style={inputStyle} placeholder="Choose a username"
            onChange={(e) => { setverifyusername(false); setusername(e.target.value); }}
            onFocus={(e) => e.target.style.borderColor = "rgba(108,99,255,0.6)"}
            onBlur={(e) => e.target.style.borderColor = "rgba(108,99,255,0.2)"}
            required
          />
          {verifyusername && <p className="text-xs mt-0.5" style={{ color: "#f87171" }}>⚠ Username already taken</p>}
        </div>

        {/* Email */}
        <div>
          <label className="text-xs font-bold tracking-wide block mb-1" style={{ color: "var(--muted)" }}>
            Email
          </label>
          <input
            type="email" style={inputStyle} placeholder="your@email.com"
            onChange={(e) => { setemail(e.target.value); setverifyemail(false); }}
            onFocus={(e) => e.target.style.borderColor = "rgba(108,99,255,0.6)"}
            onBlur={(e) => e.target.style.borderColor = "rgba(108,99,255,0.2)"}
            required
          />
          {verifyemail && <p className="text-xs mt-0.5" style={{ color: "#f87171" }}>⚠ Email already in use</p>}
        </div>

        {/* Password */}
        <div>
          <label className="text-xs font-bold tracking-wide block mb-1" style={{ color: "var(--muted)" }}>
            Password
          </label>
          <div className="relative">
            <input
              type={showpass ? "text" : "password"}
              style={{ ...inputStyle, paddingRight: "42px" }}
              placeholder="Create password"
              onChange={(e) => { const v = e.target.value; setpassword(v); verifypass(v, cpassword); }}
              onFocus={(e) => e.target.style.borderColor = "rgba(108,99,255,0.6)"}
              onBlur={(e) => e.target.style.borderColor = "rgba(108,99,255,0.2)"}
              required
            />
            <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-sm"
              style={{ color: "var(--muted)", background: "none", border: "none" }}
              onClick={() => setshowpass(p => !p)}>
              <span className="material-symbols-outlined text-[18px]">
                {showpass ? "visibility_off" : "visibility"}
              </span>
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="text-xs font-bold tracking-wide block mb-1" style={{ color: "var(--muted)" }}>
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showcpass ? "text" : "password"}
              style={{
                ...inputStyle, paddingRight: "42px",
                borderColor: wrongstatus === "passwordnomatch" ? "rgba(248,113,113,0.5)" : "rgba(108,99,255,0.2)"
              }}
              placeholder="Repeat password"
              onChange={(e) => { const v = e.target.value; setcpassword(v); verifypass(password, v); }}
              onFocus={(e) => e.target.style.borderColor = wrongstatus === "passwordnomatch" ? "rgba(248,113,113,0.5)" : "rgba(108,99,255,0.6)"}
              onBlur={(e) => e.target.style.borderColor = wrongstatus === "passwordnomatch" ? "rgba(248,113,113,0.5)" : "rgba(108,99,255,0.2)"}
              required
            />
            <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-sm"
              style={{ color: "var(--muted)", background: "none", border: "none" }}
              onClick={() => setshowcpass(p => !p)}>
              <span className="material-symbols-outlined text-[18px]">
                {showcpass ? "visibility_off" : "visibility"}
              </span>
            </button>
          </div>
          {wrongstatus === "passwordnomatch" && (
            <p className="text-xs mt-0.5" style={{ color: "#f87171" }}>⚠ Passwords don't match</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isdisable || loading}
          className="w-full py-3 text-sm font-bold tracking-[0.12em] rounded-full mt-1 transition-all duration-200"
          style={{
            background: isdisable ? "rgba(108,99,255,0.2)" : "linear-gradient(135deg, #6c63ff, #8b5cf6)",
            color: isdisable ? "var(--muted)" : "white",
            border: "none",
            boxShadow: isdisable ? "none" : "0 4px 20px rgba(108,99,255,0.4)",
            cursor: isdisable ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Creating account…" : "JOIN"}
        </button>
      </form>
    </div>
  );
}

export default Signupuser;
