import Image from "next/image";
import { FiSearch } from "react-icons/fi";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div className="w-full h-full bg-[#EEE7FE] flex items-center justify-around">
        {/* Card */}
        <div className="w-[90%] h-[80%] bg-gradient-to-br from-[#A57EF7] to-[#6265D7] rounded-2xl shadow-xl px-[10%] py-[5%] flex justify-around">
          {/* Hero Section */}
          <div className="w-[40%] py-[12%] h-full flex flex-col justify-between">
            {/* AI Search Heading */}
            <h1 className="font-extrabold text-white drop-shadow-md text-5xl">AI Search</h1>
            {/* Description */}
            <p className="text-white font-medium opacity-70 "> Your Gateway to Infinite Knowledge. Discover Free Courses, Navigate, and Dive into Wisdom with Seamless Search!</p>
            {/* Search bar and Button */}
            <form action="" className="flex h-8">
              <input type="search" className="opacity-35 rounded-md px-3 text-sm shadow-inner shadow-neutral-300" placeholder="Search for a course" />
              <div className="w-[2%]" />
              <button className="bg-white text-sm px-3 rounded-md text-[#6265D7] font-medium">Search</button>
            </form>
          </div>
          {/* Illustration */}
          <div className="w-1/2 h-full relative">
            <Image fill src="/mainIllustration.svg" alt="logo" />
          </div>
        </div>
      </div>
    </main>
  );
}
