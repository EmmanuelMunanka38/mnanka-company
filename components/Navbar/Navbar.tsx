'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll position to trigger background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (path: string) => {
    router.push(path);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-2 flex justify-between items-center ${
        isScrolled 
          ? 'bg-blue-700/80 backdrop-blur-lg shadow-lg py-1' 
          : 'bg-transparent py-4'
      }`}
    >
      {/* Logo Section */}
      <div 
        className="cursor-pointer flex items-center transition-transform hover:scale-105"
        onClick={() => navigate('/')}
      >
        <img 
          src="/logo.jpeg" 
          alt="Company Logo"
          className="h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-white/20"
        />
        <span className={`ml-3 font-black text-xl tracking-tighter ${isScrolled ? 'text-white' : 'text-blue-700'} transition-colors`}>
          BBS<span className={isScrolled ? 'text-blue-200' : 'text-slate-900'}> TRADERS</span>
        </span>
      </div>
      
      {/* Navigation Buttons */}
      <nav className="flex items-center gap-2 md:gap-4">
        <button 
          className="hidden md:block text-sm font-bold text-white hover:text-blue-200 transition-colors px-4"
          onClick={() => navigate('/')}
        >
          HOME
        </button>

        <button 
          className={`font-bold rounded-full py-2 px-5 border transition-all duration-300 text-sm ${
            isScrolled 
              ? 'bg-white text-blue-700 border-white hover:bg-blue-50' 
              : 'bg-blue-600 text-white border-blue-600 hover:bg-black hover:border-black'
          }`}
          onClick={() => navigate('/contacts')}
        >
          Contact Us
        </button>

      
      </nav>
    </header>
  );
}

export default Navbar;