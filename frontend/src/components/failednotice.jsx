import { useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";

function Failednotice({
  setlevel,
  setlife,
  setfailed,
  setpoints,
  scores,
  setscores,
  finalscore,
  userinfo,
  nickname,
  subject,
}) {
  let { id } = useParams();
  const navigate = useNavigate();

  const savescore = async () => {
    try {
      if (nickname.toLowerCase() === "guest" || nickname === "" || nickname === null) {
        return;
      }
      let res = await fetch(`http://localhost:4001/api/game/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          score: finalscore,
          subject: subject,
        }),
      });
      if (!res.ok) throw new Error("network error");
      let data = await res.json();
      alert(data.msg);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1000] bg-[rgba(67,67,67,0.4)] flex items-center justify-center">
      <div
        className="fixed inset-0 z-50 grid place-content-center bg-black/50 p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modalTitle"
      >
        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
          <div className="flex items-start justify-between">
            <h2
              id="modalTitle"
              className="text-5xl font-bold  w-[100%] flex justify-center material-symbols-outlined "
            >
              <p className="text-red-900 ">sentiment_neutral</p>
            </h2>
          </div>

          <div className="mt-4">
            <p className="text-pretty text-gray-700 text-center">
              You got defeated and you failed to reach the alapaap
            </p>

            <label
              htmlFor="Confirm"
              className="mt-4 block w-[100%] text-center"
            >
              <span className="text-sm font-medium text-gray-700  ">
                <p>Youre status:</p>
                <p>Level : Win/Lost</p>
                {scores.map((score, index) => (
                  <p>
                    {index + 1}: {score}
                  </p>
                ))}
                <p> Score: {finalscore}%</p>
              </span>
            </label>
          </div>

          <footer className="mt-6 flex justify-center gap-2 ">
            <button
              type="button"
              className="rounded bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
              onClick={() => {
                navigate("/lobby", {
                  state: { username: nickname, userinfo: userinfo },
                });
                savescore();
              }}
            >
              Return
            </button>

            <button
              type="button"
              className="rounded bg-pinkish px-4 py-2 text-sm font-medium text-white transition-colors hover:opacity-50"
              onClick={() => {
                setlife(3);
                setlevel(1);
                setpoints(0);
                setfailed(false);
                setscores([]);
                savescore();
              }}
            >
              Try Again
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Failednotice;
