"use client" 
import  { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SuccessPage2 from './Successpage'; 

const LoginPage = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleLogin = () => {
    setIsSignedIn(true);
  };

  // If the user is signed in, render the SuccessPage component
  if (isSignedIn) {
    return <SuccessPage2 />;
  }

  return (
    <>
      {/* Navbar Section */}
      <div className='px-4 h-14 w-full bg-[#eee7fe] border-b-2 border-[#6265D7] border-opacity-10 flex justify-between items-center'>
        {/* Logo & Name */}
        <Link href={'/'}>
          <div className='flex items-center h-full'>
            <Image width={50} height={50} src="/logo.svg" alt="Logo" />
            <h1 className='font-bold ml-2 text-xl text-[#6265D7]'>Free</h1>
            <h1 className='font-bold text-xl text-[#F88F4F]'>Flow</h1>
          </div>
        </Link>
      </div>

      {/* Login Section */}
      <div className='h-[92vh] bg-[#EEE7FE] flex flex-col items-center justify-center'>
        <h1 className='font-semibold text-xl'>Sign in</h1>
        {/* Render the SuccessPage component if user is signed in */}
        <button
          className='w-full max-w-[300px] mt-2 py-1 h-14 bg-[#EEE7FE] border-2 border-black rounded-md text-white flex items-center justify-center transition duration-300 ease-in-out hover:bg-blue-600 transform hover:-translate-y-0.5 hover:scale-105'
          onClick={handleLogin}
        >
          <Image src="/google.png" alt='Google Icon' width={35} height={30} className='mr-2' />
          <h1 className='font-semibold text-xl text-black'>Sign in with Google</h1>
        </button>
      </div>
    </>
  );
};

export default LoginPage;
