import { useState } from "react"
import toast from "react-hot-toast";
import { Link } from "react-router-dom"

function CaptainLogin({handleLogin}) {

  const [formData,setFormData] = useState({
    email:'',
    password:'',
  });

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!formData.email || !formData.password){
      toast.error('Email and Password are required.');
      return;
    }

    handleLogin(formData.email,formData.password,'captain');
  }

  return (
    <div className="p-10 flex flex-col justify-between shadow-md rounde-xl">
      <img className='w-16 mb-30' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="" />
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-center text-amber-300 pb-5">Captain Login</h2>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <h3 className="font-bold text-2xl">Email Id</h3>
            <input type="text" value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})} className="px-3 py-4 border rounded-xl bg-gray-300 w-full" />
            <h3 className="font-bold text-2xl">Password</h3>
            <input type="password" value={formData.password} onChange={(e)=>setFormData({...formData,password:e.target.value})} className="px-3 py-4 border rounded-xl bg-gray-300 w-full"/>
            <button type="submit" className="py-3 px-3 rounded-xl w-full bg-black text-white mt-5">Sign In</button>
            <Link to='/captain-signup' className='text-blue-400 text-lg font-medium cursor-pointer underline mt-2'>Register as Captain</Link>
        </form>
      </div>
      <div className="mt-20">
        <Link to={'/login'} className="py-3 px-4 flex justify-center bg-amber-500 rounded-xl w-full">Sign In as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin
