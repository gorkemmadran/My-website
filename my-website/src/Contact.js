import React from 'react'
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { DarkModeContext } from './DarkModeContext';
import { useContext } from 'react';


function Contact() {
    const { darkMode } = useContext(DarkModeContext);

  return (
    <div id='contact' className={darkMode ? 'dark' : ''}>
    <div className='contact pt-[65px] pb-[65px] dark:bg-black '>
        <div className='container mx-auto flex items-center justify-around '>
        <div className='contact-title xs:flex xs:items-center xs:justify-around xs:flex-col xs:mt-[30px] sm:flex sm:items-center sm:justify-around sm:flex-col sm:mt-[30px] md:flex md:items-center md:justify-center md:flex-col md:mt-[30px] lg:block xl:block 2xl:block  '>
            <h2 className='text-3xl font-extrabold dark:text-zinc-200'>Get In Touch</h2>
        <div className='flex items-center mt-3'><div className='h-[4px] bg-black w-[140px] dark:bg-white'></div><div className='h-[2px]  bg-gray-500 dark:bg-gray-500 w-[70px]'></div></div> 
            </div>
        </div>
        <div className='container mx-auto  pt-7 flex justify-around xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row'>
            <div className='flex items-center justify-evenly   flex-col'>
                <p className='  text-gray-800 xs:pt-5 sm:pt-5 md:pt-5 lg:p-0 xl:p-0 2xl:p-0 text-sm xs:leading-5 sm:leading-5 md:leading-5 lg:leading-5 xl:leading-6 2xl:leading-6  xs:text-xs sm:text-xs md:text-base lg:text-base xl:text-base 2xl:text-base  dark:text-zinc-300'>100 Main St, Blacktown NSW 2148, <br/>Australia</p>
                <p className='  text-gray-800 xs:pt-5 sm:pt-5 md:pt-5 lg:p-0 xl:p-0 2xl:p-0 text-sm xs:leading-5 sm:leading-5 md:leading-5 lg:leading-5 xl:leading-6 2xl:leading-6  xs:text-xs sm:text-xs md:text-base lg:text-base xl:text-base 2xl:text-base dark:text-zinc-300'>support@bold.com, info@youremail.com</p>
                <p className='  text-gray-800 xs:pt-5 sm:pt-5 md:pt-5 lg:p-0 xl:p-0 2xl:p-0 text-sm xs:leading-5 sm:leading-5 md:leading-5 lg:leading-5 xl:leading-6 2xl:leading-6  xs:text-xs sm:text-xs md:text-base lg:text-base xl:text-base 2xl:text-base  dark:text-zinc-300'>+256-4516-556, +(257) 56812749</p>
                <div className='flex items-center  mt-4 '><p className='font-bold text-lg mr-[7px] dark:text-white'>Social :</p><FaSquareGithub className='mr-[10px] text-xl rounded-full dark:text-white' /> <FaLinkedin className='mr-[7px] cursor-pointer text-xl rounded-full dark:text-white' /> <FaTwitter className='mr-[7px] cursor-pointer text-xl rounded-full  dark:text-white' /> <FaInstagramSquare className='mr-[7px] cursor-pointer text-xl rounded-full dark:text-white' />
  </div>

            </div>
            <div className='xs:pt-10 sm:pt-10 md:pt-10  '>
                <div>
                    <input className='xs:m-0 xs:w-[100%] sm:m-0 sm:w-[100%]   placeholder:text-sm outline-none text-black  border-b-2 border-b-gray-600 p-4   w-[270px]  mr-3 dark:bg-transparent dark:border-b-2 dark:text-zinc-200 text-sm' typeof='text' placeholder='Name Here*'></input>
                    <input className='xs:m-0 xs:w-[100%] sm:m-0 sm:w-[100%]    placeholder:text-sm outline-none text-black  border-b-2 border-b-gray-600 p-4  w-[270px]  ml-3 dark:bg-transparent dark:border-b-2 dark:text-zinc-200  text-sm ' typeof='email' placeholder='Surname Here*'></input>
                </div>
                <textarea className='placeholder:text-sm text-black  border-b-2 border-b-gray-600 p-4 h-[200px] outline-none  w-full mt-5  border-black dark:bg-transparent dark:border-b-2 dark:text-zinc-200 text-sm' placeholder='Message Here*'></textarea>
                <div className='flex items-center justify-end'>
                <button className='bg-black w-[145px] h-[44px] mt-3 hover:border hover:border-black hover:text-black hover:bg-transparent  text-white dark:border dark:border-white dark:hover:bg-white dark:hover:text-black duration-700'>Send Message</button>
                </div>
            </div>

        </div>
      
    </div>
    </div>
  )
}

export default Contact
