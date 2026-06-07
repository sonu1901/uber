import { useAuth } from '../context/UseAuth.jsx'
import { Navigate } from 'react-router-dom';

function ProtectedCaptain({children,allowedRole}) {
  const {auth} = useAuth();

  if(!auth){
    return <Navigate to="/captain-login" replace />
  }

  if(!allowedRole && auth.role !== allowedRole){     
    return <Navigate to="/captain-login" replace />
  }

  return children;
}

export default ProtectedCaptain
