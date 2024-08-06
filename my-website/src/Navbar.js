import React, { useState, useContext } from 'react';
import NavbarLogo from './image/Logo.png';
import NavbarDarkLogo from './image/NavbarDarkLogo.png';
import { FaMoon } from "react-icons/fa6";
import { DarkModeContext } from './DarkModeContext';
import { motion } from "framer-motion"

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

  const logoVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { duration: 1, ease: "easeOut" } 
    },
  };

  const moonIconVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { duration: 1, ease: "easeOut" } 
    }
  };

  const liItems1 = {
    hidden: { 
      opacity: 0,
      y: -100,
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 1.3, ease: "easeOut" }
    }
  };
  const liItems2 = {
    hidden: { 
      opacity: 0,
      y: -100,
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" }
    }
  };
  const liItems3 = {
    hidden: { 
      opacity: 0,
      y: -100,
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 1.7, ease: "easeOut" }
    }
  };
  const liItems4 = {
    hidden: { 
      opacity: 0,
      y: -100,
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 2, ease: "easeOut" }
    }
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      {clicked && !closeBtnClicked ? (
        <div className='navbar-menu-items relative w-[100%] h-[100vh] bg-white dark:bg-black z-50'>
          <ul className='w-[80%] mx-auto block text-center'>
            <li  className='pt-2'>
              <motion.a animate="visible" initial="hidden" variants={liItems2} className='menu-item dark:text-white block font-opensans sm:mx-0 mt-12 cursor-pointer my-2 mx-2 px-4'>Home</motion.a>
            </li>
            <li  className='pt-2 mt-1'>
              <motion.a animate="visible" initial="hidden" variants={liItems2} className='menu-item dark:text-white block font-opensans sm:mx-0 cursor-pointer my-2 mx-2 px-4'>About Me</motion.a>
            </li>
            <li  className='pt-2 mt-1'>
              <motion.a animate="visible" initial="hidden" variants={liItems3}  className='menu-item dark:text-white block font-opensans sm:mx-0 cursor-pointer my-2 mx-2 px-4'>Projects</motion.a>
            </li>
            <li className='pt-2 mt-1'>
              <motion.a animate="visible" initial="hidden" variants={liItems4}  className='menu-item dark:text-white block font-opensans sm:mx-0 cursor-pointer my-2 mx-2 px-4'>Contact</motion.a>
            </li>
            <div>
              <button onClick={buttonClicked} className='bg-black absolute z-50 top-0 rounded-r-none right-0 text-white w-[50px] rounded h-[42px]'>X</button>
            </div>
          </ul>
        </div>
      ) : (
        <header className='navbar-area flex items-center h-[14vh] dark:h-[14vh] justify-around mx-auto bg-white dark:bg-black'>
          <motion.div initial="hidden" animate="visible" variants={logoVariants} className='navbar-logo'>
            <img className='max-w-20' src={darkMode ? NavbarDarkLogo : NavbarLogo} alt="Logo" />
          </motion.div>
          <div className='navbar-menu-items'>
            <ul className='flex items-center xs:hidden sm:text-sm xs:text-sm md:text-sm lg:text-base xl:text-base 2xl:text-base sm:flex sm:mx-0 md:flex lg:flex xl:flex 2xl:flex'>
              <motion.li animate="visible" initial="hidden" variants={liItems1} className='sm:mx-1 md:mx-2 lg:mx-2 xl:mx-2 2xl:mx-2'>
                <a className='menu-item font-sans sm:mx-0 cursor-pointer my-3 px-4 dark:text-zinc-300 dark:hover:text-white'>Home</a>
              </motion.li>
              <motion.li animate="visible" initial="hidden" variants={liItems2}className='sm:mx-1 md:mx-2 lg:mx-2 xl:mx-2 2xl:mx-2'>
                <a className='menu-item font-sans sm:mx-0 cursor-pointer my-3 px-4 dark:text-zinc-300 dark:hover:text-white'>About Me</a>
              </motion.li>
              <motion.li animate="visible" initial="hidden" variants={liItems3} className='sm:mx-1 md:mx-2 lg:mx-2 xl:mx-2 2xl:mx-2'>
                <a className='menu-item font-sans sm:mx-0 cursor-pointer my-3 px-4 dark:text-zinc-300 dark:hover:text-white'>Projects</a>
              </motion.li>
              <motion.li animate="visible" initial="hidden" variants={liItems4} className='sm:mx-1 md:mx-2 lg:mx-2 xl:mx-2 2xl:mx-2'>
                <a className='menu-item font-sans sm:mx-0 cursor-pointer my-3 px-4 dark:text-zinc-300 dark:hover:text-white'>Contact</a>
              </motion.li>
            </ul>
          </div>
          <motion.div initial="hidden" animate="visible" variants={moonIconVariants} className='navbar-icon xs:hidden sm:block md:block lg:block xl:block 2xl:block'>
            <FaMoon onClick={toggleDarkMode} className='text-[29px] cursor-pointer dark:text-white' />
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={moonIconVariants} onClick={lineClicked} className='cursor-pointer line xs:block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden'>
            <div className='w-[25px] bg-black h-[2px] mt-[7px] dark:bg-white'></div>
            <div className='w-[25px] bg-black h-[2px] mt-[7px] dark:bg-white'></div>
            <div className='w-[25px] bg-black h-[2px] mt-[7px] dark:bg-white'></div>
          </motion.div>
        </header>
      )}
    </div>
  );
}

export default Navbar;
