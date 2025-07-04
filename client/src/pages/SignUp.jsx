import {Link} from 'react-router-dom'

function SignUp() {
  return (
    <div className='p-3 mx-auto max-w-lg'>
      <h1 className='text-4xl text-center font-semibold my-7'>
        Sign Up
      </h1>
      <form className='flex flex-col gap-4'>
           <input 
           type='text' 
           placeholder='username'
           className='border rounded-lg p-3'
           id='username'
           />
           <input 
           type='email' 
           placeholder='email'
           className='border rounded-lg p-3'
           id='email'
           />
           <input 
           type='password' 
           placeholder='password'
           className='border rounded-lg p-3'
           id='password'
           />
           <button 
            className='cursor-pointer p-3 rounded-lg bg-slate-700
                       text-white hover:opacity-90 uppercase disabled:opacity-80'>
              sign up
           </button>
      </form>
      <div className='flex gap-2 mt-4 justify-center'>
        <p>Have an account?</p>
        <Link to='/sign-in'>
           <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
    </div>
  )
}

export default SignUp