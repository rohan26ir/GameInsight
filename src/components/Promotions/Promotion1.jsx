import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Promotion1 = () => {
  const [promotions, setPromotions] = useState([]);



  const { darkMode } = useContext(AuthContext);

  const themeMode = darkMode
    ? "bg-black text-white"
    : "   hover:bg-[#fff6ee]  text-black";

  useEffect(() => {
    fetch("/promotions.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch promotions data");
        }
        return res.json();
      })
      .then((data) => setPromotions(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className={`${themeMode} py-10      `}>
      <div className="w-11/12 mx-auto justify-between">
        <h2 className="text-3xl font-bold text-[#EE4333] text-center mb-8">
          Promotions & Offers
        </h2>
        {promotions.length === 0 ? (
          <p className="text-white text-center">Loading promotions...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {promotions.map((promo) => (
              <div
                key={promo.id}
                className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden"
              >
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {promo.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {promo.description}
                  </p>
                  <Link
                    to={`/promotions/${promo.id}`}
                    className="text-blue-500 hover:text-blue-400 font-medium"
                  >
                    Learn More &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Promotion1;
