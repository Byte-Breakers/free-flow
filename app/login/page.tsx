import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const LoginPage = () => {
  return (
    <>
      {/* Navbar Section */}
      <div className='px-4 h-14 w-full bg-[#eee7fe] border-b-2 border-[#6265D7] border-opacity-10 flex justify-between items-center'>
        {/* Logo & Name */}
        <Link href={'/'} className='flex items-center h-full'>
          <Image width={50} height={50} src="/logo.svg" alt="Logo" />
          <h1 className='font-bold ml-2 text-xl text-[#6265D7]'>Free</h1>
          <h1 className='font-bold text-xl text-[#F88F4F]'>Flow</h1>
        </Link>
      </div>
      {/* Login Section */}
      <div className='h-[92vh] bg-[#EEE7FE] flex flex-col items-center justify-center '>
        <h1 className='font-semibold text-xl'>
          Login via Google
        </h1>
        <button className='w-24 mt-2 py-1 bg-[#6265D7] rounded-md text-white transition duration-300 ease-in-out hover:bg-blue-600 transform hover:-translate-y-0.5 hover:scale-105'>
          Login
        </button>
      </div>
    </>
  );
};

export default LoginPage;
