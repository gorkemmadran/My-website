import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiBulma } from "react-icons/si";
import { FaGit } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";



<div className='w-[130px] flex items-center justify-center flex-col h-[100px] border border-black '><FaReact className='react text-5xl' /><p>React</p>
</div>










function Skills() {
  return (
    <div className='skilss'>
        <div className='flex justify-between  container mx-auto items-center mt-[60px] mb-[60px]  flex-col '>
            <h2 className='text-3xl font-extrabold'>Skills</h2>
        <div className='flex items-center mt-3'><div className='h-[4px] bg-black w-[140px]'></div><div className='h-[2px]  bg-gray-500 w-[70px]'></div></div> 
            </div>
        <div className='container flex items-center flex-wrap justify-around mt-[40px] mx-auto'>
        <div className='flex items-center justify-center flex-wrap'>
        <div className='w-[130px] m-[5px] flex items-center justify-center flex-col h-[100px] border hover:shadow-xl hover:border-orange-600 hover:shadow-orange-600  border-black '><FaHtml5 className='html text-5xl' /> <p className='font-semibold text-sm mt-1'>HTML</p> </div>
            <div className='w-[130px] m-[5px] flex items-center justify-center flex-col h-[100px] border border-black hover:shadow-xl hover:shadow-blue-600 hover:border-blue-600 '><FaCss3Alt className='css text-5xl' /><p className='font-semibold text-sm mt-1'>Css</p></div>
            <div className='w-[130px] m-[5px] flex items-center justify-center flex-col h-[100px] border border-black hover:shadow-xl hover:shadow-yellow-600 hover:border-yellow-600  '><IoLogoJavascript className='javascript text-5xl' /><p className='font-semibold text-sm mt-1'>Javascript</p></div>
            <div className='w-[130px] m-[5px] flex items-center justify-center flex-col h-[100px] border border-black hover:shadow-xl hover:shadow-cyan-600 hover:border-cyan-600 '><FaReact className='react text-5xl' /><p className='font-semibold text-sm mt-1'>React</p></div>
        </div>
            <div className='flex items-center justify-center flex-wrap'>
            <div className='w-[130px] m-[5px] flex items-center justify-center flex-col h-[100px] border border-black hover:shadow-xl hover:shadow-cyan-600 hover:border-cyan-600 '><RiTailwindCssFill className='tailwind text-5xl' /><p className='font-semibold text-sm mt-1'>TailwindCss</p></div>
            <div className='w-[130px] m-[5px] flex items-center justify-center flex-col h-[100px] border border-black hover:shadow-xl hover:shadow-purple-600 hover:border-purple-600'><FaBootstrap className='bootstrap text-5xl' /><p className='font-semibold text-sm mt-1'>Bootstrap</p></div>
            <div className='w-[130px] m-[5px] flex items-center justify-center flex-col h-[100px] border border-black hover:shadow-xl hover:shadow-purple-600 hover:border-purple-600'><FaFigma className='figma text-5xl' /><p className='font-semibold text-sm mt-1'>Figma</p></div>
            <div className='w-[130px] m-[5px] flex items-center justify-center flex-col h-[100px] border border-black hover:shadow-xl hover:shadow-pink-600 hover:border-pink-600'><FaSass className='sass text-5xl' /><p className='font-semibold text-sm mt-1'>Sass</p></div>
            </div>
            <div className='flex items-center justify-center flex-wrap mt-2 mb-10'>
              <div className='w-[130px] m-[5px] flex items-center justify-center flex-col h-[100px] border border-black hover:shadow-xl hover:shadow-green-600 hover:border-green-600'><SiBulma className='bulma text-5xl' /><p className='font-semibold text-sm mt-1'>Bulma</p></div>
            <div className='w-[130px] flex items-center m-[5px] justify-center flex-col h-[100px] border border-black hover:shadow-xl hover:shadow-orange-600 hover:border-orange-600 '><FaGit className='git text-5xl'  /><p className='font-semibold text-sm mt-1'>Git</p></div>
            <div className='w-[130px] flex items-center m-[5px] justify-center flex-col h-[100px] border border-black hover:shadow-xl hover:shadow-black  hover:border-black'><FaGithub className='github text-5xl' /><p className='font-semibold text-sm mt-1'>Github</p></div>
            <div className='w-[130px]  m-[5px] flex items-center justify-center flex-col h-[100px] border border-black hover:shadow-xl hover:shadow-blue-600 hover:border-blue-600 '><SiVisualstudiocode className='vsc text-5xl' /><p className='font-semibold text-sm mt-1'>VSC</p></div>
            </div>
            
        </div>
    
    </div>
  )
}

export default Skills
