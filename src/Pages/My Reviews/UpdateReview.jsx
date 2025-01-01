import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const UpdateReview = () => {
  const { id } = useParams(); // Get review ID from URL
  const { user, darkMode } = useContext(AuthContext);
  const [reviewData, setReviewData] = useState({});
  const navigate = useNavigate();

  const themeMode = darkMode
    ? "bg-black text-white"
    : "bg-[#FFF5CD] text-black";

    const BgMode = darkMode
    ? "bg-gray-500"
    : "bg-sky-300";

  // Fetch existing review data
  useEffect(() => {
    fetch(`https://gameinsight-server.vercel.app/review/${id}`)
      .then((res) => res.json())
      .then((data) => setReviewData(data));
  }, [id]);

  // Handle form submission
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedReview = {
      name: form.gameTitle.value.trim(),
      review: form.description.value.trim(),
      rating: form.rating.value,
      genre: form.genre.value,
    };

    fetch(`https://gameinsight-server.vercel.app/updateReview/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire('Success', 'Review updated successfully!', 'success');
          navigate('/my-reviews');
        } else {
          Swal.fire('Error', 'No changes were made.', 'error');
        }
      });
  };

  return (
    <div className={`p-5 ${themeMode}`}>

      <Helmet>
        <title>UpdateReview | GameInsight</title>
      </Helmet>

      

      <h2 className="text-3xl font-bold text-center mb-5">Update Review</h2>
      <form onSubmit={handleUpdate} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block font-bold mb-2">Game Title</label>
          <input
            type="text"
            name="gameTitle"
            defaultValue={reviewData.name || ''}
            className={`w-full p-2 border rounded ${BgMode}`}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Description</label>
          <textarea
            name="description"
            defaultValue={reviewData.review || ''}
            className={`w-full p-2 border rounded ${BgMode}`}
            rows="4"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Rating</label>
          <input
            type="number"
            name="rating"
            defaultValue={reviewData.rating || ''}
            className={`w-full p-2 border rounded ${BgMode}`}
            min="1"
            max="10"
            required
          />
        </div>
        {/* Genres */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-bold">Genre</span>
          </label>
          <select
            name="genre"
            className={`select select-bordered w-full p-2 rounded ${BgMode}`}
            value={reviewData.genre}
            required
          >
            <option>Action</option>
            <option>RPG</option>
            <option>Adventure</option>
            <option>Strategy</option>
            <option>Puzzle</option>
            <option>Shooter</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">User Email</label>
          <input
            type="email"
            value={user?.email || ''}
            readOnly
            className={`w-full p-2 border rounded bg-gray-200 ${BgMode}`}
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">User Name</label>
          <input
            type="text"
            value={user?.displayName || ''}
            readOnly
            className={`w-full p-2 border rounded bg-gray-200 ${BgMode}`}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Update Review
        </button>
      </form>
    </div>
  );
};

export default UpdateReview;
