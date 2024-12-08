import React, { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet";
import { FaFantasyFlightGames } from "react-icons/fa";
import { SiRescuetime } from "react-icons/si";
import { TbDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AllReviews = () => {

  const {darkMode} = useContext(AuthContext);

  const [addedReviews, setAddedReviews] = useState([]);

  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("asc");

  const themeMode = darkMode
    ? "bg-black text-white"
    : "bg-[#FFF5CD] text-black";
    
    const sortMode = darkMode
      ? "bg-red-600 text-white"
      : "bg-[#35374B] text-black";

    const padding = addedReviews
    ? "p-11"
    : ""

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const queryParams = new URLSearchParams();
        if (sortBy) queryParams.append("sortBy", sortBy);
        if (order) queryParams.append("order", order);

        const response = await fetch(
          `https://gameinsight-server.vercel.app/addReview?${queryParams}`
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
    <div className={`${themeMode}`}>
      <Helmet>
        <title>All Review - GameInsight</title>
      </Helmet>

      <div className="pt-5 w-11/12 mx-auto">
        

        <div className="flex justify-between items-center my-4 ">
          <div>
          <h2 className="text-2xl md:text-5xl font-bold">All Reviews</h2>
          </div>
          <div>
          <select
            className={`p-2 border rounded bg-red-600 ${sortMode}`}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Sort by</option>
            <option value="rating">Rating</option>
            <option value="year">Year</option>
          </select>

          <select
            className={`p-2 border rounded ml-2 bg-red-600 ${sortMode}`}
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
          </div>
        </div>
      </div>

      <div className="gap-6 md:gap-3 lg:gap-3 grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto m
      py-6">
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
      <div className={` ${padding}`}></div>
    </div>
  );
};

export default AllReviews;