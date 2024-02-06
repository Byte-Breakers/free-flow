import React from 'react'
import Image from 'next/image'
import { useState } from "react";
import { FiSearch } from 'react-icons/fi';

const LandingPageMobile = () => {
    const [searchValue, setSearchValue] = useState("");
    const [isValidSearch, setIsValidSearch] = useState(true);
    const handleSearch = () => {
        if (searchValue.trim() === "") {

            setIsValidSearch(false);
        } else {

            console.log("Performing search for:", searchValue);

            setIsValidSearch(true);
        }
    };

    return (
        <div className="flex md:hidden h-[91dvh] w-full items-center justify-around bg-light-bg">
            {/* Card */}
            <div className="flex flex-col items-center justify-center h-[80%] w-[90%] rounded-2xl bg-gradient-to-br from-main-purple2 to-main-purple1 px-[4%] py-[5%] shadow-xl">
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
                    <form
              onSubmit={(e) => {
                e.preventDefault(); 
                handleSearch();
              }}
              className="flex h-8 mt-3"
            >
              <div className="flex items-center relative">
                <div className="icon-wrapper absolute inset-y-0 left-2 flex items-center justify-center">
                  <FiSearch className="text-gray-600" />
                </div>
                <input
                  type="search"
                  className={`rounded-md px-3  text-sm opacity-35 align-baseline shadow-inner shadow-neutral-300 text-center w-full h-9 xl:w-60 ${
                    !isValidSearch ? "border-red-500" : ""
                  }`}
                  placeholder="Search for a course"
                  value={searchValue}
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                    setIsValidSearch(true); 
                  }}
                />
              </div>
            </form>
                    <button className="rounded-md mt-2 py-1 bg-white w-[30%] text-sm font-medium text-main-purple1">
                        Search</button>
                </div>
            </div>
        </div>
    )
}

export default LandingPageMobile;