import React from 'react'
import { FaLongArrowAltDown } from "react-icons/fa";



function Cv() {
  return (
    <div className='bg-black flex items-center justify-center flex-col h-[27vh]'>
      
      <h2 className='text-white text-xl mt-2'>Download My CV</h2>
      <p className='text-zinc-400 mt-2 text-sm'>İf you would like to learn more about my professional background, please feel free to download and review my CV.</p>
      <div className='flex mt-2'>
      <FaLongArrowAltDown className='text-white arrow text-4xl' />
      <FaLongArrowAltDown className='text-white arrow  text-4xl' />
      <FaLongArrowAltDown className='text-white arrow text-4xl' />
      </div>
      

      <div className='mt-4'><button className='bg-transparent text-white border text-sm cursor-pointer border-white w-[125px] h-[34px]'>English Cv</button> <button className='bg-transparent text-white border text-sm cursor-pointer border-white w-[125px] h-[34px]'>Turkish Cv</button></div>

    </div>
  )
}

export default Cv
