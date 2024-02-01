import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='px-4 h-14 w-full bg-[#EEE7FE] border-b-2 border-[#6265D7] border-opacity-10 flex justify-between items-center'>
      {/* Logo & Name */}
      <Link href={'/'} className='flex items-center h-full'>
      <Image width={50} height={50}  src="/logo.svg" alt="Logo" />
        <h1 className='font-bold ml-2 text-xl text-[#6265D7]'>Free</h1>
        <h1 className='font-bold text-xl text-[#F88F4F]'>Flow</h1>
      </Link>
      {/* Login Button or Profile Button */}
      {/* !CODE TO BE EDITED */}
      <Link href={'/login'} className='bg-[#6265D7] text-sm h-9 px-4 py-2 text-white font-medium flex items-center rounded-md'>Login</Link>
    </div>
  )
}

export default Navbar