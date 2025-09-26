import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('Home');

  const menuItems = ['Home', 'About', 'Technology', 'Experience', 'Projects', 'Contact'];

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Clean up when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      {/* Navbar always on top */}
      <div className="px-5 md:px-22 w-full flex justify-between items-center h-16 text-white fixed bg-gradient-to-r from-slate-900 via-slate-950 to-gray-900 z-50">
        {/* Logo */}
        <div>
          <h1 className="text-5xl font-DancingScript ml-2 font-extrabold bg-gradient-to-r from-green-200 via-green-400 to-purple-700 text-transparent bg-clip-text">
            Vivek
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <li
              key={item}
              className={`relative text-lg font-medium font-Playfair transition-all duration-150 cursor-pointer ${
                active === item
                  ? 'text-teal-400'
                  : 'text-gray-500 hover:text-teal-400'
              }`}
              onClick={() => setActive(item)}
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
              {active === item && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-green-200 via-green-400 to-purple-700 rounded-full"></span>
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer pr-4 md:hidden text-gray-500 z-50">
          {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-900 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-40 flex items-center justify-center`}
      >
        <ul className="flex flex-col items-center gap-10">
          {menuItems.map((item) => (
            <li
              key={item}
              onClick={() => {
                setActive(item);
                setIsOpen(false);
              }}
              className="relative text-[20px] font-Playfair transition-all text-center cursor-pointer"
            >
              <a
                href={`#${item.toLowerCase()}`}
                className={`block relative px-2 ${
                  active === item
                    ? 'text-teal-400'
                    : 'text-gray-300 hover:text-teal-400'
                }`}
              >
                {item}
                {active === item && (
                  <span className="block absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-green-200 via-green-400 to-purple-700 rounded-full"></span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
