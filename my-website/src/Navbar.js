import React from 'react'
import NavbarLogo from './image/Logo.png'
import { FaMoon } from "react-icons/fa6";

function Navbar() {
  return (
    <header className='navbar-area container flex items-center justify-between mx-auto '>
        <div className='navbar-logo'>
            <img className='max-w-20' src={NavbarLogo}></img>

        </div>
        <div className='navbar-menu-items'>
            <ul className='flex items-center xs:hidden sm:flex sm:mx-0 md:flex lg:flex xl:flex 2xl:flex '>
                <li><a className='menu-item font-opensans sm:mx-0  cursor-pointer my-3 mx-2 px-4'>Home</a></li>
                <li><a className=' menu-item font-opensans sm:mx-0  cursor-pointer my-3 mx-2 px-4'>About Me</a></li>
                <li><a className=' menu-item font-opensans sm:mx-0  cursor-pointer my-3 mx-2 px-4'>Projects</a></li>
                <li><a className='menu-item font-opensans sm:mx-0  cursor-pointer my-3 mx-2 px-4'>Skills</a></li>
                <li><a className='menu-item font-opensans sm:mx-0  cursor-pointer my-3 mx-2 px-4'>Contact</a></li>
            </ul>
        </div>
        <div className='navbar-icon xs:hidden sm:block md:block lg:block xl:block 2xl:block'>
                <FaMoon className='text-[29px] cursor-pointer' />
            

        </div>
        <div className='cursor-pointer line xs:block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden'>
                <div className='w-[25px]  bg-black h-[2px] mt-[7px]'></div>
                <div className='w-[25px] bg-black h-[2px] mt-[7px]'></div>
                <div className='w-[25px] bg-black h-[2px] mt-[7px]'></div>

                </div>
      
    </header>
  )
}

export default Navbar