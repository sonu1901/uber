import { useState } from "react";
import { Link } from "react-router-dom"

function UserLogin() {
    const [formData,setFormData] = useState({
        email:'',
        password:''
    });

    const handleSubmit = (e)=>{
        e.preventDefault();
    }
  return (
    <div className="p-10 flex flex-col justify-between shadow-md rounde-xl">
      <img className='w-16 mb-30' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="" />
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-center pb-5">User Login</h2>
        <form onSubmit={handleSubmit}>
            <h3 className="font-bold text-2xl">Email Id</h3>
            <input type="text" value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})} className="px-3 py-4 border rounded-xl bg-gray-300 w-full text-lg font-bold" />
            <h3 className="font-bold text-2xl">Password</h3>
            <input type="password" value={formData.password} onChange={(e)=>setFormData({...formData,password:e.target.value})} className="px-3 py-4 border rounded-xl bg-gray-300 w-full text-lg font-bold"/>
            <button type="submit" className="py-3 px-3 rounded-xl w-full bg-black text-white mt-5">Sign In</button>
            <Link to='/signup' className='text-blue-400 text-lg font-medium cursor-pointer underline mt-2'>Register as User</Link>
        </form>
      </div>
      <div className="mt-20">
        <Link to={'/captain-login'} className="py-3 px-4 flex justify-center bg-amber-500 rounded-xl w-full">Sign In as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin
