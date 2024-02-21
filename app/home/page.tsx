"use client"
import React, { useState, useRef } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import Navbar from '../components/navbar'
import { FiSearch } from 'react-icons/fi';
import LinkCard from '../components/linkCard';
import Loading from '../components/Loading';

const HomePage = () => {
  // inputText is the variable which takes in the course name
  const [inputText, setInputText] = useState('');

  // variable which tells if the ai is generating or not
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // API keep of the Gemini
  // TODO! - NEED TO BE PUT INTO .env FILE!
  const API_KEY = 'AIzaSyAWVRHDYSUt73oh-8cJq1l7lpu_FUyiJB8'

  // Interface that defines each link and its components like title and thumbnail
  interface Link {
    title: string,
    url: string,
    // thumbnail: string,
  }

  // Array of the links that the AI gave (its like the generics concept we studied in java + react hook)
  const [links, setLinks] = useState<Link[]>([]);

  // The function that handles what to do once the user types course name and hits enter
  const handleGenerate = async () => {

    // Checking if the course name is blank
    if (!inputText.trim()) {
      alert('Please enter a course name');
      return;
    }

    try {
      setIsLoading(true)
      const genAI = new GoogleGenerativeAI(API_KEY);
      const parsedLinks: Link[] = [];
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
      const inputPrompt = `Give me at least 10 links of free ${inputText} courses. And they all have to be free of cost. The output has to be only the links in COMMA SEPARATED FORMAT ONLY, not even serial numbers or in bullets.`;
      const result = await model.generateContent(inputPrompt);
      const response = await result.response;
      const generatedText = response.text();

      // the output by the ai is a string of comma separated links. We separate each link and push it to an array
      generatedText.split(',').forEach((link) => {
        parsedLinks.push({
          title: link, 
          url: link,
          // thumbnail: '',
        });
      })

      // set the links array as the array of new links 
      setLinks(parsedLinks)

    } catch (error) {

      console.error('Error generating content:', error);
      alert('An error occurred. Please try again later.');

    } finally {

      setIsLoading(false)

    }
  }

  // Function that handles what to do when the user clicks clear button
  const handleClear = () => {
    setInputText('');
    inputRef.current?.focus();
  };

  // the ui
  return (

    <div className="w-screen min-h-screen max-h-fit bg-light-bg flex flex-col items-center mt-14">

      <Navbar />

      {/* Headin */}
       

      <h1 className='text-3xl mt-5 mb-2 font-semibold'>Search for your favorite Course</h1>
       
 
      {/* Search bar and button */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleGenerate(); // Call the handleGenerate function when the user hits search button or enter key
        }}
        className="flex h-8 mt-3 relative"
      >
        {/* Input box to type the course name */}
        <div className="flex items-center relative">
          <div className="icon-wrapper absolute inset-y-0 left-2 flex items-center justify-center">
            <FiSearch className="text-gray-600" />
          </div>
          <input
            type="search"
            className="rounded-md px-3 text-sm bg-white align-baseline shadow-inner border-2 border-main-purple1 border-opacity-40 text-center w-full h-9 xl:w-60"
            placeholder="Search for a course"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
        </div>
       

        <div className="w-[2%] pl-3" /> {/* Gap */}

        <button // Clear Button
          type='reset'
          className="rounded-md bg-white px-3 text-sm font-medium text-main-purple1 transition ease-in-out delay-150 hover:- translate x-10 hover:scale-110 duration-300"
          onClick={handleClear}
        >Clear</button>

        <div className="w-[2%] pl-3" /> {/* Gap */}

        <button // Search Button
          type="submit"
          className="rounded-md bg-main-purple1 px-3 text-sm font-medium text-white transition ease-in-out delay-150 hover:- translate x-10 hover:scale-110 duration-300"
        >
          Search
        </button>
      </form>
     
      {/* The list of Courses is displayed as a list of LinkCard components */}
      <div className='md:grid md:grid-cols-2 gap-x-5 gap-y-2'>

        {isLoading ? ( // If the is loading variable value is true then display the loading animation

          <Loading />

        ) : ( // Else display the list of the courses

          links.map((link) => { // For each link in links
            return <LinkCard title={link.title} url={link.url} /> // Sending the props ie title and url (thumbnail yet to be implemented)
          })

        )}

      </div>
    </div>
    
    
  )
}

export default HomePage
