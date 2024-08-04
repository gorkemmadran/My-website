import React from 'react'
import { FaLongArrowAltDown } from "react-icons/fa";
import { DarkModeContext } from './DarkModeContext';
import { useContext } from 'react';



function Cv() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? 'dark' : ''}>
    <div className='bg-black flex items-center justify-center flex-col h-[27vh] dark:bg-gray-500'>
      <h2 className='text-white text-xl mt-2 dark:text-black'>Download My CV</h2>
      <p className='text-zinc-400 mt-2 text-sm text-center'>İf you would like to learn more about my professional background, please feel free to download and review my CV.</p>
      <div className='flex mt-2'>
      <FaLongArrowAltDown className='text-white arrow text-4xl dark:text-black' />
      <FaLongArrowAltDown className='text-white arrow  text-4xl dark:text-black' />
      <FaLongArrowAltDown className='text-white arrow text-4xl dark:text-black' />
      </div>
      <div className='mt-4'><button className='bg-transparent text-white border text-sm cursor-pointer border-white w-[125px] h-[34px] dark:border-black dark:text-black'>English Cv</button> <button className='bg-transparent text-white border text-sm cursor-pointer border-white w-[125px] h-[34px] dark:border-black dark:text-black'>Turkish Cv</button></div>
    </div>
    </div>
  )
}

export default Cv
