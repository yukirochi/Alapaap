import { Routes, Route } from "react-router-dom";
import Landing from "../pages/landing";


function Router() {
    return ( <div className="w-[100vw] h-[100vh]">
           <Routes>
               <Route path="/" element={<Landing/>} />
           </Routes>
    </div> );
}

export default Router;