"use client"
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import Navbar from "./components/navbar";
import { useState } from "react";
import LandingPageDesktop from "./components/landingDesktop";
import LandingPageMobile from "./components/landingMobile";

export default function Home() {
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
    <main className="relative pt-14 h-screen w-screen">
      <Navbar />
      <LandingPageDesktop />
      <LandingPageMobile/>
    </main>
  );
}