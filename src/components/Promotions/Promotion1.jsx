import React from "react";

const Promotion1 = () => {
  const promotions = [
    {
      id: 1,
      title: "Exclusive Game Bundle - Save 30%",
      description: "Get the ultimate gaming bundle with top titles at an unbeatable price!",
      link: "#",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Promo Code: GAMER2025",
      description: "Use the code at checkout to get 15% off selected games.",
      link: "#",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Seasonal Discounts - Up to 50% Off",
      description: "Don't miss these limited-time discounts on your favorite games!",
      link: "#",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <section className="bg-gray-900 py-10 px-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Promotions & Offers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden"
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
                <a
                  href={promo.link}
                  className="text-blue-500 hover:text-blue-400 font-medium"
                >
                  Learn More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotion1;
