import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import UserLogin from "./auth/UserLogin.jsx"
import UserSignup from "./auth/UserSignup.jsx"
import CaptainLogin from "./auth/CaptainLogin.jsx"
import CaptainSignup from "./auth/CaptainSignup.jsx"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/signup" element={<UserSignup />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route path="/captain-signup" element={<CaptainSignup />} />
    </Routes>
  )
}

export default App
