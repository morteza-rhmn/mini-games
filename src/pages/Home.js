import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className='min-h-fit h-screen bg-slate-950'>
      <div className='h-full flex flex-col gap-10 justify-center items-center'>
        {/* Title */}
        <h1 className='font-black text-center text-[15vw] xs:text-7xl sm:text-8xl font-sans'>
          <span className='text-red-400'>M</span>
          <span className='text-orange-400'>i</span>
          <span className='text-amber-300'>n</span>
          <span className='text-yellow-200'>i</span>
          &nbsp;
          <span className='text-lime-400'>G</span>
          <span className='text-green-300'>a</span>
          <span className='text-sky-300'>m</span>
          <span className='text-blue-400'>e</span>
          <span className='text-purple-400'>s</span>
        </h1>
        {/* Body */}
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 gap-4 justify-center'>
            <Link to='/flappy-bird'
                  className='relative bg-gray-200 rounded-[10px] w-[400px] max-w-full mx-auto overflow-hidden'>
              <div className='rounded-[10px] bg-yellow-200 aspect-video'/>
              <div
                className='text-gray-100 absolute w-full h-full top-0 left-0 bg-neutral-900 transition ease-in-out flex items-center justify-center opacity-0 hover:opacity-100 hover:scale-110'
                style={{containerType: 'inline-size'}}
              >
                <p className='text-[9cqw]'>Flappy Bird</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home