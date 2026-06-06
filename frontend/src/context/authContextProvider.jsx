import { useState } from "react"
import { AuthContext } from "./authContext.js"


export const AuthProvider = ({children})=>{
    const [auth,setAuth] = useState(JSON.parse(localStorage.getItem('uber_auth')) || []);

    return (
    <AuthContext.Provider value={{auth,setAuth}}>
        {children}
    </AuthContext.Provider>
    )
}
