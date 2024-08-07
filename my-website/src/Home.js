import React from 'react'
import { FaHtml5, FaCss3, FaReact, FaSass, FaBootstrap, FaCss3Alt, FaHandPeace } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { DarkModeContext } from './DarkModeContext';
import { useContext } from 'react';
import { motion } from "framer-motion"
import { Link } from 'react-scroll';


const homeText = {
  hidden : {x : -20 , opactiy : 0, scale : 0.5},
  visible : {
    x : 0,
    rotate : '360deg',
    scale : 1,
    transition: { duration: 1.3, ease: "easeOut" }}
  }

  const homeImage = {
    hidden : {x : 200 , opactiy : 0, scale : 0.3},
    visible : {
      x : 0,
      scale : 1,
      transition: { duration: 0.6, ease: "easeOut" }}
    }


function Home() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section id='home' className={`home ${darkMode ? 'dark bg-black ' : ''}`}>
      <motion.div className={`container mx-auto h-[86vh] dark:[86vh] xs:flex xs:justify-around xs:items-center xs:flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row xl:flex-row 2xl:flex-row flex items-center justify-between `}>
        <motion.div initial="hidden" animate="visible" variants={homeText} className='xs:flex xs:items-center xs:justify-center xs:flex-col'>
          <div className='flex items-center'>
            <h2 className={`font-opensans home-title font-thin tracking-wide text-7xl ${darkMode ? 'text-white' : 'text-black'}`}>Hello,</h2>
            <FaHandPeace style={{ color: '#E1B899', fontSize: '50px' }} />
          </div>
          <h1 className={`home-title font-opensans font-thin tracking-wide mt-2 text-3xl ${darkMode ? 'text-zinc-300' : 'text-black'}`}>I'M GÖRKEM MADRAN</h1>
          <h3 className={`text-xl font-opensans font-extralight mt-5 ${darkMode ? 'text-zinc-300' : 'text-black'}`}>Front End - React Developer</h3>
          <Link to="about" smooth={true} duration={500}>
          <button className={`text-lg font-opensans hover:duration-700 hover:border hover:border-black hover:bg-white w-[170px] h-[48px] mt-[20px] ${darkMode ? 'bg-transparent text-white  border-white border hover:bg-white hover:text-black' : 'bg-black text-white hover:text-black'}`}>Who am I ?</button>
          </Link>
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={homeImage} className={`elipse shadow-stone-600 shadow-2xl rounded-full ${darkMode ? 'bg-white' : 'bg-black'} xs:min-w-[230px] xs:max-h-[230px] sm:max-h-[250px] sm:min-w-[250px] md:max-h-[300px] md:min-w-[300px] lg:min-w-[400px] lg:max-h-[400px] xl:min-w-[500px] xl:max-h-[500px] 2xl:min-w-[500px] h-[500px]`}></motion.div>
      </motion.div>
    </section>
  )
}

export default Home;
