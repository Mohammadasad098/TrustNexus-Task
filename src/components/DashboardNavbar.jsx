import React, { useState, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import { Search, Menu, X, LogOut } from "lucide-react"

const DashboardNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showMobileSearch, setShowMobileSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const navbarRef = useRef(null)
  const location = useLocation()
  const pathname = location.pathname

  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)
  const toggleMobileSearch = () => setShowMobileSearch((prev) => !prev)

  const handleSearch = (e) => {
    e.preventDefault()
    console.log("Searching for:", searchQuery)
  }

  const handleLogout = () => {
    window.location.href = "/getstarted"
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeMenu()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/project", label: "Project" },
    { to: "/profile", label: "Profile" },
    
  ]

  const isActive = (href) => pathname === href

  return (
    <div className="navbar-wrapper">

      <nav className="fixed top-0 left-0 w-full z-50 bg-[#ebedf7] shadow-md">
        <div className="container px-6 py-0 md:py-0 mx-auto">


          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-3 md:items-center md:gap-8 w-full">
            {/* Logo */}
            <div className="flex justify-start">
              <Link to="/">
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  className="w-[120px] h-auto object-contain cursor-pointer hover:scale-110 hover:rotate-3 transition-all duration-300 ease-in-out"
                />
              </Link>
            </div>

            {/* Nav Links */}
            <div className="flex justify-center">
              <div className="flex space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`relative text-lg font-medium transition-colors duration-300 pb-2 group ${isActive(link.to) ? "text-[#a74ae8]" : "text-gray-700 hover:text-[#a74ae8]"
                      }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 h-1 bg-[#a74ae8] transition-all duration-300 ease-out ${isActive(link.to) ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                    ></span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Search + Logout */}
            <div className="flex justify-end">
              <div className="flex items-center space-x-4">
                <form onSubmit={handleSearch} className="relative">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-2.5 w-48 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a74ae8] focus:border-transparent text-gray-700 bg-white"
                    />
                  </div>
                </form>
                <button
                  onClick={handleLogout}
                  className="bg-[#a74ae8] hover:bg-[#9640d4] text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-colors duration-300 shadow-md hover:shadow-lg whitespace-nowrap flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden items-center justify-between w-full">
            <button
              onClick={toggleMenu}
              className="relative w-[42px] h-[42px] rounded-md border-2 border-[#a74ae8] overflow-hidden shadow-md bg-gradient-to-br from-pink-400 to-purple-600"
            >
              <Menu className="relative z-10 w-6 h-6 text-white m-auto" />
            </button>

            <div className="flex-1 flex justify-center">
              <Link to="/">
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  className="w-[100px] h-auto object-contain cursor-pointer hover:scale-110 hover:rotate-3 transition-all duration-300 ease-in-out"
                />
              </Link>
            </div>

            <button
              onClick={toggleMobileSearch}
              className="relative w-[42px] h-[42px] rounded-md border-2 border-[#a74ae8] overflow-hidden shadow-md bg-gradient-to-br from-pink-400 to-purple-600"
            >
              <Search className="relative z-10 w-5 h-5 text-white m-auto" />
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div
          className={`md:hidden bg-white border-t border-gray-200 transition-all duration-300 ease-in-out overflow-hidden ${showMobileSearch ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="px-6 py-4">
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a74ae8] focus:border-transparent text-gray-700"
                />
              </div>
            </form>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-[96px] md:h-[104px]"></div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[85%] max-w-[360px] bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
          } overflow-y-auto`}
        ref={navbarRef}
      >
        <div className="p-4 flex justify-end items-center border-b border-gray-200">
          <button onClick={closeMenu} className="text-gray-500 hover:text-gray-700 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="px-6 py-8 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className={`relative block text-lg font-medium transition-colors duration-300 pb-2 group ${isActive(link.to) ? "text-[#a74ae8]" : "text-gray-700 hover:text-[#a74ae8]"
                }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#a74ae8] transition-all duration-300 ease-out ${isActive(link.to) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
              ></span>
            </Link>
          ))}
        </div>

        <div className="px-6 pb-8">
          <button
            onClick={handleLogout}
            className="w-full bg-[#a74ae8] hover:bg-[#9640d4] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 shadow-md text-base flex items-center justify-center gap-2"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>

        <div className="px-6 pb-6 border-t border-gray-200 pt-6">
          <p className="text-gray-500 text-sm text-center">© 2024 Your Portfolio. All rights reserved.</p>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-transparent z-40 md:hidden"
          onClick={closeMenu}
        ></div>
      )}

    </div>
  )
}

export default DashboardNavbar
