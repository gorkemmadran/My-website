import React, { useState, useContext } from 'react';
import { DarkModeContext } from './DarkModeContext';
import { FaSquareGithub } from "react-icons/fa6";
import Mywebsite from './image/webimg.png'

function Projects() {
  const { darkMode } = useContext(DarkModeContext);
  const [clickMore, setClickMore] = useState(false);

  const moreProjects = () => {
    setClickMore(true);
  };

  const projects = [
    { id: 1, title: 'Personal Portfolio', imgSrc: Mywebsite },
    { id: 2, title: 'Personal Portfolio', imgSrc: Mywebsite },
    { id: 3, title: 'Personal Portfolio', imgSrc: Mywebsite },
    { id: 4, title: 'Personal Portfolio', imgSrc: Mywebsite },
    { id: 5, title: 'Personal Portfolio', imgSrc: Mywebsite },
    { id: 6, title: 'Personal Portfolio', imgSrc: Mywebsite },
    { id: 7, title: 'Personal Portfolio', imgSrc: Mywebsite },
    { id: 8, title: 'Personal Portfolio', imgSrc: Mywebsite },
  ];

  const initialProjectCount = 3;

  return (
    <div id='project' className={darkMode ? 'dark bg-black' : ''}>
      <div className='xs:flex xs:items-center xs:justify-center xs:flex-col  sm:flex sm:items-center sm:justify-center sm:flex-col md:flex md:items-center md:justify-center md:flex-col  lg:flex lg:items-center lg:justify-center xl:flex xl:justify-center xl:items-center 2xl:flex 2xl:items-center 2xl:justify-center  '>
        <h2 className='text-3xl font-extrabold dark:text-zinc-200'>Projects</h2>
        <div className='flex items-center  mt-3'>
          <div className='h-[4px] bg-black dark:bg-white w-[140px]'></div>
          <div className='h-[2px] bg-gray-500 dark:bg-gray-500 w-[70px]'></div>
        </div>
      </div>
      <div className='container mx-auto flex items-center justify-evenly pt-[50px]  pb-[20px] flex-wrap'>
        {/* İlk 3 projeyi göster */}
        {projects.slice(0, initialProjectCount).map(project => (
          <div key={project.id} className='card border border-black border-t-4 shadow-lg shadow-gray-600 w-[380px] h-[445px] justify-between  flex items-center bg-gray  mt-[30px] flex-col dark:border-gray-400'>
            <div className='w-full h-full overflow-auto'>
              <img
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                src={project.imgSrc}
                alt="Website Screenshot"
              />
            </div>
            <div className='card-footer flex justify-center  flex-col w-[100%] bg-black  text-white p-5 h-[60px]'>
              <div className='flex items-center justify-between flex-row'>
                <h1>{project.title}</h1>
                <div className='flex items-center justify-center flex-row'>
                  <FaSquareGithub className='mr-[10px] text-xl rounded-full' />
                  <h1>Live</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Daha fazla projeyi göster (clickMore true olduğunda) */}
        {clickMore && projects.slice(initialProjectCount).map(project => (
          <div key={project.id} className='card border border-black border-t-4 shadow-lg shadow-gray-600 w-[380px] h-[405px] justify-between  flex items-center bg-gray  mt-[30px] pb- flex-col dark:border-gray-400'>
            <div className='w-full h-full overflow-auto'>
              <img
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                src={project.imgSrc}
                alt="Website Screenshot"
              />
            </div>
            <div className='card-footer flex justify-center  flex-col w-[100%] bg-black  text-white p-5 h-[60px]'>
              <div className='flex items-center justify-between flex-row'>
                <h1>{project.title}</h1>
                <div className='flex items-center justify-center flex-row'>
                  <FaSquareGithub className='mr-[10px] text-xl rounded-full' />
                  <h1>Live</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!clickMore && (
        <div className='flex text-xl  items-center justify-center'>
          <button onClick={moreProjects} className='underline pb-[50px]  rounded-full  text-black p-3 underline-offset-4 dark:text-white'>
            Click For more projects...
          </button>
        </div>
      )}
    </div>
  );
}

export default Projects;
