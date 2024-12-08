import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const ExploreDetails = () => {
  const review = useLoaderData();
  const { user } = useContext(AuthContext);
  const [watchlistStatus, setWatchlistStatus] = useState('');

  const handleAddToWatchlist = async () => {
    if (!user?.email || !user?.displayName) {
      Swal.fire({
        title: 'Login Required',
        text: 'Please log in to add to the watchlist.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return;
    }

    try {
      const response = await fetch('https://gameinsight-server.vercel.app/addToWatchList', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          reviewId: review._id,
          userEmail: user.email,
          userName: user.displayName,  // Use displayName here
          name: review.name,
          rating: review.rating,
          genre: review.genre,
        }),
      });

      if (response.ok) {
        setWatchlistStatus('Added to watchlist successfully!');
        Swal.fire({
          title: 'Success!',
          text: 'Review has been added to your watchlist.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      } else {
        const errorData = await response.json();
        setWatchlistStatus(errorData.message || 'Failed to add to watchlist.');
      }
    } catch (error) {
      setWatchlistStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center p-6">
      <div className="bg-gray-800 shadow-lg rounded-lg max-w-4xl w-full overflow-hidden">
        <div className="flex">
          <div>
            <img
              src={review.photo}
              alt={review.name}
              className="w-full h-72 object-contain"
            />
          </div>
          <div className="ml-4 p-5">
            <h2 className="text-3xl font-bold text-orange-500">{review.name}</h2>
            <div className="flex">
              <p>Author: {review.userName}</p>
              <p>Email: {review.userEmail}</p>
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
          <button
            className="mt-6 w-full bg-blue-500 text-white text-lg font-bold py-3 rounded-lg hover:bg-blue-600 transition"
            onClick={handleAddToWatchlist}
          >
            Add to WatchList
          </button>
          {watchlistStatus && <p className="text-center mt-4">{watchlistStatus}</p>}
          <Link to="/myWatchlist">
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
