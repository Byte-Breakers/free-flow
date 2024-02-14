"use client";
import React, { useState, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Navbar from "../components/navbar";
import { FiSearch } from "react-icons/fi";
import LinkCard from "../components/linkCard";

const HomePage = () => {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const API_KEY = "AIzaSyAWVRHDYSUt73oh-8cJq1l7lpu_FUyiJB8";

  interface Link {
    title: string;
    url: string;
    thumbnail: string;
  }

  const [links, setLinks] = useState<Link[]>([]);

  const handleGenerate = async () => {
    if (!inputText.trim()) {
      alert("Please enter a course name");
      return;
    }

    try {
      setIsLoading(true);
      const genAI = new GoogleGenerativeAI(API_KEY);
      const parsedLinks: Link[] = [];
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const inputPrompt = `Give me at least 20 links of free ${inputText} courses. And they all have to be free of cost. The output has to be only the links in COMMA SEPARATED FORMAT ONLY, not even serial numbers or in bullets.`;
      const result = await model.generateContent(inputPrompt);
      const response = await result.response;
      const generatedText = response.text();

      generatedText.split(",").forEach((link) => {
        parsedLinks.push({
          title: link,
          url: link,
          thumbnail: "",
        });
      });
      setLinks(parsedLinks);
    } catch (error) {
      console.error("Error generating content:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setInputText("");
    inputRef.current?.focus();
  };

  return (
    <div className="mt-14 flex max-h-fit min-h-screen w-screen flex-col items-center bg-light-bg">
      <Navbar />
      {/* Headin */}
      <h1 className="mb-2 mt-5 text-3xl font-semibold">
        Search for your favorite Course
      </h1>
      {/* Search bar and button */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleGenerate();
        }}
        className="relative mt-3 flex h-8"
      >
        <div className="relative flex items-center">
          <div className="icon-wrapper absolute inset-y-0 left-2 flex items-center justify-center">
            <FiSearch className="text-gray-600" />
          </div>
          <input
            type="search"
            className="h-9 w-full rounded-md border-2 border-main-purple1 border-opacity-40 bg-white px-3 text-center align-baseline text-sm shadow-inner xl:w-60"
            placeholder="Search for a course"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
        </div>
        <div className="w-[2%] pl-3" />
        <button
          type="reset"
          className="rounded-md bg-white px-3 text-sm font-medium text-main-purple1 "
          onClick={handleClear}
        >
          Clear
        </button>
        <button
          type="submit"
          className="ml-2 rounded-md bg-main-purple1 px-3 text-sm font-medium text-white"
        >
          Search
        </button>
      </form>
      {/* Courses LinkCard */}
      <div className="gap-x-5 gap-y-2 md:grid md:grid-cols-2">
        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-b-8 border-t-8 border-blue-800"></div>
          </div>
        ) : (
          links.map((link) => {
            return <LinkCard title={link.title} url={link.url} />;
          })
        )}
      </div>
    </div>
  );
};

export default HomePage;
