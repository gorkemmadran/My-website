import React, { useState } from 'react';
import ProjeOne from  './image/project..jpg'
import { DarkModeContext } from './DarkModeContext';
import { useContext } from 'react';
import { FaSquareGithub } from "react-icons/fa6";
import Mywebsite from './image/webimg.png'

function Projects() {
  const { darkMode } = useContext(DarkModeContext);
  const [clickMore, setClickMore] = useState(false);

  const moreProjects = () => {
    setClickMore(true);
  };

  return (
    <div id='project' className={darkMode ? 'dark bg-black' : ''}>
      <div className='xs:flex xs:items-center xs:justify-center xs:flex-col  sm:flex sm:items-center sm:justify-center sm:flex-col md:flex md:items-center md:justify-center md:flex-col  lg:flex lg:items-center lg:justify-center xl:flex xl:justify-center xl:items-center 2xl:flex 2xl:items-center 2xl:justify-center     '>
        <h2 className='text-3xl font-extrabold dark:text-zinc-200'>Projects</h2>
        <div className='flex items-center  mt-3'>
          <div className='h-[4px] bg-black dark:bg-white w-[140px]'></div>
          <div className='h-[2px] bg-gray-500 dark:bg-gray-500 w-[70px]'></div>
        </div>
      </div>
      <div className='container mx-auto flex items-center justify-evenly mt-[60px] pb-[60px] flex-wrap'>
        <div className='card border  border-black border-t-4 shadow-lg shadow-gray-600 w-1/3 h-[405px] justify-between  flex items-center bg-gray  mt-[30px]  flex-col dark:border-gray-400'>
          <div className='w-full h-full overflow-auto '>
        <img 
  style={{ 
    width: '100%', 
    height: 'auto', 
  }} 
  src={Mywebsite} 
  alt="Website Screenshot"
/> </div>

          <div className='card-footer flex justify-center  flex-col w-[100%] bg-black  text-white p-5 h-[60px]'>
          <div className='flex items-center justify-between flex-row'>
          <h1>Personal Portolio</h1>
          <div className='flex items-center justify-center flex-row'>
          <FaSquareGithub initial="hidden" className='mr-[10px] text-xl rounded-full' /> 
          <h1>Live</h1>

          </div>

          </div>
          </div>
        </div>
        <div className='card border border-black border-t-4 w-1/3 h-[405px] shadow-lg shadow-gray-600  justify-between  flex items-center bg-gray  mt-[30px]  flex-col dark:border-gray-400'>

        <div className='w-full h-full overflow-auto '>
        <img 
  style={{ 
    width: '100%', 
    height: 'auto', 
  }} 
  src={Mywebsite} 
  alt="Website Screenshot"
/>
            </div>
            <div className='card-footer flex justify-center  flex-col w-[100%] bg-black  text-white p-5 h-[60px]'>
          <div className='flex items-center justify-between flex-row'>
          <h1>Personal Portolio</h1>
          <div className='flex items-center justify-center flex-row'>
          <FaSquareGithub initial="hidden" className='mr-[10px] text-xl rounded-full' /> 
          <h1>Live</h1>

          </div>

          </div>
          </div>
        </div>
        <div className='card border border-black border-t-4 shadow-lg shadow-gray-600 w-1/3 h-[405px] justify-between  flex items-center bg-gray  mt-[30px]  flex-col  dark:border-gray-400'>
        <div className='w-full h-full overflow-auto '>
        <img 
  style={{ 
    width: '100%', 
    height: 'auto', 
  }} 
  src={Mywebsite} 
  alt="Website Screenshot"
/>
            </div>
            <div className='card-footer flex justify-center  flex-col w-[100%] bg-black  text-white p-5 h-[60px]'>
          <div className='flex items-center justify-between flex-row'>
          <h1>Personal Portolio</h1>
          <div className='flex items-center justify-center flex-row'>
          <FaSquareGithub initial="hidden" className='mr-[10px] text-xl rounded-full' /> 
          <h1>Live</h1>

          </div>

          </div>
          </div>
        </div>
        <div className='card border border-black border-t-4 shadow-lg shadow-gray-600 w-1/3 h-[405px] justify-between  flex items-center bg-gray  mt-[30px] flex-col dark:border-gray-400'>
        <div className='w-full h-full overflow-auto '>
        <img 
  style={{ 
    width: '100%', 
    height: 'auto', 
  }} 
  src={Mywebsite} 
  alt="Website Screenshot"
/>
            </div>
            <div className='card-footer flex justify-center  flex-col w-[100%] bg-black  text-white p-5 h-[60px]'>
          <div className='flex items-center justify-between flex-row'>
          <h1>Personal Portolio</h1>
          <div className='flex items-center justify-center flex-row'>
          <FaSquareGithub initial="hidden" className='mr-[10px] text-xl rounded-full' /> 
          <h1>Live</h1>

          </div>

          </div>
          </div>
        </div>
        <div className='card border border-black border-t-4 shadow-lg shadow-gray-600 w-1/3 h-[405px] justify-between  flex items-center bg-gray  mt-[30px] flex-col dark:border-gray-400'>
        <div className='w-full h-full overflow-auto '>
        <img 
  style={{ 
    width: '100%', 
    height: 'auto', 
  }} 
  src={Mywebsite} 
  alt="Website Screenshot"
/>
            </div>
            <div className='card-footer flex justify-center  flex-col w-[100%] bg-black  text-white p-5 h-[60px]'>
          <div className='flex items-center justify-between flex-row'>
          <h1>Personal Portolio</h1>
          <div className='flex items-center justify-center flex-row'>
          <FaSquareGithub initial="hidden" className='mr-[10px] text-xl rounded-full' /> 
          <h1>Live</h1>

          </div>

          </div>
          </div>
            </div>
            <div className='card border border-black border-t-4 shadow-lg shadow-gray-600   w-1/3 h-[405px] justify-between  flex items-center bg-gray  mt-[30px]  flex-col dark:border-gray-400'>
            <div className='w-full h-full overflow-auto '>
        <img 
  style={{ 
    width: '100%', 
    height: 'auto', 
  }} 
  src={Mywebsite} 
  alt="Website Screenshot"
/>
            </div>
            <div className='card-footer flex justify-center  flex-col w-[100%] bg-black  text-white p-5 h-[60px]'>
          <div className='flex items-center justify-between flex-row'>
          <h1>Personal Portolio</h1>
          <div className='flex items-center justify-center flex-row'>
          <FaSquareGithub initial="hidden" className='mr-[10px] text-xl rounded-full' /> 
          <h1>Live</h1>

          </div>

          </div>
          </div>
            </div>
        {clickMore && (
          <>
            
            <div className='card border border-black border-t-4 shadow-lg shadow-gray-600 w-1/3 h-[405px]  justify-between  flex items-center bg-gray  mt-[30px]  flex-col dark:border-gray-400'>
            <div className='w-full h-full overflow-auto '>
        <img 
  style={{ 
    width: '100%', 
    height: 'auto', 
  }} 
  src={Mywebsite} 
  alt="Website Screenshot"
/>
            </div>
            <div className='card-footer flex justify-center  flex-col w-[100%] bg-black  text-white p-5 h-[60px]'>
          <div className='flex items-center justify-between flex-row'>
          <h1>Personal Portolio</h1>
          <div className='flex items-center justify-center flex-row'>
          <FaSquareGithub initial="hidden" className='mr-[10px] text-xl rounded-full' /> 
          <h1>Live</h1>

          </div>

          </div>
          </div>
            </div>
            <div className='card border border-black border-t-4 shadow-lg shadow-gray-600 w-1/3 h-[405px] justify-between  flex items-center bg-gray  mt-[30px]  flex-col dark:border-gray-400'>
            <div className='w-full h-full overflow-auto '>
        <img 
  style={{ 
    width: '100%', 
    height: 'auto', 
  }} 
  src={Mywebsite} 
  alt="Website Screenshot"
/>
            </div>
            <div className='card-footer flex justify-center  flex-col w-[100%] bg-black  text-white p-5 h-[60px]'>
          <div className='flex items-center justify-between flex-row'>
          <h1>Personal Portolio</h1>
          <div className='flex items-center justify-center flex-row'>
          <FaSquareGithub initial="hidden" className='mr-[10px] text-xl rounded-full' /> 
          <h1>Live</h1>

          </div>

          </div>
          </div>
            </div>
          </>
        )}
      </div>
      {!clickMore && (
        <div className='flex text-xl  items-center justify-center'>
          <button onClick={moreProjects} className='underline mt-[30px] rounded-full  mb-[30px]  text-black p-3 underline-offset-4 dark:text-white'>
            Click For more projects...
          </button>
        </div>
      )}
    </div>
  );
}

export default Projects;
