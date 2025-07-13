import { useSelector } from "react-redux"

function Profile() {
  const {currentUser} = useSelector(state=>state.user)

  const handleChange= (e)=>{

  }
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className='text-4xl font-semibold text-center my-7'>Profile</h1>
      <form className="flex flex-col gap-4">
        <img src={currentUser.avatar} alt="profile_pic" 
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"/>
         <input
            type="text"
            placeholder="username"
            className="border border-slate-300 focus:outline-blue-300 rounded-lg p-3"
            id="username"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="email"
            className="border border-slate-300 focus:outline-blue-300 rounded-lg p-3"
            id="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="password"
            className="border border-slate-300 focus:outline-blue-300 rounded-lg p-3"
            id="password"
            onChange={handleChange}
          />
          <button
            className="cursor-pointer p-3 rounded-lg bg-slate-700
                       text-white hover:opacity-90 uppercase disabled:opacity-80"
          >
            update
          </button>
      </form>
        <div className='mt-5 flex justify-between text-red-700  font-semibold'>
        <span className='cursor-pointer hover:text-red-500'>Delete Account</span>
        <span className='cursor-pointer hover:text-red-500'>Sign Out</span>
      </div>
    </div>
  )
}

export default Profile