import { useEffect, useState } from "react";
import Gameheader from "../headers/gameheader";
import Slider from "../components/slider";
import { useLocation } from "react-router-dom";
import Checking from "../components/checking";
import Failednotice from "../components/failednotice";
import Successnotice from "../components/successnotice";
import { useNavigate } from "react-router-dom";

function Game() {
  let [life, setlife] = useState(3);
  let [level, setlevel] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();
  let nickname = location.state?.nickname;
  let subject = location.state?.selected;
  let userinfo = location.state?.userinfo;
  let [currentquestion, setcurrentquestion] = useState(null);
  let [question, setquestion] = useState([]);
  let [choices, setchoices] = useState([]);
  let [correctAnswer, setcorrectAnswer] = useState("");
  let [useranswer, setuseranswer] = useState("");
  let [points, setpoints] = useState(0);
  let [answerstats, setanswerstats] = useState(false);
  let [opencheck, setopencheck] = useState(false);
  let [failed, setfailed] = useState(false);
  let [scores, setscores] = useState([]);
  let [finalscore, setfinalscore] = useState(0);
  let [success, setsuccess] = useState(false);
  let [selectedChoice, setSelectedChoice] = useState(null);
  let [loading, setloading] = useState(true);

  let calculatewin = () => {
    setfinalscore((points / 10) * 100);
  };

  let handledanswers = (val) => {
    setanswerstats(val);
    setscores((prev) => [...prev, val ? "win" : "lost"]);
  };

  let closethecheck = () => {
    setopencheck(false);
    setSelectedChoice(null);
  };

  useEffect(() => {
    let getquiz = async () => {
      setloading(true);
      try {
        let easy = await fetch(
          `https://the-trivia-api.com/api/questions?categories=${subject}&limit=3&difficulty=easy&types=multiple`
        );
        let medium = await fetch(
          `https://the-trivia-api.com/api/questions?categories=${subject}&limit=3&difficulty=medium&types=multiple`
        );
        let hard = await fetch(
          `https://the-trivia-api.com/api/questions?categories=${subject}&limit=4&difficulty=hard&types=multiple`
        );
        let diff = [easy, medium, hard];
        let infoarr = await Promise.all(diff.map((res) => res.json()));
        let questions = infoarr.flat();
        setquestion(questions);
      } catch (err) {
        console.error("Quiz fetch error:", err);
      } finally {
        setloading(false);
      }
    };
    if (subject) getquiz();
  }, [subject]);

  useEffect(() => {
    if (level > 0) {
      setcurrentquestion(question[level - 1]);
    }
  }, [level, question]);

  useEffect(() => {
    if (currentquestion) {
      const all = [...currentquestion.incorrectAnswers, currentquestion.correctAnswer];
      setchoices(all.sort(() => Math.random() - 0.5));
      setcorrectAnswer(currentquestion.correctAnswer);
    }
  }, [currentquestion]);

  const verifyanswer = () => {
    if (!useranswer) return;
    if (useranswer === correctAnswer) {
      setpoints(points + 1);
      setlevel(level + 1);
      setanswerstats(true);
      handledanswers(true);
    } else {
      setlife(life - 1);
      setlevel(level + 1);
      setanswerstats(false);
      handledanswers(false);
    }
  };

  const choiceLabels = ["A", "B", "C", "D"];

  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center flex-col gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-t-transparent animate-spin"
          style={{ borderColor: "rgba(108,99,255,0.3)", borderTopColor: "#6c63ff" }} />
        <p className="text-sm font-semibold tracking-wide" style={{ color: "var(--muted)" }}>
          Loading questions…
        </p>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col">
      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full pointer-events-none opacity-10"
        style={{ background: "radial-gradient(circle, #ff6583 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full pointer-events-none opacity-10"
        style={{ background: "radial-gradient(circle, #6c63ff 0%, transparent 70%)" }} />

      <Gameheader life={life} subject={subject} />

      {/* Progress slider */}
      <div className="w-full h-[8%] flex relative px-4">
        <Slider value={level} />
      </div>

      {/* Question area */}
      <div className="w-full flex-1 flex flex-col justify-center items-center gap-4 px-4 pb-2">

        {/* Question card */}
        <div className="w-full max-w-[520px] min-h-[80px] rounded-2xl p-5 flex items-center justify-center text-center fade-in"
          style={{
            background: "var(--glass)",
            border: "1.5px solid rgba(108,99,255,0.25)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)"
          }}>
          <p className="text-sm lg:text-base font-semibold leading-relaxed" style={{ color: "var(--text)" }}>
            {currentquestion ? currentquestion.question : "Loading…"}
          </p>
        </div>

        {/* Choices */}
        <div className="w-full max-w-[520px] flex flex-col gap-2.5 fade-in-delay">
          {choices.map((choice, i) => (
            <button
              key={i}
              onClick={() => {
                setSelectedChoice(i);
                setuseranswer(choice);
              }}
              className={`choice-card w-full px-4 py-3 text-left flex items-center gap-3 text-sm font-semibold
                ${selectedChoice === i ? "selected" : ""}`}
            >
              <span className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black flex-shrink-0 transition-all"
                style={{
                  background: selectedChoice === i ? "rgba(255,101,131,0.3)" : "rgba(108,99,255,0.15)",
                  border: selectedChoice === i ? "1.5px solid #ff6583" : "1.5px solid rgba(108,99,255,0.3)",
                  color: selectedChoice === i ? "#ff6583" : "#6c63ff"
                }}>
                {choiceLabels[i]}
              </span>
              <span className="flex-1 text-left" style={{ color: "var(--text)" }}>{choice}</span>
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col items-center gap-2 mt-1 fade-in-delay2">
          <button
            className={`px-8 py-2.5 text-sm font-bold tracking-[0.1em] rounded-full transition-all duration-200
              ${useranswer ? "btn-primary" : "btn-ghost opacity-50 cursor-not-allowed"}`}
            onClick={() => {
              if (useranswer) {
                verifyanswer();
                setopencheck(true);
              }
            }}
          >
            SUBMIT
          </button>
          <button
            className="text-xs py-1 px-3 rounded-full transition-all duration-200 hover:opacity-80"
            style={{ color: "var(--muted)", border: "1px solid rgba(255,255,255,0.08)" }}
            onClick={() => navigate("/lobby", { state: { username: nickname, userinfo } })}
          >
            ← Quit game
          </button>
        </div>
      </div>

      {opencheck && (
        <Checking
          answerstats={answerstats}
          points={points}
          closethecheck={closethecheck}
          setfailed={setfailed}
          life={life}
          calculatewin={calculatewin}
          setsuccess={setsuccess}
          level={level}
        />
      )}
      {failed && (
        <Failednotice
          setlife={setlife}
          setlevel={setlevel}
          setfailed={setfailed}
          setpoints={setpoints}
          scores={scores}
          setscores={setscores}
          finalscore={finalscore}
          userinfo={userinfo}
          nickname={nickname}
          subject={subject}
        />
      )}
      {success && (
        <Successnotice
          setlife={setlife}
          setlevel={setlevel}
          setfailed={setfailed}
          setpoints={setpoints}
          scores={scores}
          setscores={setscores}
          finalscore={finalscore}
          userinfo={userinfo}
          nickname={nickname}
          subject={subject}
        />
      )}
    </div>
  );
}

export default Game;
