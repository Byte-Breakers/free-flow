"use client";
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
    <div className="hidden h-[100%] w-full items-center justify-center bg-light-bg md:flex">
      {/* Card */}
      <div className="flex h-[80%] w-[90%] justify-around rounded-2xl bg-gradient-to-br from-main-purple2 to-main-purple1 px-[10%] py-[5%] shadow-xl">
        {/* Hero Section */}
        <div className="flex  h-full w-[40%] flex-col justify-center">
          {/* AI Search Heading */}
          <h1 className="text-5xl font-extrabold text-white drop-shadow-md">
            AI Search
          </h1>
          {/* Description */}
          <p className="mt-3 font-medium text-white opacity-70 ">
            {" "}
            Your Gateway to Infinite Knowledge. Discover Free Courses, Navigate,
            and Dive into Wisdom with Seamless Search!
          </p>
          {/* Search bar and Button */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            className="mt-3 flex h-8"
          >
            <div className="relative flex items-center">
              <div className="icon-wrapper absolute inset-y-0 left-2 flex items-center justify-center">
                <FiSearch className="text-gray-600" />
              </div>
              <input
                type="search"
                className={`h-9 w-full  rounded-md px-3 text-center align-baseline text-sm opacity-35 shadow-inner shadow-neutral-300 xl:w-60 ${
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
              className="rounded-md bg-white px-3 text-sm font-medium text-main-purple1"
            >
              Search
            </button>
          </form>
          {!isValidSearch && (
            <p className="mt-2 text-red-500">Invalid Search</p>
          )}
        </div>
        {/* Illustration */}
        <div className="relative h-full w-1/2">
          <Image fill src="/mainIllustration.svg" alt="logo" />
        </div>
      </div>
    </div>
  );
}
