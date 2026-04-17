import { useState } from "react";

const API_URL = process.env.REACT_APP_API_URL || "https://alapaap-rsmj.onrender.com";

function Changepass({ userinfo, setchangetab }) {
  let [CurrentPass, setCurrentPass] = useState("");
  let [Newpass, setNewpass] = useState("");
  let [ConfirmNewpass, setConfirmNewpass] = useState("");
  let [errormessage, seterrormessage] = useState("");
  let [success, setsuccess] = useState(false);

  const verifyinfo = async (CurrentPass, Newpass, ConfirmNewpass) => {
    seterrormessage("");
    if (CurrentPass !== userinfo.password) {
      seterrormessage("Current password is incorrect.");
      return;
    }
    if (Newpass === "") {
      seterrormessage("New password cannot be empty.");
      return;
    }
    if (Newpass !== ConfirmNewpass) {
      seterrormessage("New passwords do not match.");
      return;
    }

    try {
      let res = await fetch(`${API_URL}/api/profile/${userinfo._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: Newpass }),
      });
      if (!res.ok) throw new Error("Network Error");
      let data = await res.json();
      setsuccess(true);
    } catch (error) {
      seterrormessage("An error occurred. Please try again.");
      console.error(error);
    }
  };

  return (
    <div
      className="modal-overlay"
      onClick={() => setchangetab(false)}
    >
      <div
        className="glass w-[90%] max-w-[380px] p-7 flex flex-col gap-5 fade-in"
        style={{ background: "var(--glass)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="text-center">
          <div className="w-14 h-14 rounded-full flex items-center justify-center text-3xl mx-auto mb-3"
            style={{ background: "rgba(108,99,255,0.15)", border: "1.5px solid rgba(108,99,255,0.35)", color: "#6c63ff" }}>
            <span className="material-symbols-outlined text-[30px]">key</span>
          </div>
          <p className="text-lg font-black" style={{ color: "var(--text)" }}>Change Password</p>
          <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>
            Contact support if you need further help
          </p>
        </div>

        {success ? (
          <div className="text-center py-4">
            <span className="material-symbols-outlined text-5xl mb-3 text-green-400">check_circle</span>
            <p className="font-bold" style={{ color: "#4ade80" }}>Password Changed!</p>
            <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>Your password has been updated successfully.</p>
            <button className="btn-primary mt-5 px-8 py-2.5 text-sm font-bold rounded-full"
              onClick={() => setchangetab(false)}>
              Done
            </button>
          </div>
        ) : (
          <>
            {/* Inputs */}
            <div className="flex flex-col gap-3">
              {[
                { label: "Current Password", value: CurrentPass, setter: setCurrentPass, placeholder: "Enter current password", type: "password" },
                { label: "New Password", value: Newpass, setter: setNewpass, placeholder: "New password", type: "password" },
                { label: "Confirm New Password", value: ConfirmNewpass, setter: setConfirmNewpass, placeholder: "Confirm new password", type: "password" },
              ].map((field) => (
                <div key={field.label} className="flex flex-col gap-1">
                  <label className="text-xs font-bold tracking-wide" style={{ color: "var(--muted)" }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={field.value}
                    onChange={(e) => field.setter(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl text-sm font-medium outline-none transition-all duration-200"
                    style={{
                      background: "rgba(108,99,255,0.06)",
                      border: "1.5px solid rgba(108,99,255,0.2)",
                      color: "var(--text)",
                    }}
                    onFocus={(e) => e.target.style.borderColor = "rgba(108,99,255,0.6)"}
                    onBlur={(e) => e.target.style.borderColor = "rgba(108,99,255,0.2)"}
                  />
                </div>
              ))}

              {errormessage && (
                <p className="text-xs font-semibold" style={{ color: "#f87171" }}>
                  ⚠ {errormessage}
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button className="btn-ghost flex-1 py-2.5 text-sm font-bold rounded-full"
                onClick={() => setchangetab(false)}>
                Cancel
              </button>
              <button
                className="btn-primary flex-1 py-2.5 text-sm font-bold rounded-full"
                onClick={() => verifyinfo(CurrentPass, Newpass, ConfirmNewpass)}
              >
                Update
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Changepass;
