import Image from "next/image";
import { FiSearch } from "react-icons/fi";

export default function Home() {
  return (
    <main className="relative h-screen w-screen">
      <div className="flex h-full w-full items-center justify-around bg-[#EEE7FE]">
        {/* Card */}
        <div className="flex h-[80%] w-[90%] justify-around rounded-2xl bg-gradient-to-br from-[#A57EF7] to-[#6265D7] px-[10%] py-[5%] shadow-xl">
          {/* Hero Section */}
          <div className="flex  h-full w-[40%] flex-col justify-between py-[12%]">
            {/* AI Search Heading */}
            <h1 className="text-5xl font-extrabold text-white drop-shadow-md">
              AI Search
            </h1>
            {/* Description */}
            <p className="font-medium text-white opacity-70 ">
              {" "}
              Your Gateway to Infinite Knowledge. Discover Free Courses,
              Navigate, and Dive into Wisdom with Seamless Search!
            </p>
            {/* Search bar and Button */}
            <form action="" className="flex h-8">
              <input
                type="search"
                className="rounded-md px-3 text-sm opacity-35 shadow-inner shadow-neutral-300"
                placeholder="Search for a course"
              />
              <div className="w-[2%]" />
              <button className="rounded-md bg-white px-3 text-sm font-medium text-[#6265D7]">
                Search
              </button>
            </form>
          </div>
          {/* Illustration */}
          <div className="relative h-full w-1/2">
            <Image fill src="/mainIllustration.svg" alt="logo" />
          </div>
        </div>
      </div>
    </main>
  );
}
