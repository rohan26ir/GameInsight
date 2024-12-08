import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Loading from "../../components/Loading";

const GameWatchList = () => {
  const { darkMode, user } = useContext(AuthContext);
  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const themeMode = darkMode
    ? "bg-black text-white"
    : "bg-white text-black";

  const cardMode = darkMode
    ? "text-black border-black"
    // ? "bg-gray-800 text-white border-gray-700"
    : "bg-gray-800 text-white border-gray-700";
    // : "bg-gray-200 text-black border-gray-300";

    const headtext = darkMode
    ? "text-orange-500"
    : "text-blue-600 "

    const border = darkMode
    ? "border-y-2 border-black p-3"
    : "border-y-2 border-white p-3"

  useEffect(() => {
  
    const fetchWatchlist = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/watchlist?email=${user.email}`
        );

        const data = await response.json();
        setWatchlist(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWatchlist();
  }, [user?.email]);

  return (
    <div className={`min-h-screen ${themeMode}`}>
      <Helmet>
        <title>Game WatchList - GameInsight</title>
      </Helmet>
      <div className="p-20 ">
        <div className="flex justify-between px-2">
          <div>
          <h1 className="text-3xl font-bold">Your WatchList</h1>
          </div>
          <div>
            <h2 className="text-xl font-bold">Total Watch List: {watchlist.length}</h2>
          </div>
        </div>
        
          <div className="mt-2 overflow-x-auto bg-red-600">
            <table
              className={`min-w-full  ${cardMode}`}
            >
              <thead className={`${headtext}`}>
                <tr>
                  <th className={` ${border} p-3 text-2xl text-left`}>Game Name</th>
                  <th className={` ${border} p-3 text-2xl text-left`}>Rating</th>
                  <th className={` ${border} p-3 text-2xl text-left`}>Genre</th>
                  {/* <th className={` ${border} p-3 text-2xl text-left`}>Added By</th> */}
                </tr>
              </thead>

              <h3 className="     "></h3>

              <tbody>
                {watchlist.map((item) => (
                  <tr key={item._id} className="">
                    <td className={` ${border} p-3`}>{item.name}</td>
                    <td className={` ${border} p-3`}>{item.rating}</td>
                    <td className={` ${border} p-3`}>{item.genre}</td>
                    {/* <td className={` ${border} p-3`}>{item.userName}</td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      </div>
    </div>
  );
};

export default GameWatchList;
