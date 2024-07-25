import React from 'react'
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";





function Aboutme() {
  return (
    <section className='about'>
        <div className='container  xs:block sm:block md:flex lg:flex xl:flex 2xl:flex mx-auto mt-20 flex items-center justify-around flex-wrap '>
        <div className='bg-black shadow-2xl xs:w-[100%] xs:h-[30vh] sm:w-[100%] sm:h-[40vh] md:w-[90%] md:mx-auto md:h-[50vh] lg:h-[75vh] lg:w-[380px] xl:h-[480px] xl:w-[380] 2xl:h-[480px] 2xl:w-[380]  shadow-black rounded-md w-[380px] flex items-center justify-center h-[480px]'>
            <p>İmage Gelecek </p>
        </div>
        <div className=' w-[600px]  xs:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[500px] xl:w-[600px] 2xl:w-[600px]   '>
            <div className='xs:flex xs:items-center xs:justify-center xs:flex-col xs:mt-[30px] sm:flex sm:items-center sm:justify-center sm:flex-col sm:mt-[30px] md:flex md:items-center md:justify-center md:flex-col md:mt-[30px] lg:block xl:block 2xl:block  '>
            <h2 className='text-3xl font-extrabold'>About Me</h2>
        <div className='flex items-center mt-3'><div className='h-[4px] bg-black w-[140px]'></div><div className='h-[2px]  bg-gray-500 w-[70px]'></div></div> 
            </div>
        
        <div className='flex w-[100%] items-center justify-center flex-col '>
        <p className='mt-8  text-gray-800 text-sm xs:leading-5 sm:leading-5 md:leading-5 lg:leading-5 xl:leading-6 2xl:leading-6  xs:text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-sm '>Hello! My name is Görkem Madran, and I live in Izmir, Turkey. For the past two years, I have dedicated myself to developing my skills in front-end development. During this time, I have made significant progress with technologies such as <span className='bold'>HTML</span>, <span className='bold'>CSS</span>, <span className='bold'>Javascript</span>, <span className='bold'>React</span>, <span className='bold'>Tailwind CSS</span>,  <span className='bold'>Bootstrap</span>, <span className='bold'>SASS</span>, <span className='bold'>SCSS</span>, <span className='bold'>Material UI</span> and <span className='bold'>Figma</span>. </p>
        <p className='mt-4  text-gray-800 text-sm xs:leading-5 sm:leading-5 md:leading-5 lg:leading-5 xl:leading-6 2xl:leading-6  xs:text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-sm'>Currently, I am primarily focused on working with React and continually enhancing my expertise in this area. As a creative and solution-oriented front-end developer, I take great pleasure in creating user-friendly and aesthetically pleasing websites and applications using modern web technologies. My attention to detail and passion for coding drive me to achieve the best results in every project. </p>
        <p className='mt-4  text-gray-800 text-sm xs:leading-5 sm:leading-5 md:leading-5 lg:leading-5 xl:leading-6 2xl:leading-6  xs:text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-sm'>Additionally, I am highly skilled in responsive design and have experience in creating websites that perform flawlessly across all devices.
        If you are looking for a dynamic team member to work on creative and innovative projects, I would be thrilled to connect with you. Reach out to me, and let's achieve great things together!</p>
        </div>
        
        <div className='flex items-center  mt-5'><p className='font-bold text-lg mr-[7px]'>Social :</p><FaSquareGithub className='mr-[10px] text-xl rounded-full' /> <FaLinkedin className='mr-[7px] cursor-pointer text-xl rounded-full' /> <FaTwitter className='mr-[7px] cursor-pointer text-xl rounded-full' /> <FaInstagramSquare className='mr-[7px] cursor-pointer text-xl rounded-full' />
  </div>
        </div>
        </div>

    </section>
  )
}

export default Aboutme
