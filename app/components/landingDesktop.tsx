"use client"
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";

export default function LandingPageDesktop() {
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
    <div className="hidden md:flex h-[92dvh] w-full items-center justify-around bg-[#EEE7FE]">
        {/* Card */}
        <div className="flex h-[80%] w-[90%] justify-around rounded-2xl bg-gradient-to-br from-[#A57EF7] to-[#6265D7] px-[10%] py-[5%] shadow-xl">
          {/* Hero Section */}
          <div className="flex  h-full w-[40%] flex-col justify-center">
            {/* AI Search Heading */}
            <h1 className="text-5xl font-extrabold text-white drop-shadow-md">
              AI Search
            </h1>
            {/* Description */}
            <p className="mt-3 font-medium text-white opacity-70 ">
              {" "}
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
              <div className="w-[2%]" />
              <button
                type="submit"
                className="rounded-md bg-white px-3 text-sm font-medium text-[#6265D7]"
              >
                Search
              </button>
            </form>
            {!isValidSearch && (
              <p className="text-red-500 mt-2">Invalid Search</p>
            )}
          </div>
          {/* Illustration */}
          <div className="relative h-full w-1/2">
            <Image fill src="/mainIllustration.svg" alt="logo" />
          </div>
        </div>
      </div>
  )
}
