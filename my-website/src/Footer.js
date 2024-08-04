import React from 'react'
import { DarkModeContext } from './DarkModeContext';
import { useContext } from 'react';

function Footer() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? 'dark' :'' }>
      <div className='footer flex items-center justify-center bg-black w-full  text-center h-[80px] text-white dark:bg-zinc-200  '>
      <p className='text-zinc-300 dark:text-black'>Created By Görkem Madran</p>
    </div>

    </div>
    
  )
}

export default Footer
