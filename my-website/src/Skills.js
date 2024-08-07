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
import { DarkModeContext } from './DarkModeContext';
import { useContext } from 'react';
import { FaGithub } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";
import { SiVite } from "react-icons/si";
import {motion} from "framer-motion"




const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}
  
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}






function Skills() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  
  return (
    <div className={darkMode ? 'dark bg-black' : ''}>
        <div className='flex justify-between  container mx-auto items-center pt-[60px] mb-[60px]  flex-col '>
            <h2 className='text-3xl dark:text-zinc-200 font-extrabold'>Skills</h2>
        <div className='flex items-center mt-3'><div className='h-[4px] bg-black dark:bg-white  w-[140px]'></div><div className='h-[2px]  bg-gray-500 dark:bg-gray-500 w-[70px]'></div></div> 
            </div>
        <motion.div initial="hidden" animate="visible" variants={container} className='container flex items-center flex-wrap justify-around mt-[40px] mx-auto'>
        <div className='flex items-center justify-center flex-wrap'>
            <motion.div initial="hidden" animate="visible" variants={item} className='w-[130px] m-[5px] flex items-center justify-center flex-col h-[100px] border hover:shadow-xl hover:border-orange-600 hover:shadow-orange-600  border-black '><FaHtml5 className='html text-5xl' /> <p className='font-semibold text-sm mt-1 dark:text-zinc-300'>HTML</p> </motion.div>
            <motion.div initial="hidden" animate="visible" variants={item} className='w-[130px] m-[5px] flex items-center justify-center flex-col h-[100px] border border-black hover:shadow-xl hover:shadow-blue-600 hover:border-blue-600 '><FaCss3Alt className='css text-5xl' /><p className='font-semibold text-sm mt-1 dark:text-zinc-300'>Css</p></motion.div>
            <motion.div initial="hidden" animate="visible" variants={item} className='w-[130px] m-[5px] flex items-center justify-center flex-col h-[100px] border border-black hover:shadow-xl hover:shadow-yellow-600 hover:border-yellow-600  '><IoLogoJavascript className='javascript text-5xl' /><p className='font-semibold text-sm mt-1 dark:text-zinc-300'>Javascript</p></motion.div>
            <motion.div initial="hidden" animate="visible" variants={item} className='w-[130px] m-[5px] flex items-center justify-center flex-col h-[100px] border border-black hover:shadow-xl hover:shadow-cyan-600 hover:border-cyan-600 '><FaReact className='react text-5xl' /><p className='font-semibold text-sm mt-1 dark:text-zinc-300'>React</p></motion.div>
        </div>
            <div className='flex items-center justify-center flex-wrap'>
            <motion.div initial="hidden" animate="visible" variants={item} className='w-[130px] m-[5px] flex items-center justify-center flex-col h-[100px] border border-black hover:shadow-xl hover:shadow-cyan-600 hover:border-cyan-600 '><RiTailwindCssFill className='tailwind text-5xl' /><p className='font-semibold text-sm mt-1 dark:text-zinc-300'>TailwindCss</p></motion.div>
            <motion.div initial="hidden" animate="visible" variants={item} className='w-[130px] m-[5px] flex items-center justify-center flex-col h-[100px] border border-black hover:shadow-xl hover:shadow-purple-600 hover:border-purple-600'><FaBootstrap className='bootstrap text-5xl' /><p className='font-semibold text-sm mt-1 dark:text-zinc-300'>Bootstrap</p></motion.div>
            <motion.div initial="hidden" animate="visible" variants={item} className='w-[130px] m-[5px] flex items-center justify-center flex-col h-[100px] border border-black hover:shadow-xl hover:shadow-purple-600 hover:border-purple-600'><FaFigma className='figma text-5xl' /><p className='font-semibold text-sm mt-1 dark:text-zinc-300'>Figma</p></motion.div>
            <motion.div initial="hidden" animate="visible" variants={item} className='w-[130px] m-[5px] flex items-center justify-center flex-col h-[100px] border border-black hover:shadow-xl hover:shadow-pink-600 hover:border-pink-600'><FaSass className='sass text-5xl' /><p className='font-semibold text-sm mt-1 dark:text-zinc-300'>Sass</p></motion.div>
            </div>
            <div className='flex items-center justify-center flex-wrap mt-2 mb-10'>
            <motion.div initial="hidden" animate="visible" variants={item} className='w-[130px] m-[5px] flex items-center justify-center flex-col h-[100px] border border-black hover:shadow-xl hover:shadow-green-600 hover:border-green-600'><SiBulma className='bulma text-5xl' /><p className='font-semibold text-sm mt-1 dark:text-zinc-300'>Bulma</p></motion.div>
            <motion.div initial="hidden" animate="visible" variants={item} className='w-[130px] flex items-center m-[5px] justify-center flex-col h-[100px] border border-black hover:shadow-xl hover:shadow-orange-600 hover:border-orange-600 '><FaGit className='git text-5xl'  /><p className='font-semibold text-sm mt-1 dark:text-zinc-300'>Git</p></motion.div>
            <motion.div initial="hidden" animate="visible" variants={item} className='w-[130px] flex items-center m-[5px] justify-center flex-col h-[100px] border border-black hover:shadow-xl hover:shadow-black dark:hover:shadow-white dark:hover:border-white  hover:border-black'><FaGithub className='github text-5xl' /><p className='font-semibold text-sm mt-1 dark:text-white'>Github</p></motion.div>
            <motion.div initial="hidden" animate="visible" variants={item} className='w-[130px]  m-[5px] flex items-center justify-center flex-col h-[100px] border border-black hover:shadow-xl hover:shadow-green-600  hover:border-green-600 '><SiVite className='vite text-5xl' /><p className='font-semibold text-sm mt-1 dark:text-zinc-300'>Vite</p></motion.div>

            <motion.div initial="hidden" animate="visible" variants={item} className='w-[130px]  m-[5px] flex items-center justify-center flex-col h-[100px] border border-black hover:shadow-xl hover:shadow-blue-600  hover:border-blue-600 '><SiVisualstudiocode className='vsc text-5xl' /><p className='font-semibold text-sm mt-1 dark:text-zinc-300 '>VSC</p></motion.div>
            </div>
            
        </motion.div>
    
    </div>
  )
}

export default Skills
