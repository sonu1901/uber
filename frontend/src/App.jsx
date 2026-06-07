import { Route, Routes, useNavigate } from "react-router-dom"
import Start from "./pages/Start.jsx"
import UserLogin from "./auth/UserLogin.jsx"
import UserSignup from "./auth/UserSignup.jsx"
import CaptainLogin from "./auth/CaptainLogin.jsx"
import CaptainSignup from "./auth/CaptainSignup.jsx"
import toast from "react-hot-toast";
import axios from 'axios';
import { backendUrl } from "./main.jsx"
import Home from "./pages/Home.jsx"
import ProtectedUser from "./auth/ProtectedUser.jsx"
import { useAuth } from "./context/UseAuth.jsx"
import { useEffect, useRef } from "react"
import ProtectedCaptain from "./auth/ProtectedCaptain.jsx"


function App() {
  const navigate = useNavigate();
  const {auth,setAuth} = useAuth();
  const navigationRef = useRef(false);

  const handleLogin = async(email,password,role)=>{
    try {
      const {data} = await axios.post(`${backendUrl}api/auth/login`,{email,password,role});
      if(data.success){
        toast.success(data.message);
        setAuth(data.user);
        localStorage.setItem('uber_auth',JSON.stringify(data.user));
        localStorage.setItem('access_token',data.accessToken);
        localStorage.setItem('refresh_token',data.refreshToken);
      }else{
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed');
    }
  }

  useEffect(()=>{
    if(auth === null || !auth?.role){
      navigationRef.current = false;
    }else if(!navigationRef.current){
      navigationRef.current = true;
      if(auth.role === 'user'){
        navigate('/user-home');
      }else if(auth.role === 'captain'){
        navigate('/captain-home');
      }else{
        navigate('/')
      }
    }
  },[auth?.role, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/login" element={<UserLogin handleLogin={handleLogin} />} />
      <Route path="/signup" element={<UserSignup />} />
      <Route path="/captain-login" element={<CaptainLogin handleLogin={handleLogin} />} />
      <Route path="/captain-signup" element={<CaptainSignup />} />
      <Route path="/user-home" element={<ProtectedUser allowedRole={'user'}><Home /></ProtectedUser>} />
      <Route path="/captain-home" element={<ProtectedCaptain allowedRole={'captain'}><Home /></ProtectedCaptain>} />
    </Routes>
  )
}

export default App
