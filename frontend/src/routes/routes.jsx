import { Routes, Route } from "react-router-dom";
import Landing from "../pages/landing";
import Lobby from "../pages/lobby";


function Router() {
    return ( <div className="w-[100vw] h-[100vh]">
           <Routes>
               <Route path="/" element={<Landing/>} />
               <Route path="/lobby" element={<Lobby/>}/>
           </Routes>
    </div> );
}

export default Router;