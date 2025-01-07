import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const LearnMorePage = () => {
  const { id } = useParams(); // Extract the id from the URL
  const [promo, setPromo] = useState(null);

  const { darkMode } = useContext(AuthContext);
  
    const themeMode = darkMode
      ? "bg-black text-white"
      : "bg-[#FFF5CD] text-black";

  useEffect(() => {
    // Fetch the promo details by ID
    fetch(`/promotions.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch promotion data");
        }
        return res.json();
      })
      .then((data) => {
        // Find the promotion that matches the id
        const selectedPromo = data.find((promo) => promo.id === parseInt(id));
        setPromo(selectedPromo);
      })
      .catch((error) => console.error(error));
  }, [id]);

  if (!promo) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <h1 className="text-2xl font-semibold">Promotion not found</h1>
      </div>
    );
  }

  const { title, description, image, details } = promo;

  return (
    <section className={`${themeMode}  py-12`}>
      <div className="w-11/12 mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <img
            src={image}
            alt={title}
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>
        <div className="lg:w-1/2 pl-6">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg mb-4">{details?.description || description}</p>
          <h2 className="text-2xl font-semibold mb-2">Terms and Conditions</h2>
          <p className="text-gray-300 text-sm">{details?.terms || "N/A"}</p>
          <button
            onClick={() => window.history.back()}
            className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400"
          >
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
};

export default LearnMorePage;
