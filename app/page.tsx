"use client";

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
    <main className="relative h-screen w-screen pt-14">
      <Navbar />
      <LandingPageDesktop />
      <LandingPageMobile />
    </main>
  );
}
