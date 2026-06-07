import { useState, useEffect } from "react"
import { AuthContext } from "./authContext.js"


export const AuthProvider = ({children})=>{
    const [auth,setAuth] = useState(null);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(()=>{
        const storedAuth = localStorage.getItem('uber_auth');
        setAuth(storedAuth ? JSON.parse(storedAuth) : null);
        setIsInitialized(true);
    },[]);

    useEffect(()=>{
        if(auth !== null){
            localStorage.setItem('uber_auth', JSON.stringify(auth));
        }
    },[auth]);

    if(!isInitialized) return null;

    return (
    <AuthContext.Provider value={{auth,setAuth}}>
        {children}
    </AuthContext.Provider>
    )
}
