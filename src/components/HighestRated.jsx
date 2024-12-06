import React from 'react';
import worrior from '../assets/worrior.png'

const HighestRated = () => {
  return (
    <div className='w-11/12 mx-auto'>
      
        <h2 className='text-4xl font-bold text-gray-50 my-2'>Highest Rated Games</h2>
      <div className='flex flex-col md:flex-row '>
        {/* Left */}
            <div className='flex-1 pr-10 pt-8'>
              <p className='text-lg'>Discover the thrill of the highest-rated games, where adventure meets excellence! Your next favorite is just a click away!</p>
            </div>
        {/* Right */}
        <div>
          <div className='flex justify-end'>
            <img 
            src={worrior} 
            alt="" />
          </div>
        </div>

      </div>

    </div>
  );
};

export default HighestRated;