import { useState } from "react"
import { Link } from "react-router-dom"

function CaptainSignup() {
    const [formData,setFormData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        driving_licence:'',
        vehicleType:'',
        vehicleBrand:'',
        vehicleRc:'',
        vehicleValidity:'',
    })
  return (
    <div className="p-10 flex flex-col justify-between shadow-md rounded-xl">
      <img className='w-16 mb-5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="" />
      <div className="mt-5">
        <h2 className="text-2xl font-bold text-center text-amber-300 pb-5">Captain Signup</h2>
        <form>
            <div className="flex flex-row justify-between items-center gap-2">
              <div>
                <h3 className="font-medium text-lg">First Name</h3>
                <input type="text" value={formData.firstName} onChange={(e)=>setFormData({...formData,firstName:e.target.value})} className="px-3 py-4 border rounded-xl bg-gray-300 w-full" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Last Name</h3>
                <input type="text" value={formData.lastName} onChange={(e)=>setFormData({...formData,lastName:e.target.value})} className="px-3 py-4 border rounded-xl bg-gray-300 w-full" />
              </div>
            </div>
            <h3 className="font-medium text-lg">Email Id</h3>
            <input type="text" value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})} className="px-3 py-4 border rounded-xl bg-gray-300 w-full" />
            <h3 className="font-medium text-lg">Password</h3>
            <input type="text" value={formData.password} onChange={(e)=>setFormData({...formData,password:e.target.value})} className="px-3 py-4 border rounded-xl bg-gray-300 w-full"/>
            <h3 className="font-medium text-lg">Driving Licence</h3>
            <input type="text" value={formData.driving_licence} onChange={(e)=>setFormData({...formData,driving_licence:e.target.value})} className="px-3 py-4 border rounded-xl bg-gray-300 w-full"/>
            <hr className="mt-5" />

            <h3 className="font-bold text-xl mt-4">Vehicle Info</h3>

            <div className="flex flex-row justify-between items-center gap-2">
              <div>
                  <select className="bg-gray-300 w-full border rounded-md py-4 px-3 text-lg font-medium" onChange={(e)=>setFormData({...formData,vehicleType:e.target.value})} id="">
                    <option value="">Select Type</option>
                    <option value="two_vehicle">2 Wheeler</option>
                    <option value="four_vehicle">4 Wheeler</option>
                  </select>
              </div>
              <div>
                  <input type="date" value={formData.vehicleValidity} onChange={(e)=>setFormData({...formData,vehicleValidity:e.target.value})} className="px-3 py-4 border rounded-xl bg-gray-300 w-full" />
              </div>
            </div>

            <div className="flex flex-row justify-between items-center gap-2 mt-2">
              <div>
                  <input type="text" placeholder="Vehicle Brand" value={formData.vehicleBrand} onChange={(e)=>setFormData({...formData,vehicleBrand:e.target.value})} className="px-3 py-4 border rounded-xl bg-gray-300 w-full" />
              </div>
              <div>
                  <input type="text" placeholder="Vehicle RC" value={formData.vehicleRc} onChange={(e)=>setFormData({...formData,vehicleRc:e.target.value})} className="px-3 py-4 border rounded-xl bg-gray-300 w-full" />
              </div>
            </div>


            <button type="submit" className="py-3 px-3 rounded-xl w-full bg-black text-white mt-5">Sign Up</button>
            <span className="text-md font-medium">Already have account ? </span><Link to='/captain-login' className='text-blue-400 text-lg font-medium cursor-pointer underline mt-2'>Login as Captain</Link>
        </form>
      </div>
      <div className="mt-20">
        <Link to={'/signup'} className="py-3 px-4 flex justify-center bg-amber-500 rounded-xl w-full">Sign Up as User</Link>
      </div>
    </div>
  )
}

export default CaptainSignup
