import { useState } from "react";
function Changepass({ userinfo, setchangetab }) {
  let [CurrentPass, setCurrentPass] = useState("");
  let [Newpass, setNewpass] = useState("");
  let [ConfirmNewpass, setConfirmNewpass] = useState("");
  let [errormessage, seterrormessage] = useState("");

  const verifyinfo = async (CurrentPass, Newpass, ConfirmNewpass) => {
    if (CurrentPass !== userinfo.password) {
      alert("Current password is Wrong");
      seterrormessage("Current password is Wrong");
      return;
    }

    if (Newpass !== ConfirmNewpass) {
      alert("New password dont match");
      seterrormessage("New password dont match");
      return;
    }

    if (Newpass === "") {
      alert("cannot procced with empty password");
      seterrormessage("cannot procced with empty password");
      return;
    }

    try {
      let res = await fetch(
        `http://localhost:4001/api/profile/${userinfo._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: Newpass,
          }),
        }
      );

      if (!res.ok) throw new Error("Network Error");
      let data = await res.json();
      alert(data.msg);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      className="w-[100vw] h-[100vh] overflow-hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1000] bg-[rgba(67,67,67,0.4)] flex items-center justify-center"
      onClick={() => {
        setchangetab(false);
      }}
    >
      <div class="relative py-3 sm:max-w-xs sm:mx-auto">
        <div class="min-h-96 px-8 py-6 mt-4 text-left bg-white dark:bg-gray-900 rounded-xl shadow-lg"
        onClick={(e)=>{
            e.stopPropagation()
        }}>
          <div class="flex flex-col justify-center items-center h-full select-none">
            <div class="flex flex-col items-center justify-center gap-2 mb-8">
              <div className="w-8 h-8  material-symbols-outlined text-[30px]">
                change_circle
              </div>
              <p class="m-0 text-[16px] font-semibold dark:text-white">
                Change Password
              </p>
              <span class="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">
                You can contact customer Support if you need further assistance
              </span>
            </div>
            <div class="w-full flex flex-col gap-2">
              <label class="font-semibold text-xs text-gray-400">
                Current Password
              </label>
              <input
                placeholder="Username"
                class="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
                onChange={(e) => {
                  setCurrentPass(e.target.value);
                }}
              />
            </div>
          </div>
          <div class="w-full flex flex-col gap-2">
            <label class="font-semibold text-xs text-gray-400">Password</label>
            <input
              placeholder="••••••••"
              class="border rounded-lg px-3 py-2 mb-2 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
              type="password"
              onChange={(e) => {
                setNewpass(e.target.value);
              }}
            />
            <label class="font-semibold text-xs text-gray-400">
              Confirm Password
            </label>
            <input
              placeholder="••••••••"
              class="border rounded-lg px-3 py-2 mb-1 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
              type="password"
              onChange={(e) => {
                setConfirmNewpass(e.target.value);
              }}
            />
            <p className="font-semibold text-xs text-red-800 mb-1">
              {errormessage}
            </p>
          </div>
          <div>
            <button
              className="py-1 px-8 bg-pinkish hover:bg-blue-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none"
              onClick={() => verifyinfo(CurrentPass, Newpass, ConfirmNewpass)}
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Changepass;
