import { useAuth } from '../context/UseAuth.jsx'
import { Navigate } from "react-router-dom";

function ProtectedUser({children,allowedRole}) {
  const {auth} = useAuth();
  if(auth.length===0){
    return <Navigate to="/login" replace />
  }

  if(!allowedRole && auth.role !== allowedRole){  
    return <Navigate to="/login" replace />
  }

  return children;
}

export default ProtectedUser