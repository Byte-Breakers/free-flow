import React from 'react'
import Image from 'next/image'

const LandingPageMobile = () => {
    return (
        <div className="flex md:hidden h-[91dvh] w-full items-center justify-around bg-[#EEE7FE]">
            {/* Card */}
            <div className="flex flex-col items-center justify-center h-[80%] w-[90%] rounded-2xl bg-gradient-to-br from-[#A57EF7] to-[#6265D7] px-[4%] py-[5%] shadow-xl">
                {/* Illustration */}
                <div className="relative h-1/2 w-full ">
                    <Image fill src="/mainIllustration.svg" alt="logo" />
                </div>
                {/* Hero Section */}
                <div className="flex flex-col justify-center items-center">
                    {/* AI Search Heading */}
                    <h1 className="text-4xl font-extrabold text-white drop-shadow-md text-center">
                        AI Search
                    </h1>
                    {/* Description */}
                    <p className="mt-2 text-center max-w-72  font-medium text-white opacity-70 text-sm ">
                        Your Gateway to Infinite Knowledge. Discover Free Courses,
                        Navigate, and Dive into Wisdom with Seamless Search!
                    </p>
                    {/* Search bar and Button */}
                    <form action="" className="flex flex-col items-center h-8 mt-3">
                        <input
                            type="search"
                            className="rounded-md px-3 py-1 text-sm opacity-35 shadow-inner shadow-neutral-300"
                            placeholder="Search for a course"
                        />
                    </form>
                    <button className="rounded-md mt-2 py-1 bg-white w-[30%] text-sm font-medium text-[#6265D7]">
                            Search</button>
                </div>
            </div>
        </div>
    )
}

export default LandingPageMobile