import React from 'react'
import Image from 'next/image'

const LoginPage = () => {
  return (
    <>
    {/* Navbar Section */}
      <div className='px-4 h-14 w-full bg-[#EEE7FE] border-b-2 border-[#6265D7] border-opacity-10 flex justify-between items-center'>
      {/* Logo & Name */}
      <div className='flex items-center h-full'>
      <Image width={50} height={50}  src="/logo.svg" alt="Logo" />
        <h1 className='font-bold ml-2 text-xl text-[#6265D7]'>Free</h1>
        <h1 className='font-bold text-xl text-[#F88F4F]'>Flow</h1>
      </div>
      {/* Login Button or Profile Button */}
      {/* !CODE TO BE EDITED */}
      <button className='hidden bg-[#6265D7] text-sm h-9 px-4 py-2 text-white font-medium items-center rounded-md' >Login</button>
    </div>
    {/* Login Section */}
    <div className='h-[92vh] bg-[#EEE7FE] flex flex-col items-center justify-center'>
      <h1 className='font-semibold text-xl'>Login via Google</h1>
      <button className='w-24 mt-2 py-1 bg-[#6265D7] rounded-md text-white'> Login </button>
      <div className='h-8'/>
      <h1 className='font-semibold text-xl'>Create an account</h1>
      <button className='w-24 mt-2 rounded-md border-2 border-[#6265D7] border-opacity-50 py-1 bg-white'> Google </button>
    </div>
    </>
  )
}

export default LoginPage