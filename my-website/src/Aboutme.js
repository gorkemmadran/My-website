import React from 'react'
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";





function Aboutme() {
  return (
    <section className='about'>
        <div className='container mx-auto mt-20 flex items-center justify-around flex-wrap '>
        <div className='bg-black shadow-2xl shadow-black rounded-md w-[380px] flex items-center justify-center h-[480px]'>
            <p>İmage Gelecek </p>
        </div>
        <div className=' w-[600px] rounded-md   h-[500px]'>
        <h2 className='  mt-2 text-3xl font-extrabold'>About Me</h2>
        <div className='flex items-center mt-3'><div className='h-[4px] bg-black w-[140px]'></div><div className='h-[2px]  bg-gray-500 w-[70px]'></div></div> 
        <p className='mt-8 text-gray-800 text-sm leading-6'>Hello! My name is Görkem Madran, and I live in Izmir, Turkey. For the past two years, I have dedicated myself to developing my skills in front-end development. During this time, I have made significant progress with technologies such as <span className='bold'>HTML</span>, <span className='bold'>CSS</span>, <span className='bold'>Javascript</span>, <span className='bold'>React</span>, <span className='bold'>Tailwind CSS</span>,  <span className='bold'>Bootstrap</span>, <span className='bold'>SASS</span>, <span className='bold'>SCSS</span>, <span className='bold'>Material UI</span> and <span className='bold'>Figma</span>. </p>
        <p className='mt-4 text-gray-800 text-sm leading-6'>Currently, I am primarily focused on working with React and continually enhancing my expertise in this area. As a creative and solution-oriented front-end developer, I take great pleasure in creating user-friendly and aesthetically pleasing websites and applications using modern web technologies. My attention to detail and passion for coding drive me to achieve the best results in every project. </p>
        <p className='mt-4 text-gray-800 text-sm leading-6'>Additionally, I am highly skilled in responsive design and have experience in creating websites that perform flawlessly across all devices.
        If you are looking for a dynamic team member to work on creative and innovative projects, I would be thrilled to connect with you. Reach out to me, and let's achieve great things together!</p>
        <div className='flex items-center  mt-5'><p className='font-bold text-lg mr-[7px]'>Social :</p><FaSquareGithub className='mr-[10px] text-xl rounded-full' /> <FaLinkedin className='mr-[7px] cursor-pointer text-xl rounded-full' /> <FaTwitter className='mr-[7px] cursor-pointer text-xl rounded-full' /> <FaInstagramSquare className='mr-[7px] cursor-pointer text-xl rounded-full' />
  </div>
        </div>
        </div>

    </section>
  )
}

export default Aboutme
