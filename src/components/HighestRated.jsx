import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import worrior from "../assets/worrior.png";

const HighestRated = () => {
  const [highestRatedGames, setHighestRatedGames] = useState([]);

  useEffect(() => {
    const ftHighestRatedGames = async () => {
      try {
        const response = await fetch("http://localhost:5000/highestRated");
        const data = await response.json();
        setHighestRatedGames(data);
      } catch (error) {
        console.error("Failed to fetch highest rated games:", error);
      }
    };

    ftHighestRatedGames();
  }, []);

  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-4xl font-bold my-2">Highest Rated Games</h2>
      

      {/* Game Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {highestRatedGames.map((game) => (
          <div key={game._id} className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
            <img
              className="h-48 w-full object-cover rounded-lg"
              src={game.photo || "https://via.placeholder.com/150"}
              alt={game.name}
            />
            <h3 className="text-2xl font-bold mt-4">{game.name}</h3>
            <p>Rating: {game.rating}</p>
            <p>Genre: {game.genre}</p>
            <Link to={`/review/${game._id}`}>
              <button className="bg-red-600 px-4 py-2 mt-4 rounded">
                Explore Details
              </button>
            </Link>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default HighestRated;
