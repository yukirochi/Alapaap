import { Routes, Route } from "react-router-dom";
import Landing from "../pages/landing";
import Lobby from "../pages/lobby";
import Game from "../pages/game";


function Router() {
    return ( <div className="w-[100vw] h-[100vh]">
           <Routes>
               <Route path="/" element={<Landing/>} />
               <Route path="/lobby" element={<Lobby/>}/>
               <Route path="/game" element={<Game/>}/>
           </Routes>
    </div> );
}

export default Router;