import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ExploreDetails = () => {
  const review = useLoaderData();


  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center p-6">
      <div className="bg-gray-800 shadow-lg rounded-lg max-w-4xl w-full overflow-hidden">
        
        <div className='flex'>
          <div>
          <img
          src={review.photo}
          alt={review.name}
          className="w-full h-72 object-contain"
        />
          </div>
          <div className='ml-4 p-5'>
          <h2 className="text-3xl font-bold text-orange-500">{review.name}</h2>
           <div className='flex'>
          <p>Author : {review.userName}</p>
          <p>Author : {review.userEmail}</p>
           </div>
          <p className="text-gray-300 leading-relaxed">{review.review}</p>
          </div>
        </div>
        <div className="p-6 space-y-4">
          
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="bg-gray-700 text-center p-3 rounded-lg flex-1">
              <p className="text-lg font-bold text-orange-400">Rating</p>
              <p className="text-2xl">{review.rating}</p>
            </div>
            <div className="bg-gray-700 text-center p-3 rounded-lg flex-1">
              <p className="text-lg font-bold text-orange-400">Year</p>
              <p className="text-2xl">{review.year}</p>
            </div>
            <div className="bg-gray-700 text-center p-3 rounded-lg flex-1">
              <p className="text-lg font-bold text-orange-400">Genre</p>
              <p className="text-2xl">{review.genre}</p>
            </div>
          </div>
          <Link to={'/'}>
          <button className="mt-6 w-full bg-orange-500 text-white text-lg font-bold py-3 rounded-lg hover:bg-orange-600 transition">
            Back to Reviews
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreDetails;
