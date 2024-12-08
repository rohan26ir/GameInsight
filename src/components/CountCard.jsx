import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const CountCard = () => {
  return (
    <div className='my-8 w-11/12 mx-auto'>

      <h2 className='text-3xl font-bold p-3'>

      <Typewriter
          words={['Other Features']}
          loop={false}
          cursor
          cursorStyle="_"
        />
      </h2>

      <div className='grid col-span-2 md:grid-cols-4'>

        <div className='bg-orange-600 rounded-xl mx-1 text-center font-bold text-2xl p-10'>
          <p> 201 </p>
          <h2>Twitch Streams</h2>
        </div>
        <div className='bg-orange-600 rounded-xl mx-1 text-center font-bold text-2xl p-10'>
          <p> 201 </p>
          <h2>Youtube Streams</h2>
        </div>
        <div className='bg-orange-600 rounded-xl mx-1 text-center font-bold text-2xl p-10'>
          <p> 301 </p>
          <h2>Player</h2>
        </div>
        <div className='bg-orange-600 rounded-xl mx-1 text-center font-bold text-2xl p-10'>
          <p> 20 </p>
          <h2>Pro Team</h2>
        </div>

      </div>
    </div>
  );
};

export default CountCard;