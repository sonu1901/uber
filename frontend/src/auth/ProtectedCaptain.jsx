import { useAuth } from '../context/UseAuth.jsx'
import { Navigation } from 'react-router-dom';

function ProtectedCaptain({children,allowedRole}) {
  const {auth} = useAuth();

  if(!auth){
    return <Navigation to="/captain-login" replace />
  }

  if(!allowedRole && auth.role !== allowedRole){     
    return <Navigation to="/captain-login" replace />
  }

  return children;
}

export default ProtectedCaptain
