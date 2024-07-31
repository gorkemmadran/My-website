import React from 'react'
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Contact() {
  return (
    <div className='contact mt-[70px] mb-[70px] '>
        <div className='container mx-auto flex items-center justify-around'>
        <div className='contact-title xs:flex xs:items-center xs:justify-around xs:flex-col xs:mt-[30px] sm:flex sm:items-center sm:justify-around sm:flex-col sm:mt-[30px] md:flex md:items-center md:justify-center md:flex-col md:mt-[30px] lg:block xl:block 2xl:block  '>
            <h2 className='text-3xl font-extrabold'>Get In Touch</h2>
        <div className='flex items-center mt-3'><div className='h-[4px] bg-black w-[140px]'></div><div className='h-[2px]  bg-gray-500 w-[70px]'></div></div> 
            </div>
            
        </div>
        <div className='container mx-auto mt-[70px] flex justify-around'>
            <div className='flex items-center justify-evenly  flex-col'>
                <p className='  text-gray-800 text-sm xs:leading-5 sm:leading-5 md:leading-5 lg:leading-5 xl:leading-6 2xl:leading-6  xs:text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-sm'>100 Main St, Blacktown NSW 2148, <br/>Australia</p>
                <p className='  text-gray-800 text-sm xs:leading-5 sm:leading-5 md:leading-5 lg:leading-5 xl:leading-6 2xl:leading-6  xs:text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-sm'>support@bold.com, info@youremail.com</p>
                <p className='  text-gray-800 text-sm xs:leading-5 sm:leading-5 md:leading-5 lg:leading-5 xl:leading-6 2xl:leading-6  xs:text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-sm'>+256-4516-556, +(257) 56812749</p>
                <div className='flex items-center  mt-4'><p className='font-bold text-lg mr-[7px]'>Social :</p><FaSquareGithub className='mr-[10px] text-xl rounded-full' /> <FaLinkedin className='mr-[7px] cursor-pointer text-xl rounded-full' /> <FaTwitter className='mr-[7px] cursor-pointer text-xl rounded-full' /> <FaInstagramSquare className='mr-[7px] cursor-pointer text-xl rounded-full' />
  </div>

            </div>
            <div className=''>
                <div>
                    <input className=' placeholder:text-sm outline-none  border-b-2 border-b-gray-600 p-4   w-[270px]  mr-3 ' typeof='text' placeholder='Name Here*'></input>
                    <input className=' placeholder:text-sm outline-none  border-b-2 border-b-gray-600 p-4  w-[270px]  ml-3 ' typeof='email' placeholder='Name Here*'></input>
                </div>
                <textarea className='  placeholder:text-sm  border-b-2 border-b-gray-600 p-4 h-[200px] outline-none  w-full mt-5  border-black' placeholder='Message Here*'></textarea>
                <div className='flex items-center justify-end'>
                <button className='bg-black w-[145px] h-[44px] mt-3  text-white'>Send Message</button>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Contact
