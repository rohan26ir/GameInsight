import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Typewriter } from 'react-simple-typewriter';
import { Fade, Slide } from 'react-awesome-reveal';

const MyReviews = () => {
  const { user, darkMode } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  const themeMode = darkMode
    ? "bg-black text-white"
    : "bg-[#FFF5CD] text-black";

  // Fetch user-specific reviews
  useEffect(() => {
    fetch(`https://gameinsight-server.vercel.app/myReviews?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user.email]);

  // Handle delete review
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this review!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://gameinsight-server.vercel.app/deleteReview/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your review has been deleted.', 'success');
              setReviews(reviews.filter((review) => review._id !== id));
            }
          });
      }
    });
  };

  // Navigate to update review page
  const handleUpdate = (id) => {
    navigate(`/updateReview/${id}`);
  };

  return (
    <div className={`p-5 ${themeMode}`}>
      {/* Animated Header */}
      <Fade triggerOnce>
        <h2 className="text-3xl md:text-4xl font-bold mb-5 text-center">
          <Typewriter
            words={['My Reviews']}
            loop={false}
            cursor
            cursorStyle="_"
          />
        </h2>
      </Fade>

      {/* Animated Table */}
      <Slide direction="up" triggerOnce>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className='text-red-700 text-xl'>
                <th>#</th>
                <th>Game Title</th>
                <th>Review</th>
                <th>Rating</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review, index) => (
                <tr key={review._id}>
                  <td>{index + 1}</td>
                  <td>{review.name}</td>
                  <td>{review.review}</td>
                  <td>{review.rating}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-info mr-2"
                      onClick={() => handleUpdate(review._id)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-sm btn-error"
                      onClick={() => handleDelete(review._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Slide>
    </div>
  );
};

export default MyReviews;