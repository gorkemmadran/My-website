import React from 'react'
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { DarkModeContext } from './DarkModeContext';
import { useContext } from 'react';
import { motion } from 'framer-motion'


const aboutText = {
  hidden : {opacity : 0, scale : 0.3},
  visible : {opacity : 1, scale : 1,
  transition: { duration: 0.6, ease: "easeOut" }}
}

const iconEffect1 ={
 hidden : {opacity : 0, scale : 0.5},
 visible : {scale : 1, opacity :1,transition: { duration: 0.6, ease: "easeOut" } } 
}
const aboutImg = {
  hidden : {opacity : 0, scale : 0.5,},
  visible : {scale : 1, opacity :1, transition: { duration: 0.6, ease: "easeOut" } } 


}

function Aboutme() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <section id='about' className={darkMode ? 'dark bg-black duration-700  ' : ''}>
        <div className='container h-[100vh] xs:block sm:block md:flex lg:flex xl:flex 2xl:flex mx-auto pt-20 flex items-center justify-around flex-wrap '>
        <motion.div initial="hidden" animate="visible" variants={aboutImg} className='bg-black dark:bg-white shadow-2xl xs:w-[100%] xs:h-[30vh] sm:w-[100%] sm:h-[40vh] md:w-[90%] md:mx-auto md:h-[50vh] lg:h-[75vh] lg:w-[380px] xl:h-[480px] xl:w-[380] 2xl:h-[480px] 2xl:w-[380]  shadow-black rounded-md w-[380px] flex items-center justify-center h-[480px]'>
            <p>İmage Gelecek </p>
        </motion.div>
        <div className=' w-[600px]  xs:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[500px] xl:w-[600px] 2xl:w-[600px]   '>
            <div className='xs:flex xs:items-center xs:justify-center xs:flex-col xs:mt-[30px] sm:flex sm:items-center sm:justify-center sm:flex-col sm:mt-[30px] md:flex md:items-center md:justify-center md:flex-col md:mt-[30px] lg:block xl:block 2xl:block  '>
            <h2 className='text-3xl font-extrabold dark:text-zinc-300'>About Me</h2>
        <div className='flex items-center mt-3'><div className='h-[4px] dark:bg-white bg-black w-[140px]'></div><div className='h-[2px] bg-gray-500 dark:bg-gray-500 w-[70px]'></div></div> 
            </div>
        
        <motion.div initial="hidden" animate="visible" variants={aboutText} className='flex w-[100%] items-center justify-center flex-col '>
        <p className='mt-4 dark:text-gray-500  text-gray-800 text-sm xs:leading-5 sm:leading-5 md:leading-5 lg:leading-5 xl:leading-6 2xl:leading-6  xs:text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-sm '>Hello! My name is Görkem Madran, and I live in Izmir, Turkey. For the past two years, I have dedicated myself to developing my skills in front-end development. During this time, I have made significant progress with technologies such as <span className='bold dark:text-white dark:font-bold'>HTML</span>, <span className='bold dark:text-white dark:font-bold'>CSS</span>, <span className='bold dark:text-white dark:font-bold'>Javascript</span>, <span className='bold dark:text-white dark:font-bold'>React</span>, <span className='bold dark:text-white dark:font-bold'>Tailwind CSS</span>,  <span className='bold dark:text-white dark:font-bold'>Bootstrap</span>, <span className='bold dark:text-white dark:font-bold'>SASS</span>, <span className='bold dark:text-white dark:font-bold'>SCSS</span>, <span className='bold dark:text-white dark:font-bold'>Material UI</span> and <span className='bold dark:text- dark:font-bold'>Figma</span>. </p>
        <p className='mt-4 dark:text-gray-500  text-gray-800 text-sm xs:leading-5 sm:leading-5 md:leading-5 lg:leading-5 xl:leading-6 2xl:leading-6  xs:text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-sm'>Currently, I am primarily focused on working with React and continually enhancing my expertise in this area. As a creative and solution-oriented front-end developer, I take great pleasure in creating user-friendly and aesthetically pleasing websites and applications using modern web technologies. My attention to detail and passion for coding drive me to achieve the best results in every project. </p>
        <p className='mt-4 dark:text-gray-500  text-gray-800 text-sm xs:leading-5 sm:leading-5 md:leading-5 lg:leading-5 xl:leading-6 2xl:leading-6  xs:text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-sm'>Additionally, I am highly skilled in responsive design and have experience in creating websites that perform flawlessly across all devices.
        If you are looking for a dynamic team member to work on creative and innovative projects, I would be thrilled to connect with you. Reach out to me, and let's achieve great things together!</p>
        </motion.div>
        
        <motion.div initial="hidden" animate="visible" variants={iconEffect1} className='flex items-center dark:text-gray-200 mt-4'>
          <p className='font-bold text-lg mr-[7px]'>Social :</p>
          <FaSquareGithub initial="hidden" className='mr-[10px] text-xl rounded-full' /> 
          <FaLinkedin  className='mr-[7px] cursor-pointer text-xl rounded-full' /> 
          <FaTwitter  className='mr-[7px] cursor-pointer text-xl rounded-full' />
         <FaInstagramSquare  className='mr-[7px] cursor-pointer text-xl rounded-full' />
  </motion.div>
        </div>
        </div>

    </section>
  )
}

export default Aboutme
