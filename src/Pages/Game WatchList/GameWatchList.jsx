import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const GameWatchList = () => {
  const { darkMode } = useContext(AuthContext);

  // Define theme-specific classes
  const themeClasses = darkMode
    ? "bg-blue-900 text-white"
    : "bg-red-300 text-black";

  return (
    <div className={`min-h-screen ${themeClasses}`}>
      <Helmet>
        <title>Game WatchList - GameInsight</title>
      </Helmet>
      <div className="p-8">
        <h1 className="text-3xl font-bold">Your WatchList</h1>
        <p>Manage your favorite games here!</p>
      </div>
    </div>
  );
};

export default GameWatchList;
