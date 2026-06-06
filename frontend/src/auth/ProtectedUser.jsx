import { useAuth } from '../context/UseAuth.jsx'
import { Navigation } from 'react-router-dom';

function ProtectedUser({children,allowedRole}) {
  const {auth} = useAuth();

  if(!auth){
    return <Navigation to="/login" replace />
  }

  if(!allowedRole && auth.role !== allowedRole){   
    return <Navigation to="/login" replace />
  }

  return children;
}

export default ProtectedUser