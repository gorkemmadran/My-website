import React, { useState, useContext } from 'react';
import NavbarLogo from './image/Logo.png';
import NavbarDarkLogo from './image/NavbarDarkLogo.png';
import { FaMoon } from "react-icons/fa6";
import { DarkModeContext } from './DarkModeContext';

function Navbar() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [clicked, setClicked] = useState(false);
  const [closeBtnClicked, setCloseBtnClicked] = useState(false);

  const lineClicked = () => {
    setClicked(true);
    setCloseBtnClicked(false);
  };

  const buttonClicked = () => {
    setCloseBtnClicked(true);
    setClicked(false);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      {clicked && !closeBtnClicked ? (
        <div className='navbar-menu-items relative w-[100%] h-[100vh] bg-white dark:bg-black z-50'>
          <ul className='w-[80%] mx-auto block text-center'>
            <li className='pt-2'><a className='menu-item dark:text-white block font-opensans sm:mx-0 mt-12 cursor-pointer my-2 mx-2 px-4'>Home</a></li>
            <li className='pt-2 mt-1'><a className='menu-item dark:text-white block font-opensans sm:mx-0 cursor-pointer my-2 mx-2 px-4'>About Me</a></li>
            <li className='pt-2 mt-1'><a className='menu-item dark:text-white block font-opensans sm:mx-0 cursor-pointer my-2 mx-2 px-4'>Projects</a></li>
            <li className='pt-2 mt-1'><a className='menu-item dark:text-white block font-opensans sm:mx-0 cursor-pointer my-2 mx-2 px-4'>Contact</a></li>
            <div>
              <button onClick={buttonClicked} className='bg-black absolute z-50 top-0 rounded-r-none right-0 text-white w-[50px] rounded h-[42px]'>X</button>
            </div>
          </ul>
        </div>
      ) : (
        <header className='navbar-area flex items-center h-[14vh] dark:h-[14vh] justify-around mx-auto bg-white dark:bg-black'>
          <div className='navbar-logo'>
            <img className='max-w-20' src={darkMode ? NavbarDarkLogo : NavbarLogo} alt="Logo" />
          </div>
          <div className='navbar-menu-items'>
            <ul className='flex items-center xs:hidden sm:text-sm xs:text-sm md:text-sm lg:text-base xl:text-base 2xl:text-base sm:flex sm:mx-0 md:flex lg:flex xl:flex 2xl:flex'>
              <li className='sm:mx-1 md:mx-2 lg:mx-2 xl:mx-2 2xl:mx-2'><a className='menu-item font-sans sm:mx-0 cursor-pointer my-3 px-4 dark:text-white dark:hover:text-gray-300'>Home</a></li>
              <li className='sm:mx-1 md:mx-2 lg:mx-2 xl:mx-2 2xl:mx-2'><a className='menu-item font-sans sm:mx-0 cursor-pointer my-3 px-4 dark:text-white dark:hover:text-gray-300'>About Me</a></li>
              <li className='sm:mx-1 md:mx-2 lg:mx-2 xl:mx-2 2xl:mx-2'><a className='menu-item font-sans sm:mx-0 cursor-pointer my-3 px-4 dark:text-white dark:hover:text-gray-300'>Projects</a></li>
              <li className='sm:mx-1 md:mx-2 lg:mx-2 xl:mx-2 2xl:mx-2'><a className='menu-item font-sans sm:mx-0 cursor-pointer my-3 px-4 dark:text-white dark:hover:text-gray-300'>Contact</a></li>
            </ul>
          </div>
          <div className='navbar-icon xs:hidden sm:block md:block lg:block xl:block 2xl:block'>
            <FaMoon onClick={toggleDarkMode} className='text-[29px] cursor-pointer dark:text-white' />
          </div>
          <div onClick={lineClicked} className='cursor-pointer line xs:block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden'>
            <div className='w-[25px] bg-black h-[2px] mt-[7px] dark:bg-white'></div>
            <div className='w-[25px] bg-black h-[2px] mt-[7px] dark:bg-white'></div>
            <div className='w-[25px] bg-black h-[2px] mt-[7px] dark:bg-white'></div>
          </div>
        </header>
      )}
    </div>
  );
}

export default Navbar;
