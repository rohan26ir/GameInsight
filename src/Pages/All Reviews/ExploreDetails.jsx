import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const ExploreDetails = () => {
  const review = useLoaderData();
  const { user, darkMode } = useContext(AuthContext);
  const [watchlistStatus, setWatchlistStatus] = useState('');


  const themeMode = darkMode
    ? "bg-black text-white"
    : "bg-[#FFF5CD] text-black";

  const handleAddToWatchlist = async () => {
    if (!user?.email || !user?.displayName) {
      Swal.fire({
        title: 'Login Required',
        text: 'Please log in to add to the watchlist.',
        icon: 'warning',
        confirmButtonText: 'OK',
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
          userName: user.displayName,
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
          confirmButtonText: 'OK',
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
    <div className={`min-h-screen text-gray-100 flex items-center justify-center px-4 md:px-8 py-6  ${themeMode}`}>
      <div className="bg-gray-800 shadow-lg rounded-lg w-full max-w-5xl overflow-hidden">
        {/* Header Section */}
        <div className="md:flex">
          <div className="w-full md:w-1/3">
            <img
              src={review.photo}
              alt={review.name}
              className="w-full h-72 md:h-full object-contain bg-gray-700"
            />
          </div>
          <div className="w-full md:w-2/3 p-6 space-y-4">
            <h2 className="text-3xl font-bold text-orange-500">{review.name}</h2>
            <div className="text-gray-400 space-y-2">
              <p>
                <span className="font-semibold">Author:</span> {review.userName}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {review.userEmail}
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed">{review.review}</p>
          </div>
        </div>

        {/* Details Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
          <div className="bg-gray-700 text-center p-4 rounded-lg">
            <p className="text-lg font-bold text-orange-400">Rating</p>
            <p className="text-2xl">{review.rating}</p>
          </div>
          <div className="bg-gray-700 text-center p-4 rounded-lg">
            <p className="text-lg font-bold text-orange-400">Year</p>
            <p className="text-2xl">{review.year}</p>
          </div>
          <div className="bg-gray-700 text-center p-4 rounded-lg">
            <p className="text-lg font-bold text-orange-400">Genre</p>
            <p className="text-2xl">{review.genre}</p>
          </div>
        </div>

        {/* Actions Section */}
        <div className="p-6 space-y-4">
          <button
            className="w-full bg-blue-500 text-white text-lg font-bold py-3 rounded-lg hover:bg-blue-600 transition"
            onClick={handleAddToWatchlist}
          >
            Add to Watchlist
          </button>
          {watchlistStatus && <p className="text-center text-green-400">{watchlistStatus}</p>}
          <Link to="/">
            <button className="w-full bg-orange-500 text-white text-lg font-bold py-3 rounded-lg hover:bg-orange-600 transition mt-2">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreDetails;
