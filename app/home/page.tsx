"use client"
import React from 'react'
import Navbar from '../components/navbar'
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import LinkCard from '../components/linkCard';

const HomePage = () => {
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

  interface Link {
    title: string,
    thumbnail: string
  }

  const links: Link[] = [
    {
      title: "5 Javascripts concepts that everyone should know",
      thumbnail: "/google.png",
    },
    {
      title: "5 Javascripts concepts that everyone should know",
      thumbnail: "/google.png",
    },
    {
      title: "5 Javascripts concepts that everyone should know",
      thumbnail: "/google.png",
    },
  ]

  return (
    <div className="w-screen h-screen bg-light-bg flex flex-col items-center mt-14">
      <Navbar />
      {/* Headin */}
      <h1 className='text-3xl mt-5 mb-2 font-semibold'>Search for your favorite Course</h1>
      {/* Search bar and button */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
        className="flex h-8 mt-3 relative"
      >
        <div className="flex items-center relative">
          <div className="icon-wrapper absolute inset-y-0 left-2 flex items-center justify-center">
            <FiSearch className="text-gray-600" />
          </div>
          <input
            type="search"
            className={`rounded-md px-3 text-sm bg-white align-baseline shadow-inner border-2 border-main-purple1 border-opacity-40 text-center w-full h-9 xl:w-60 ${!isValidSearch ? "border-red-500" : ""
              }`}
            placeholder="Search for a course"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
              setIsValidSearch(true);
            }}
          />
        </div>
        <div className="w-[2%] pl-3" />
        <button
          type="submit"
          className="rounded-md bg-main-purple1 px-3 text-sm font-medium text-white"
        >
          Search
        </button>
      </form>
      {/* Courses LinkCard */}
      <div className='md:grid md:grid-cols-2 gap-x-5 gap-y-2'>
      {
        links.map((link) => {
          return <LinkCard title={link.title} thumbnail={link.thumbnail} />
        })
      }
      </div>
    </div>
  )
}

export default HomePage