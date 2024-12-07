import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { FaFantasyFlightGames } from "react-icons/fa";
import { SiRescuetime } from "react-icons/si";
import { TbDetails } from "react-icons/tb";
import { Link } from "react-router-dom";

const AllReviews = () => {


  const [addedReviews, setAddedReviews] = useState([]);

  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("asc");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const queryParams = new URLSearchParams();
        if (sortBy) queryParams.append("sortBy", sortBy);
        if (order) queryParams.append("order", order);

        const response = await fetch(
          `http://localhost:5000/addReview?${queryParams}`
        );
        const data = await response.json();
        setAddedReviews(data);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };

    fetchReviews();
  }, [sortBy, order]);

  return (
    <div>
      <Helmet>
        <title>All Review - GameInsight</title>
      </Helmet>

      <div className="mt-32 w-11/12 mx-auto">
        <h2 className="text-5xl font-bold">All Reviews</h2>
        <p>Total: {addedReviews.length}</p>

        <div className="flex justify-end my-4">
          <select
            className="p-2 border rounded"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Sort by</option>
            <option value="rating">Rating</option>
            <option value="year">Year</option>
          </select>

          <select
            className="p-2 border rounded ml-2"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      <div className="gap-2 grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto my-6">
        {addedReviews.map((addedReview) => (
          <div
            key={addedReview._id}
            className="border-2 border-[#343c52] bg-[#283044] rounded-lg shadow-2xl"
          >
            <div className="flex justify-between w-11/12 mx-auto">
              <div className="flex items-center w-[30%]">
                <img
                  className="h-28 w-28 object-cover"
                  src={addedReview.photo}
                  alt=""
                />
              </div>
              <div className="w-[50%] text-right p-2">
                <h2 className="text-2xl font-bold text-white">
                  {addedReview.name}
                </h2>
                <p>
                  <div className="rating h-[10px] mr-3">
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star"
                    />
                  </div>
                  <span className="text-2xl">{addedReview.rating}</span>
                </p>
                <div className="flex justify-end gap-3 my-2 text-black">
                  <p className="bg-orange-500 px-2 py-1 rounded-md flex items-center gap-1">
                    <SiRescuetime />
                    {addedReview.year}
                  </p>
                  <p className="bg-orange-500 px-2 py-1 rounded-md flex items-center gap-1">
                    <FaFantasyFlightGames /> {addedReview.genre}
                  </p>
                </div>
                <div className="flex justify-end">
                  <Link to={`/review/${addedReview._id}`}>
                    <button className="bg-red-600 px-3 py-1 rounded flex items-center gap-1">
                      <TbDetails /> Explore Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;