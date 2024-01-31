import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='px-4 h-14 w-full bg-[#EEE7FE] border-b-2 border-[#6265D7] border-opacity-10 flex justify-between items-center'>
      {/* Logo & Name */}
      <div className='flex items-center h-full'>
      <Image width={50} height={50}  src="/logo.svg" alt="Logo" />
        <h1 className='font-bold ml-2 text-xl text-[#6265D7]'>Free</h1>
        <h1 className='font-bold text-xl text-[#F88F4F]'>Flow</h1>
      </div>
      {/* Login Button or Profile Button */}
      {/* !CODE TO BE EDITED */}
      <button className='bg-[#6265D7] text-sm h-9 px-4 py-2 text-white font-medium flex items-center rounded-md'>Login</button>
    </div>
  )
}

export default Navbar