import { useContext, createContext, useState } from "react";

const Authcontext = createContext()

export function AuthProvider({children}) {
    
    let [user, setuser] = useState(()=>{
       let userdata = localStorage.getItem("user")
       return userdata ? JSON.parse(userdata) : null;
    })

    const userlogin = (userdata) => {
        setuser(userdata)
        localStorage.setItem("user",JSON.stringify(userdata))
    }

    const logout = () => {
        setuser(null)       
        localStorage.removeItem("user")
    }
  
    return ( 
        <Authcontext.Provider value={{user, userlogin, logout}}>
         {children}
        </Authcontext.Provider>
     );
}

export function Uselogs () {
    return useContext(Authcontext)
} 


