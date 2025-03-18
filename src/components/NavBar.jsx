import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className='mb-5'>
        <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-5">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            PLAYTOPIA
          </span>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" className="btn">
              Get started
            </button>
            <button
              type="button"
              onClick={toggleMobileMenu} 
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

    
          <div
            className={`items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ${
              isMobileMenuOpen ? 'block' : 'hidden'
            }`}
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 pr-1 mt-4 border border-gray-200 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <Link to="/">
                <li className="li">Home</li>
              </Link>

              <Link to="/games">
                <li className="li">Games</li>
              </Link>

              <Link to="/memento">
                <li className="li">About</li>
              </Link>
            </ul>
          </div>


          <div
            className={`md:hidden ${
              isMobileMenuOpen ? 'block' : 'hidden'
            } w-full absolute bg-white z-50 mt-5`}
          >
            <ul className="flex flex-col text-black font-medium p-4 md:p-0 mt-4 border border-gray-200 rounded-lg">
              <Link to="/">
                <li className="li">Home</li>
              </Link>

              <Link to="/games">
                <li className="li">Games</li>
              </Link>

              <Link to="/memento">
                <li className="li">About</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
