import React, { useState } from 'react';
import ProjeOne from  './image/project..jpg'

function Projects() {
  const [clickMore, setClickMore] = useState(false);

  const moreProjects = () => {
    setClickMore(true);
  };

  return (
    <div className='project '>
      <div className='xs:flex xs:items-center xs:justify-center xs:flex-col xs:mt-[30px] sm:flex sm:items-center sm:justify-center sm:flex-col sm:mt-[30px] md:flex md:items-center md:justify-center md:flex-col md:mt-[30px] lg:flex lg:items-center lg:justify-center xl:flex xl:justify-center xl:items-center 2xl:flex 2xl:items-center 2xl:justify-center     '>
        <h2 className='text-3xl font-extrabold'>Projects</h2>
        <div className='flex items-center mt-3'>
          <div className='h-[4px] bg-black w-[140px]'></div>
          <div className='h-[2px] bg-gray-500 w-[70px]'></div>
        </div>
      </div>
      <div className='container mx-auto flex items-center justify-evenly mt-[60px] mb-[60px] flex-wrap'>
        <div className='card border  border-black border-t-4 shadow-lg shadow-gray-600 rounded-tr-2xl rounded-l-md  w-[440px] justify-between  flex items-center bg-gray  mt-[30px] h-[400px] flex-col'>
          <img style={{width : '420px', height : '315px', margin : 'auto', borderRadius : '10px'  }} src={ProjeOne}></img>
          <div className='card-footer flex justify-center  flex-col w-[100%] bg-black  text-white p-5 h-[60px]'>
            <p>Spotify - Login</p>
            <p>Proje 1 :</p>
          </div>
        </div>
        <div className='card border border-black border-t-4 shadow-lg shadow-gray-600 rounded-tr-2xl rounded-l-md  w-[440px] justify-between  flex items-center bg-gray  mt-[30px] h-[400px] flex-col'>
        <img style={{width : '420px', height : '315px', margin : 'auto', borderRadius : '10px'  }} src={ProjeOne}></img>

                    <div className='card-footer flex justify-center flex-col w-[100%] bg-black text-white p-5 h-[60px]'>
            <p>Spotify - Login</p>
            <p>Proje 2 :</p>
          </div>
        </div>
        <div className='card border border-black border-t-4 shadow-lg shadow-gray-600 rounded-tr-2xl rounded-l-md  w-[440px] justify-between  flex items-center bg-gray  mt-[30px] h-[400px] flex-col'>
        <img style={{width : '420px', height : '315px', margin : 'auto', borderRadius : '10px'  }} src={ProjeOne}></img>

          <div className='card-footer flex justify-center flex-col w-[100%] bg-black text-white p-5 h-[60px]'>
            <p>Spotify - Login</p>
            <p>Proje 3 :</p>
          </div>
        </div>
        <div className='card border border-black border-t-4 shadow-lg shadow-gray-600 rounded-tr-2xl rounded-l-md  w-[440px] justify-between  flex items-center bg-gray  mt-[30px] h-[400px] flex-col'>
        <img style={{width : '420px', height : '315px', margin : 'auto', borderRadius : '10px'  }} src={ProjeOne}></img>

          <div className='card-footer flex justify-center flex-col w-[100%] bg-black text-white p-5 h-[60px]'>
            <p>Spotify - Login</p>
            <p>Proje 4 :</p>
          </div>
        </div>
        {clickMore && (
          <>
            <div className='card border border-black border-t-4 shadow-lg shadow-gray-600 rounded-tr-2xl rounded-l-md  w-[440px] justify-between  flex items-center bg-gray  mt-[30px] h-[400px] flex-col'>
            <img style={{width : '420px', height : '315px', margin : 'auto', borderRadius : '10px'  }} src={ProjeOne}></img>

              <div className='card-footer flex justify-center flex-col w-[100%] bg-black text-white p-5 h-[60px]'>
                <p>Spotify - Login</p>
                <p>Proje 5 :</p>
              </div>
            </div>
            <div className='card border border-black border-t-4 shadow-lg shadow-gray-600 rounded-tr-2xl rounded-l-md  w-[440px] justify-between  flex items-center bg-gray  mt-[30px] h-[400px] flex-col'>
            <img style={{width : '420px', height : '315px', margin : 'auto', borderRadius : '10px'  }} src={ProjeOne}></img>

              <div className='card-footer flex justify-center flex-col w-[100%] bg-black text-white p-5 h-[60px]'>
                <p>Spotify - Login</p>
                <p>Proje 6 :</p>
              </div>
            </div>
            <div className='card border border-black border-t-4 shadow-lg shadow-gray-600 rounded-tr-2xl rounded-l-md  w-[440px] justify-between  flex items-center bg-gray  mt-[30px] h-[400px] flex-col'>
            <img style={{width : '420px', height : '315px', margin : 'auto', borderRadius : '10px'  }} src={ProjeOne}></img>

              <div className='card-footer flex justify-center flex-col w-[100%] bg-black text-white p-5 h-[60px]'>
                <p>Spotify - Login</p>
                <p>Proje 7 :</p>
              </div>
            </div>
            <div className='card border border-black border-t-4 shadow-lg shadow-gray-600 rounded-tr-2xl rounded-l-md  w-[440px] justify-between  flex items-center bg-gray  mt-[30px] h-[400px] flex-col'>
            <img style={{width : '420px', height : '315px', margin : 'auto', borderRadius : '10px'  }} src={ProjeOne}></img>

              <div className='card-footer flex justify-center flex-col w-[100%] bg-black text-white p-5 h-[60px]'>
                <p>Spotify - Login</p>
                <p>Proje 8 :</p>
              </div>
            </div>
          </>
        )}
      </div>
      {!clickMore && (
        <div className='flex text-xl  items-center justify-center'>
          <button onClick={moreProjects} className='underline mt-[30px] rounded-full  mb-[30px]  text-black p-3 underline-offset-4'>
            Click For more projects...
          </button>
        </div>
      )}
    </div>
  );
}

export default Projects;
