import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X, Rocket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LandingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);
  const toggleMobileSearch = () => setShowMobileSearch((prev) => !prev);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="navbar-wrapper">
      <style jsx>{`
        @keyframes wiggle {
          0%,
          100% {
            transform: rotate(-3deg);
          }
          50% {
            transform: rotate(3deg);
          }
        }
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          75% {
            transform: translateX(5px);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .wiggle-animation {
          animation: wiggle 0.5s ease-in-out;
        }
        .shake-animation {
          animation: shake 0.6s ease-in-out;
        }
        .spin-animation {
          animation: spin-slow 1s linear;
        }
      `}</style>

      <nav className="fixed top-0 left-0 w-full z-50 bg-[#ebedf7] shadow-md">
        <div className="container px-6 py-4 md:py-6 mx-auto flex items-center justify-between">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between w-full">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="w-[150px] h-[50px] flex items-center justify-center cursor-pointer">
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  className="h-32 w-auto object-contain transition-all duration-300 group-hover:wiggle-animation"
                  onMouseEnter={(e) => {
                    e.target.classList.add("spin-animation");
                    setTimeout(() => {
                      e.target.classList.remove("spin-animation");
                    }, 1000);
                  }}
                />
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 flex justify-center px-8">
              <form onSubmit={handleSearch} className="relative w-full max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Find all AI projects with budget over $10k using React, Node.js, and Firebase"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a74ae8] focus:border-transparent text-gray-700 bg-white"
                  />
                </div>
              </form>
            </div>

            {/* Get Started Button */}
            <div>
              <Link to="/getstarted">
                <button className="bg-[#a74ae8] hover:bg-[#9640d4] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Get Started
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden items-center justify-between w-full">
            {/* Menu Button */}
            <button
              onClick={toggleMenu}
              className="relative w-[42px] h-[42px] rounded-md border-2 border-[#a74ae8] overflow-hidden shadow-md"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-600"></div>
              <Menu className="relative z-10 w-full h-full p-2 text-white" />
            </button>

            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="w-[120px] h-[50px] flex items-center justify-center cursor-pointer">
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  className="md:h-16 h-24 w-auto object-contain transition-all duration-300 group-hover:shake-animation"
                  onMouseEnter={(e) => {
                    e.target.classList.add("wiggle-animation");
                    setTimeout(() => {
                      e.target.classList.remove("wiggle-animation");
                    }, 500);
                  }}
                />
              </div>
            </div>

            {/* Search Button */}
            <button
              onClick={toggleMobileSearch}
              className="relative w-[42px] h-[42px] rounded-md border-2 border-[#a74ae8] overflow-hidden shadow-md"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-600"></div>
              <Search className="relative z-10 w-full h-full p-2 text-white" />
            </button>
          </div>
        </div>
      </nav>

      {/* Animate Mobile Search */}
      <AnimatePresence>
        {showMobileSearch && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[80px] left-0 w-full z-40 md:hidden"
          >
            <div className="bg-white px-4 py-3 border-t border-b border-gray-200 shadow-md">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Find all AI projects with budget over $10k using React, Node.js, and Firebase"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a74ae8] text-gray-700"
                />
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Spacer */}
      <div className="h-[80px] md:h-[100px] transition-all duration-300"></div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[85%] max-w-[360px] bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
          } overflow-y-auto`}
        ref={navbarRef}
      >
        <div className="p-4 flex justify-end">
          <button onClick={closeMenu} className="text-gray-500">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mx-6"></div>

        {/* Mobile Get Started Button */}
        <div className="p-6 mt-4">
          <Link to="/getstarted">
            <button className="w-full bg-[#a74ae8] hover:bg-[#9640d4] text-white px-6 py-4 rounded-lg font-medium transition-colors duration-300 shadow-md flex items-center justify-center gap-2">
              <Rocket className="w-5 h-5" />
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingNavbar;
