import { app } from "../firebase";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  User,
} from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const auth = getAuth(app);
  const router = useRouter();
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState<User | null>(null);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const [showFinalLogoutConfirmation, setShowFinalLogoutConfirmation] = useState(false);
  const [showProfileIcon , setShowProfileIcon] = useState(false);
  

  // Use ref to manage profile popup visibility
  const profilePopupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        router.push("/home");
      })
      .catch((error) => {
        console.error("Sign-in error:", error);
      });
  };

  const handleSignOut = () => {
    setShowLogoutConfirmation(true);
  };

  const handleCancelLogout = () => {
    setShowLogoutConfirmation(false);
    setShowFinalLogoutConfirmation(false);
  };

  const confirmLogout = async () => {
    setShowLogoutConfirmation(false); // Close the first confirmation popup

    // Show the final confirmation popup
    setShowFinalLogoutConfirmation(true);
  };

  const handleFinalLogoutCancel = () => {
    setShowFinalLogoutConfirmation(false);
  };

  const handleFinalLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      // Handle and display the error to the user (e.g., using an alert)
      console.error("Sign-out error:", error);
      alert("There was an error logging out. Please try again.");
    } finally {
      // Ensure both confirmation popups close even on error
      setShowLogoutConfirmation(false);
      setShowFinalLogoutConfirmation(false);
    }
  };

  // Handle the click outside the profile popup to close it
  const handleClickOutsideProfilePopup = (e: MouseEvent) => {
    if (profilePopupRef.current && !profilePopupRef.current.contains(e.target as Node)) {
      // Click outside the profile popup, close it
      setShowLogoutConfirmation(false);
      setShowFinalLogoutConfirmation(false);
    }
  };

  useEffect(() => {
    // Add click event listener to close profile popup on outside click
    document.addEventListener("click", handleClickOutsideProfilePopup);

    // Remove event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutsideProfilePopup);
    };
  }, []);

// ... (existing code)

return (
  <div className="fixed top-0 flex h-14 w-full items-center justify-between border-b-2 border-main-purple1 border-opacity-10 bg-light-bg px-4">
    {/* Logo & Name */}
    <Link href={"/"}>
      <div className="flex h-full items-center cursor-pointer">
        <Image width={50} height={50} src="/logo.svg" alt="Logo" />
        <h1 className="ml-2 text-xl font-bold text-main-purple1">Free</h1>
        <h1 className="text-xl font-bold text-[#F88F4F]">Flow</h1>
      </div>
    </Link>

    {/* Profile Icon/Button */}
    {user && (
      <button
        onClick={() => setShowLogoutConfirmation(true)}
        className="flex items-center p-2 rounded-full bg-white hover:bg-gray-100 focus:outline-none focus:ring border-2 border-black focus:border-main-purple1 transition-all duration-300 ease-in-out"
      >
        <Image
          src="/Profile.png"
          width={25}
          height={25}
          alt="Profile Image"
          className="rounded-full"
        />
      </button>
    )}

    {/* Profile Popup */}
    {user ? (
      <div
        ref={profilePopupRef}
        className={`${
          showFinalLogoutConfirmation ? "animate-fade-in" : "animate-fade-out"
        } fixed top-14 right-4 z-50 p-4 rounded-md shadow-md bg-white border-2 border-black transition-opacity duration-300 ease-in-out`}
      >
        <h2 className="mb-2">Welcome, {user.displayName}</h2>
        <p className="text-black-600">{user.email}</p>
        <button
          onClick={confirmLogout}
          className="mt-2 inline-flex items-center px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300 ease-in-out"
        >
          Logout
        </button>
      </div>
    ) : (
      <button
        onClick={handleSignIn}
        className={`${
          showFinalLogoutConfirmation ? "animate-fade-out" : "animate-fade-in"
        } flex h-175 w-200 items-center rounded-md bg-main #EEE7FE border-2 border-black px-0.5 py-2 text-m font-medium text-black transition ease-in-out delay-150 hover:- bg-white translate x-10 hover:scale-110 duration-300`}
      >
        <Image src="/google.png" width={25} height={25} alt="Google Logo" />
        Login with Google
      </button>
    )}

    {/* Logout Confirmation Popup */}
    {showLogoutConfirmation && (
      <div
        className={`${
          showFinalLogoutConfirmation ? "animate-fade-out" : "animate-fade-in"
        } logout-confirmation-overlay transition-opacity duration-300 ease-in-out`}
      ></div>
    )}

    {/* Final Logout Confirmation Popup */}
    {showFinalLogoutConfirmation && (
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div
          className={`animate-fade-in logout-confirmation-overlay transition-opacity duration-300 ease-in-out text-center bg-white p-4 rounded-md shadow-md`}
        >
          <h2>Are you really sure you want to log out?</h2>
          <button
            onClick={handleFinalLogoutCancel}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center transition ease-in-out delay-150 hover:-translate x-10 hover:scale-110 duration-300"
          >
            Cancel
          </button>
          <button
            onClick={handleFinalLogout}
            className="bg-red-500 hover:bg-red-600 text-white ml-5 font-bold py-2 px-4 rounded inline-flex items-center transition ease-in-out delay-150 hover:-translate x-10 hover:scale-110 duration-300"
          >
            Log Out
          </button>
        </div>
      </div>
    )}
  </div>
);

};

export default Navbar;