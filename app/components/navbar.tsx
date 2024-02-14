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

      {/* Profile Popup */}
      {user && (
        <div
          ref={profilePopupRef}
          className={`${
            showFinalLogoutConfirmation ? "animate-fade-in" : "animate-fade-out"
          } fixed top-16 right-4 z-50 p-4 rounded-md shadow-md bg-white transition-opacity duration-300 ease-in-out`}
        >
          <h2 className="mb-2">Welcome, {user.displayName}</h2>
          <p className="text-gray-600">{user.email}</p>
          {/* Logout button in the profile popup */}
          <button
            onClick={confirmLogout}
            className="mt-2 inline-flex items-center px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300 ease-in-out"
          >
            Logout
          </button>
        </div>
      )}

      <button
        onClick={handleSignIn}
        className={`${
          showFinalLogoutConfirmation ? "animate-fade-out" : "animate-fade-in"
        } flex h-9 items-center rounded-md bg-main-purple1 px-4 py-2 text-sm font-medium text-white transition-all duration-300 ease-in-out`}
      >
       
        
        Login
      </button>

      {/* Logout Confirmation Popup */}
      {showLogoutConfirmation && (
        <div
          className={`${
            showFinalLogoutConfirmation ? "animate-fade-out" : "animate-fade-in"
          } logout-confirmation-overlay transition-opacity duration-300 ease-in-out`}
        >
          <div className="logout-confirmation-content">
            <h2>Are you sure you want to log out?</h2>
            <button onClick={handleCancelLogout}>Cancel</button>
            <button onClick={confirmLogout}>Logout</button>
          </div>
        </div>
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
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            >
              Cancel
            </button>
            <button
              onClick={handleFinalLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
