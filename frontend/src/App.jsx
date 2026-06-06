import { Route, Routes, useNavigate } from "react-router-dom"
import Start from "./pages/Start.jsx"
import UserLogin from "./auth/UserLogin.jsx"
import UserSignup from "./auth/UserSignup.jsx"
import CaptainLogin from "./auth/CaptainLogin.jsx"
import CaptainSignup from "./auth/CaptainSignup.jsx"
import toast from "react-hot-toast";
import axios from 'axios';
import { backendUrl } from "./main.jsx"


function App() {
  const navigate = useNavigate();
  const handleLogin = async(email,password,role)=>{
    try {
      const {data} = await axios.post(`${backendUrl}api/auth/login`,{email,password,role});
      if(data.success){
        toast(data.message);
        navigate('/home');
      }else{
        toast.error(data.message);
      }
    } catch (error) {
      console.log('Error : ',error);
      toast.error(error.message);
    }
  }
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/signup" element={<UserSignup />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route path="/captain-signup" element={<CaptainSignup />} />
    </Routes>
  )
}

export default App
