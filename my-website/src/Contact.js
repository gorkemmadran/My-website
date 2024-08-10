import React from 'react';
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { DarkModeContext } from './DarkModeContext';
import { useContext } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";




function Contact() {
    const { darkMode } = useContext(DarkModeContext);

  return (
    <div id='contact' className={darkMode ? 'dark' : ''}>
        <div className='contact pt-[65px] pb-[65px] dark:bg-black '>
            <div className='container mx-auto flex items-center justify-around'>
            <div className='xs:flex xs:items-center xs:justify-center xs:flex-col  sm:flex sm:items-center sm:justify-center sm:flex-col md:flex md:items-center md:justify-center md:flex-col  lg:flex lg:items-center lg:justify-center xl:flex xl:justify-center xl:items-center 2xl:flex 2xl:items-center 2xl:justify-center  '>
        <h2 className='text-3xl font-extrabold dark:text-zinc-200'>Contact</h2>
        <div className='flex items-center  mt-3'>
          <div className='h-[4px] bg-black dark:bg-white w-[140px]'></div>
          <div className='h-[2px] bg-gray-500 dark:bg-gray-500 w-[70px]'></div>
        </div>
      </div>
            </div>
            <div className='container mx-auto pt-7 flex justify-around xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row'>
                <div className='flex  justify-evenly flex-col'>
                    <div className='flex  justify-center flex-col xs:flex xs:items-center xs:justify-center  sm:flex sm:items-center sm:justify-center  md:flex md:items-center md:justify-center'>
                    <h3 className='text-xl text-gray-700 dark:text-gray-200'>Hey There,</h3>
                    <h1 className='text-[38px] dark:text-white'>Let's Get In Touch</h1>
                    </div>
                    <div className='flex  mx-auto flex-col xs:mt-4'>
                    <div className='flex xs:flex xs:items-center mt-2 '>
                    <FaLocationDot style={{fontSize : '40px', borderRadius : '30px', marginRight :'13px', background : 'black', color : 'white', padding : '10px'}} />
                    <p className='text-gray-800  text-sm xs:leading-5 sm:leading-5 md:leading-5 lg:leading-5 xl:leading-6 2xl:leading-6 xs:text-xs sm:text-xs md:text-base lg:text-base xl:text-base 2xl:text-base dark:text-zinc-300'>
                        Based in Izmir, Turkey
                    </p>
                    </div>
                    <div className='flex xs:flex xs:items-center mt-2    '>
                    <IoIosMail style={{fontSize : '40px', borderRadius : '30px', marginRight :'13px', background : 'black', color : 'white', padding : '10px'}} />
                    <p className='text-gray-800 text-sm xs:leading-5 sm:leading-5 md:leading-5 lg:leading-5 xl:leading-6 2xl:leading-6 xs:text-xs sm:text-xs md:text-base lg:text-base xl:text-base 2xl:text-base dark:text-zinc-300'>
                        gorkemmadran@hotmail.com
                    </p>
                    </div>
                    <div className='flex xs:flex xs:items-center mt-2  '>
                    <FaPhoneAlt style={{fontSize : '40px', marginRight :'13px', borderRadius : '30px', background : 'black', color : 'white', padding : '10px'}} />
                    <p className='text-gray-800 text-sm xs:leading-5 sm:leading-5 md:leading-5 lg:leading-5 xl:leading-6 2xl:leading-6 xs:text-xs sm:text-xs md:text-base lg:text-base xl:text-base 2xl:text-base dark:text-zinc-300'>
                        +90 507-938-98-00
                    </p>
                    </div>
                    </div>
                   
                    
                    <div className='flex items-center mt-4 xs:mt-8 mx-auto'>
                        <p className='font-bold text-lg mr-[7px] dark:text-white'>Social :</p>
                        <FaSquareGithub className='mr-[10px] text-2xl rounded-full dark:text-white' />
                        <FaLinkedin className='mr-[7px] cursor-pointer text-2xl rounded-full dark:text-white' />
                        <FaTwitter className='mr-[7px] cursor-pointer text-2xl rounded-full dark:text-white' />
                        <FaInstagramSquare className='mr-[7px] cursor-pointer text-2xl rounded-full dark:text-white' />
                    </div>
                </div>
                <div className='xs:pt-10 sm:pt-10 md:pt-10 xs:mx-auto sm:mx-auto md:mx-auto lg:mx-0 xl:mx-0 2xl:mx-0'>
                    <div>
                        <input className='xs:m-0 xs:w-[100%] sm:m-0 sm:w-[100%] placeholder:text-sm outline-none text-black border-b-2 border-b-gray-600 p-4 w-[270px] mr-3 dark:bg-transparent dark:border-b-2 dark:text-zinc-200 text-sm' type='text' placeholder='Name Here*'></input>
                        <input className='xs:m-0 xs:w-[100%] sm:m-0 sm:w-[100%] placeholder:text-sm outline-none text-black border-b-2 border-b-gray-600 p-4 w-[270px] ml-3 dark:bg-transparent dark:border-b-2 dark:text-zinc-200 text-sm' type='email' placeholder='Surname Here*'></input>
                    </div>
                    <textarea className='placeholder:text-sm text-black border-b-2 border-b-gray-600 p-4 h-[200px] outline-none w-full mt-5 border-black dark:bg-transparent dark:border-b-2 dark:text-zinc-200 text-sm' placeholder='Message Here*'></textarea>
                    <div className='flex items-center justify-end'>
                        <button className='bg-black w-[145px] h-[44px] mt-3 hover:border hover:border-black hover:text-black hover:bg-transparent text-white dark:border dark:border-white dark:hover:bg-white dark:hover:text-black duration-700'>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Contact;
