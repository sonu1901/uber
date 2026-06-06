import { Link } from "react-router-dom"

function Start() {
  return (
    <div className="flex flex-col w-full justify-between bg-cover bg-center h-screen bg-[url(https://pngimg.com/uploads/traffic_light/traffic_light_PNG15289.png)] ">
      <img className='w-20 ml-5' src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoid2VhcmVcL2ZpbGVcLzhGbTh4cU5SZGZUVjUxYVh3bnEyLnN2ZyJ9:weare:F1cOF9Bps96cMy7r9Y2d7affBYsDeiDoIHfqZrbcxAw?width=1200&height=417" alt="" />
      <div className="bg-white w-full p-5">
        <p className="text-center text-black font-bold text-2xl pb-4">Get Started with Uber</p>
        <Link to="/login" className="py-3 px-4 flex items-center justify-center rounded-lg bg-black text-white w-full">Continue</Link>
      </div>
    </div>
  )
}

export default Start
