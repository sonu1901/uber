import { useContext } from "react"
import { AuthContext } from "./authContext.js"

export const useAuth = ()=>{
    const authContext = useContext(AuthContext);

    if(!authContext){
        console.log('Wrapp all element with Auth context provider');
        return;
    }

    return authContext;
}