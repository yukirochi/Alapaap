import { useEffect, useRef, useState } from "react";
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
  const navigate = useNavigate
  let nickname = location.state?.nickname;
  let subject = location.state?.selected;
  let userinfo = location.state?.userinfo;
  let [currentquestion, setcurrentquestion] = useState(null);
  let [question, setquestion] = useState([]);
  let [choices, setchoices] = useState([]);
  let [correctAnswer, setcorrectAnswer] = useState("");
  let [useranswer, setuseranswer] = useState("");
  let [points, setpoints] = useState(0);
  let [answerstats, setanswerstats] = useState(false)
  let [opencheck, setopencheck] = useState(false)
  let [failed, setfailed] = useState(false)
  let [scores, setscores] = useState([])
  let [finalscore, setfinalscore] = useState(0)
  let [success, setsuccess] = useState(false)
 
  
  
  
  let calculatewin = () => {
    setfinalscore( (points / 10) * 100)
  }
  
  let handledanswers  = (val) => {
    setanswerstats(val)
    setscores(prev => [...prev, val ? "win" : "lost"]);
  }
  
  let closethecheck = () => setopencheck(false);
  useEffect(() => {
    let getquiz = async () => {
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
      console.log(questions);
      setquestion(questions);
    };
    getquiz();
  }, [subject]);

  useEffect(() => {
    if (level > 0) {
      setcurrentquestion(question[level - 1]);
    }
  }, [level, question]);

  useEffect(() => {
    if (currentquestion) {
      const all = [
        ...currentquestion.incorrectAnswers,
        currentquestion.correctAnswer,
      ];
      setchoices(all.sort(() => Math.random() - 0.5));
      setcorrectAnswer(currentquestion.correctAnswer);
    }
  }, [currentquestion]);

  const verifyanswer = () => {
    if (useranswer === correctAnswer) {
      setpoints(points + 1);
      setlevel(level + 1);
      selected("");
      setanswerstats(true)
      handledanswers(true)
    } else {
      setlife(life - 1);
      selected("");
      setlevel(level + 1);
      setanswerstats(false)
      handledanswers(false)
    }
  };

  const selected = (num) => {
    document.querySelectorAll(".choice").forEach((elm) => {
      elm.classList.remove(
        "shadow-lg",
        "bg-pinkish",
        "border-pinkish",
        "text-white"
      );
    });

    if (num) {
      document
        .getElementsByClassName(`${num}`)[0]
        .classList.add(
          "shadow-lg",
          "bg-pinkish",
          "border-pinkish",
          "text-white"
        );
    }
  };
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden">
      <Gameheader life={life} subject={subject} />
      <div className="w-[100%] h-[5%]  flex relative">
        <Slider value={level} />
      </div>

      <div className=" w-[100%] h-[70%] flex flex-col justify-center items-center">
        <div className="w-[80%] h-[40%] border-[1px] rounded-sm max-w-[500px] flex justify-center text-center items-center overflow-y-scroll">
          <p className="w-[80%]">
            {currentquestion && currentquestion.question}
          </p>
        </div>
        <div className="w-[80%] h-[5%] flex justify-center items-center text-[20px] mt-[10px]">
          00:00
        </div>
        <div className="w-[80%] h-[50%] flex flex-col items-center justify-center gap-[5%]">
          <div
            className="picka choice max-sm:text-[12px] w-[100%] h-[15%] max-w-[500px] bg-[white] text-[#ff6583] px-5 py-2 text-sm shadow-sm hover:shadow-lg  active:shadow-lg  flex justify-center items-center font-medium tracking-wider border-2 border-[#ff6583] active:bg-[#ff6583] active:border-[#ff6583] active:text-white hover:bg-[#ff6583] hover:border-[#ff6583] hover:text-white  rounded-sm transition ease-in duration-150"
            onClick={() => {
              selected("picka");
              setuseranswer(choices[0]);
            }}
          >
            <p className="w-[90%] ">A. {currentquestion && choices[0]}.</p>
          </div>

          <div
            className="pickb choice w-[100%] h-[15%]  max-sm:text-[12px] max-w-[500px] bg-[white]  text-[#ff6583] px-5 py-2 text-sm shadow-sm hover:shadow-lg  active:shadow-lg  flex justify-center items-center font-medium tracking-wider border-2 border-[#ff6583] active:bg-[#ff6583] active:border-[#ff6583] active:text-white hover:bg-[#ff6583] hover:border-[#ff6583] hover:text-white  rounded-sm transition ease-in duration-150"
            onClick={() => {
              selected("pickb");
              setuseranswer(choices[1]);
            }}
          >
            <p className="w-[90%]  ">B. {currentquestion && choices[1]}.</p>
          </div>
          <div
            className="pickc choice w-[100%] h-[15%] max-sm:text-[12px]  max-w-[500px] bg-[white] text-[#ff6583] px-5 py-2 text-sm shadow-sm hover:shadow-lg  active:shadow-lg  flex justify-center items-center font-medium tracking-wider border-2 border-[#ff6583] hover:bg-[#ff6583] active:bg-[#ff6583] active:border-[#ff6583] active:text-white hover:border-[#ff6583] hover:text-white  rounded-sm transition ease-in duration-150"
            onClick={() => {
              selected("pickc");
              setuseranswer(choices[2]);
            }}
          >
            <p className="w-[90%]  ">C. {currentquestion && choices[2]}.</p>
          </div>
          <div
            className="pickd choice w-[100%] h-[15%] max-sm:text-[12px] max-w-[500px] bg-[white] text-[#ff6583] px-5 py-2 text-sm shadow-sm hover:shadow-lg  active:shadow-lg  flex justify-center items-center font-medium tracking-wider border-2 border-[#ff6583] hover:bg-[#ff6583] active:bg-[#ff6583] active:border-[#ff6583] active:text-white hover:border-[#ff6583] hover:text-white  rounded-sm transition ease-in duration-150"
            onClick={() => {
              selected("pickd");
              setuseranswer(choices[3]);
            }}
          >
            <p className="w-[90%]  ">D. {currentquestion && choices[3]}.</p>
          </div>
        </div>
        <div className="w-[100%] h-[5%] flex justify-center items-center flex-col">
          <button
            className="bg-[#6c63ff] hover:bg-transparent px-5 py-2 text-sm shadow-sm hover:shadow-lg  font-medium tracking-wider border-2 border-[#6c63ff] hover:border-[#6c63ff] text-white hover:text-[#6c63ff] rounded-full transition ease-in duration-300"
            onClick={() => {
              verifyanswer()
              setopencheck(true)
            }}
          >
            SUBMIT
          </button>
          <p className="text-[15px] -mb-[10px] cursor-pointer border-b-black border-b-[1px] hover:opacity-50">
            Quit the game
          </p>
        </div>
      </div>

        {opencheck && <Checking answerstats={answerstats} points={points} closethecheck={closethecheck} setfailed={setfailed} life={life} calculatewin = {calculatewin} setsuccess={setsuccess} level = {level}/>} 
        {failed && <Failednotice setlife={setlife} setlevel={setlevel} setfailed={setfailed} setpoints={setpoints} scores = {scores} setscores = {setscores} finalscore = {finalscore} userinfo={userinfo} nickname={nickname}/>}
        {success && <Successnotice setlife={setlife} setlevel={setlevel} setfailed={setfailed} setpoints={setpoints} scores = {scores} setscores = {setscores} finalscore = {finalscore} userinfo={userinfo} nickname={nickname}/>}
    </div>
  );
}

export default Game;
