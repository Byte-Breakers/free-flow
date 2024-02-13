import { app } from '../firebase';
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  User,
} from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const auth = getAuth(app);
  const router = useRouter();
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState<User | null>(null);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(() => router.push('/home'))
      .catch((error) => {
        console.error('Sign-in error:', error);
      });
  };

  const handleSignOut = async () => {
    setShowLogoutConfirmation(true); // Prompt for confirmation
  };

  const confirmLogout = async () => {
    try {
      await signOut(auth);
      router.push('/');
    } catch (error) {
      console.error('Sign-out error:', error);
    }
  };

  return (
    <div className='fixed top-0 px-4 h-14 w-full bg-light-bg border-b-2 border-main-purple1 border-opacity-10 flex justify-between items-center'>
      {/* Logo & Name */}
      <Link href={'/'} className='flex items-center h-full'>
        <Image width={50} height={50} src="/logo.svg" alt="Logo" />
        <h1 className='font-bold ml-2 text-xl text-main-purple1'>Free</h1>
        <h1 className='font-bold text-xl text-[#F88F4F]'>Flow</h1>
      </Link>

      {/* Login Button or Profile Button */}
      {user ? (
        <button
          onClick={handleSignOut}
          className='bg-main-purple1 text-sm h-9 px-4 py-2 text-white font-medium flex items-center rounded-md'
        >
          Logout ({user.displayName})
        </button>
      ) : (
        <button onClick={handleSignIn} className='bg-main-purple1 text-sm h-9 px-4 py-2 text-white font-medium flex items-center rounded-md'>
          Login
        </button>
      )}

      {showLogoutConfirmation && (
        <div className="logout-confirmation-overlay">
          <div className="logout-confirmation-content">
            <h2>Are you sure you want to log out?</h2>
            <button onClick={() => setShowLogoutConfirmation(false)}>Cancel</button>
            <button onClick={confirmLogout}>Logout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
