import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Typewriter } from "react-simple-typewriter";

const AddReview = () => {

  
  const { user } = useContext(AuthContext);


  const handleAddCoffee = (e) => {
    e.preventDefault();

    const photo = e.target.photo.value;
    const name = e.target.name.value;
    const review = e.target.review.value;
    const rating = e.target.rating.value;
    const year = e.target.year.value;
    const genre = e.target.genre.value;
    const userEmail = e.target.userEmail.value;
    const userName = e.target.userName.value;

    const newReview = {
      photo,
      name,
      review,
      rating,
      year,
      genre,
      userEmail,
      userName,
    };

    console.log(newReview);

    // send data to the server and database
    fetch("https://gameinsight-server.vercel.app/addReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("successfully added");
          Swal.fire({
            title: "Success!",
            text: "Review added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          e.target.reset();
        }
      });
  };

  return (
    <div className="lg:w-3/4 mx-auto">
      <div className="text-center p-4">
        <h1 className="text-5xl font-bold">
        <Typewriter
          words={['Add Review']}
          loop={false}
          cursor
          cursorStyle="_"
        />
        </h1>
        <p className="py-6">
          Share your thoughts about your favorite games! Submit your review
          below.
        </p>
      </div>
      <div className="card bg-cyan-800 mb-5 w-full shrink-0 shadow-2xl">
        <form onSubmit={handleAddCoffee} className="card-body">
          {/* Game Cover Image */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Game Cover Image</span>
            </label>
            <input
              type="text"
              name="photo"
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
              className="select select-bordered"
              defaultValue="Action"
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
            <button className="btn btn-primary">Submit Review</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
