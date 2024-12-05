import React from 'react';
import error from "../../assets/404.png"
import { Link } from 'react-router-dom';
import { GiFastBackwardButton } from 'react-icons/gi';

const ErrorPage = () => {
  return (
    <div className='p-10 bg-[#0F131E] h-screen flex flex-col justify-center items-center'>
      <div className='flex justify-center'>
        <img src={error} alt="Error" />
      </div>

      <div className='flex flex-col justify-center items-center text-white pb-8 space-y-7'>
        <h2 className='text-5xl font-bold'>404 - Nothing to see here</h2>

        <p className='text-center text-xl text-gray-500'>
          The link you followed is probably broken <br /> or the page has been removed.
        </p>

        <Link to={'/'}>
          <button className='bg-yellow-500 px-4 py-1 rounded-3xl flex justify-center items-center gap-1 text-black'>
            <GiFastBackwardButton />Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
