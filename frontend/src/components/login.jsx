import { useState } from "react";
import { Onlogin } from "../api/auth";
import { useNavigate } from "react-router-dom";

function Loginuser() {
  let [wrongstatus, setwrongstats] = useState(false);
  let [username, setusername] = useState("");
  let [password, setpassword] = useState("");
  let [showpass, setshowpass] = useState(false);
  let [loading, setloading] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    setloading(true);
    await Onlogin(e, username, password, setwrongstats, navigate);
    setloading(false);
  };

  const inputStyle = {
    background: "rgba(108,99,255,0.06)",
    border: "1.5px solid rgba(108,99,255,0.2)",
    color: "var(--text)",
    borderRadius: "12px",
    padding: "10px 14px",
    width: "100%",
    outline: "none",
    fontSize: "14px",
    fontWeight: "500",
    transition: "border-color 0.2s ease",
  };

  return (
    <div className="w-full flex flex-col pt-6 px-2">
      <div className="text-center mb-6 fade-in">
        <p className="logo-text text-4xl mb-2 select-none">
          <span style={{ color: "#6c63ff" }}>A</span>L
          <span style={{ color: "#6c63ff" }}>A</span>P
          <span style={{ color: "#ff6583" }}>A</span>
          <span style={{ color: "#6c63ff" }}>A</span>P
        </p>
        <p className="text-xs font-semibold tracking-[0.2em] uppercase mt-1" style={{ color: "var(--muted)" }}>
          Sign in to your account
        </p>
      </div>

      <form className="flex flex-col gap-4 fade-in-delay" onSubmit={handleSubmit}>
        {/* Username */}
        <div>
          <label className="text-xs font-bold tracking-wide block mb-1.5" style={{ color: "var(--muted)" }}>
            Username
          </label>
          <input
            type="text"
            style={inputStyle}
            placeholder="Enter username"
            onChange={(e) => { setusername(e.target.value); setwrongstats(false); }}
            onFocus={(e) => e.target.style.borderColor = "rgba(108,99,255,0.6)"}
            onBlur={(e) => e.target.style.borderColor = "rgba(108,99,255,0.2)"}
            required
          />
          {wrongstatus && (
            <p className="text-xs mt-1" style={{ color: "#f87171" }}>⚠ Wrong username or password</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="text-xs font-bold tracking-wide block mb-1.5" style={{ color: "var(--muted)" }}>
            Password
          </label>
          <div className="relative">
            <input
              type={showpass ? "text" : "password"}
              style={{ ...inputStyle, paddingRight: "42px" }}
              placeholder="Enter password"
              onChange={(e) => { setpassword(e.target.value); setwrongstats(false); }}
              onFocus={(e) => e.target.style.borderColor = "rgba(108,99,255,0.6)"}
              onBlur={(e) => e.target.style.borderColor = "rgba(108,99,255,0.2)"}
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-sm"
              style={{ color: "var(--muted)", background: "none", border: "none" }}
              onClick={() => setshowpass(p => !p)}
            >
              <span className="material-symbols-outlined text-[18px]">
                {showpass ? "visibility_off" : "visibility"}
              </span>
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full py-3 text-sm font-bold tracking-[0.1em] rounded-full mt-2"
        >
          {loading ? "Signing in…" : "LOGIN"}
        </button>
      </form>
    </div>
  );
}

export default Loginuser;
