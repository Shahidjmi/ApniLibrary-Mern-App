import myContext from "./context";
import { useState } from "react";



const AuthProvider = ({children})=>{
    const initialAuthUser = localStorage.getItem("User")
    const [authUser, setAuthUser] = useState(
        initialAuthUser? JSON.parse(initialAuthUser) : null
    );
    return (
        <myContext.Provider value={{authUser, setAuthUser }}>
            {children}
        </myContext.Provider>
    )
}

export default AuthProvider;
