import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { FaHandPeace } from "react-icons/fa";





function Home() {
  return (
    <section  className='home '>
        <div className='container   mx-auto h-[85vh] xs:flex xs:justify-around xs:items-center   xs:flex-col-reverse sm:flex-col-reverse  md:flex-row lg:flex-row xl:flex-row 2xl:flex-row flex items-center justify-between '>
            <div className='xs:flex xs:items-center xs:justify-center xs:flex-col'>
              <div className='flex   items-center '>
              <h2 className='text-black font-opensans home-title font-thin   tracking-wide	 text-7xl'>Hello,   </h2>
              <FaHandPeace style={{color : '#E1B899', fontSize : '50px'}} />
              </div>
                <h1 className='text-black home-title font-opensans font-thin   tracking-wide mt-2	 text-3xl'>I'M GÖRKEM MADRAN</h1>
                <h3  className='text-black text-xl font-opensans font-extralight   mt-5'>Front End - React Developer</h3>
                <button className='text-white text-lg font-opensans hover:text-black hover:duration-700 hover:border hover:border-black hover:bg-white bg-black w-[170px] h-[48px] mt-[20px] '>Who am I ?</button>
            </div>
            <div className='bg-black elipse shadow-stone-600 shadow-2xl   xs:min-w-[230px] xs:max-h-[230px] sm:max-h-[250px] sm:min-w-[250px] md:max-h-[300px] md:min-w-[300px] lg:min-w-[400px] lg:max-h-[400px] xl:min-w-[500px] xl:max-h-[500px] 2xl:min-w-[500px] h-[500px] rounded-full'>
            
        </div>
            </div>
            
      
    </section>
  )
}

export default Home
