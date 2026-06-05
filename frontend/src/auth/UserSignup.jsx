import { useState } from "react"
import { Link } from "react-router-dom"

function UserSignup() {
    const [formData,setFormData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:''
    });

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

  return (
    <div className="p-10 flex flex-col justify-between shadow-md rounde-xl">
      <div className="">
        <img className='w-16 mb-30' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="" />
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-center pb-5">User Signup</h2>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <div className="mb-5 flex flex-row justify-between items-center gap-2">
              <div>
                  <h3 className="font-bold text-2xl">First Name</h3>
                  <input type="text" value={formData.firstName} onChange={(e)=>setFormData({...formData,firstName:e.target.value})} className="px-3 py-4 border rounded-xl bg-gray-300 w-full" />
              </div>
              <div>
                  <h3 className="font-bold text-2xl">Last Name</h3>
                  <input type="text" value={formData.lastName} onChange={(e)=>setFormData({...formData,lasstName:e.target.value})} className="px-3 py-4 border rounded-xl bg-gray-300 w-full" />
              </div>
            </div>
            <h3 className="font-bold text-2xl">Email Id</h3>
            <input type="text" value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})}  className="text-lg font-bold px-3 py-4 border rounded-xl bg-gray-300 w-full" />
            <h3 className="font-bold text-2xl">Password</h3>
            <input type="password" value={formData.password} onChange={(e)=>setFormData({...formData,password:e.target.value})}  className="text-lg font-bold px-3 py-4 border rounded-xl bg-gray-300 w-full"/>
            <button type="submit" className="py-3 px-3 rounded-xl w-full bg-black text-white mt-5">Sign Up</button>
            <span className="text-md font-medium">Already have account ? </span><Link to='/login' className='text-blue-400 text-lg font-medium cursor-pointer underline mt-2'>Login as User</Link>
        </form>
      </div>
      </div>
      <div className="mt-20">
        <Link to={'/captain-signup'} className="py-3 px-4 flex justify-center bg-amber-500 rounded-xl w-full">Sign Up as Captain</Link>
      </div>
    </div>
  )
}

export default UserSignup
