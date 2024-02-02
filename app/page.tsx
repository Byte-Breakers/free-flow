import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import Navbar from "./components/navbar";
import LandingPageDesktop from "./components/landingDesktop";
import LandingPageMobile from "./components/landingMobile";

export default function Home() {
  return (
    <main className="relative h-screen w-screen">
      <Navbar />
      <LandingPageDesktop />
      <LandingPageMobile/>
    </main>
  );
}
