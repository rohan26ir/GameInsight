import React from "react";
import Slider from "react-slick";

const GameSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false, // You can enable this if you want next/prev arrows
  };

  const banners = [
    {
      image: "https://example.com/banner1.jpg",
      title: "Epic Battles Await!",
      description: "Join the fight and become a legend.",
    },
    {
      image: "https://example.com/banner2.jpg",
      title: "Explore New Worlds",
      description: "Adventure beyond the horizon.",
    },
    {
      image: "https://example.com/banner3.jpg",
      title: "Level Up Your Game",
      description: "Take your skills to the next level.",
    },
  ];

  return (
    <div className="w-11/12 mx-auto p-4">
      <Slider {...sliderSettings}>
        {banners.map((banner, index) => (
          <div key={index} className="relative">
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center">
              <h2 className="text-white text-4xl font-bold drop-shadow-lg">
                {banner.title}
              </h2>
              <p className="text-gray-300 text-lg mt-2">{banner.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GameSlider;
