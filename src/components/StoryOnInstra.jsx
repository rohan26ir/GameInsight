import React from "react";
import insImg1 from "../assets/insta-01.jpg";
import insImg2 from "../assets/insta-02.jpg";
import insImg3 from "../assets/insta-03.jpg";
import insImg4 from "../assets/insta-04.jpg";
import insImg5 from "../assets/insta-05.jpg";
import insImg6 from "../assets/insta-06.jpg";
import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineViewInAr } from "react-icons/md";

const instraImages = [
  {
    image: `${insImg1}`,
    title: "Epic Battle in the Arena",
    unique_number: 1,
  },
  {
    image: `${insImg2}`,
    title: "Epic Battle in the Arena",
    unique_number: 2,
  },
  {
    image: `${insImg3}`,
    title: "Epic Battle in the Arena",
    unique_number: 3,
  },
  {
    image: `${insImg4}`,
    title: "Epic Battle in the Arena",
    unique_number: 4,
  },
  {
    image: `${insImg5}`,
    title: "Conquer the Unknown",
    unique_number: 5,
  },
  {
    image: `${insImg6}`,
    title: "Victory Awaits",
    unique_number: 6,
  },
];

const StoryOnInstra = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto p-2">
        {/* Start */}
        <div className="flex">

          {/* Left */}
        <div className="inline-flex justify-center items-center -ml-0 md:-ml-16">
          <div className="uppercase text-lime-400 -rotate-90 w-0 md:w-32 flex items-center gap-1"> <MdOutlineViewInAr className="hidden md:block" /> View Our</div>
        </div>

        {/* middle */}
        <div className="space-y-3 p-8 my-auto">
          <h2 className="uppercase text-5xl font-bold ">
            Story on Instagram
          </h2>
          <p className="text-gray-400">
            Join the game, share the thrill your next adventure <br /> starts
            here!
          </p>

          <div className="bg-[#BFFF00] w-fit px-3 py-1 rounded-md text-xl">
            <button className="flex items-center gap-2 text-black">
              {" "}
              <IoLogoInstagram /> <span className="text-lg">/GameInsight</span>
            </button>
          </div>
        </div>
        </div>

        {/* Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {instraImages.map((instra) => (
            <div key={instra.unique_number} className="relative group">
              <img
                className="h-52 w-full object-cover transition-all duration-300"
                src={instra.image}
                alt={instra.title}
              />

              {/* Instagram Icon */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <a target="_blank" href="https://www.instagram.com/rohan26ir">
                  <IoLogoInstagram className="text-4xl text-whites bg-rose-600 rounded-xl" />
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* End */}
      </div>
    </div>
  );
};

export default StoryOnInstra;
