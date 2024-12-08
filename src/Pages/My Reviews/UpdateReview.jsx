import React, { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useParams, useNavigate } from "react-router-dom";

const UpdateReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState({
    photo: "",
    name: "",
    review: "",
    rating: "",
    year: "",
    genre: "",
  });

  const [loading, setLoading] = useState(true);

  // Fetch existing review data
  useEffect(() => {
    fetch(`https://gameinsight-server.vercel.app/review/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch review:", error);
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to fetch review. Please try again later.",
        });
      });
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleUpdateReview = (e) => {
    e.preventDefault();

    fetch(`https://gameinsight-server.vercel.app/updateReview/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Review updated successfully.",
            icon: "success",
            confirmButtonText: "Ok",
          });
          navigate("/myReviews");
        } else {
          Swal.fire({
            icon: "warning",
            title: "No Changes",
            text: "No changes were made to the review.",
          });
        }
      })
      .catch((error) => {
        console.error("Failed to update review:", error);
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: "An error occurred while updating the review. Please try again.",
        });
      });
  };

  return (
    <div className="lg:w-3/4 mx-auto">
      {loading ? (
        <div className="text-center p-6">
          <h1 className="text-2xl font-bold">Loading...</h1>
        </div>
      ) : (
        <>
          <div className="text-center p-4">
            <h1 className="text-5xl font-bold">Update Review</h1>
            <p className="py-6">
              Modify your thoughts about this game. Update the details below!
            </p>
          </div>
          <div className="card bg-cyan-800 mb-5 w-full shrink-0 shadow-2xl">
            <form onSubmit={handleUpdateReview} className="card-body">
              {/* Game Cover Image */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Game Cover Image</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  value={review.photo}
                  onChange={handleChange}
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Game Title */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Game Title</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={review.name}
                  onChange={handleChange}
                  placeholder="Enter game title"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Review Description */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Review Description</span>
                </label>
                <textarea
                  name="review"
                  value={review.review}
                  onChange={handleChange}
                  placeholder="Write your detailed review here"
                  className="textarea textarea-bordered"
                  required
                ></textarea>
              </div>

              {/* Rating */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating (1-10)</span>
                </label>
                <input
                  type="number"
                  name="rating"
                  value={review.rating}
                  onChange={handleChange}
                  placeholder="Rate the game (1-10)"
                  className="input input-bordered"
                  min="1"
                  max="10"
                  required
                />
              </div>

              {/* Publishing Year */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Publishing Year</span>
                </label>
                <input
                  type="number"
                  name="year"
                  value={review.year}
                  onChange={handleChange}
                  placeholder="e.g., 2024"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Genres */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Genre</span>
                </label>
                <select
                  name="genre"
                  value={review.genre}
                  onChange={handleChange}
                  className="select select-bordered"
                >
                  <option>Action</option>
                  <option>RPG</option>
                  <option>Adventure</option>
                  <option>Strategy</option>
                  <option>Puzzle</option>
                  <option>Shooter</option>
                </select>
              </div>

              {/* User Email (Read-Only) */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Email</span>
                </label>
                <input
                  type="email"
                  name="userEmail"
                  value={user.email}
                  readOnly
                  className="input input-bordered bg-gray-200 cursor-not-allowed"
                />
              </div>

              {/* User Name (Read-Only) */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  name="userName"
                  value={user.displayName}
                  readOnly
                  className="input input-bordered bg-gray-200 cursor-not-allowed"
                />
              </div>

              {/* Submit Button */}
              <div className="form-control mt-6">
                <button className="btn btn-primary">Update Review</button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default UpdateReview;
