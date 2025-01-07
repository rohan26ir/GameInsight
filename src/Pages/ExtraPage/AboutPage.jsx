import React from "react";
import Lottie from "lottie-react";
import profileMan from '../../../public/profile.json';

const AboutPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-10 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">About GameInsight</h1>
          <p className="text-lg text-gray-300">
            Welcome to GameInsight, your one-stop platform for honest and
            detailed game reviews. Built in 2024 by Rohan, GameInsight was
            designed for gamers to discover, review, and organize their favorite
            games in one place.
          </p>
        </header>

        <section>
          <div className="">
            <h2 className="text-2xl font-bold">About the Creator</h2>
          </div>
          <div className="bg-gray-800 rounded-2xl text-black p-5 my-4 w-[60%] mx-auto">
            <div className="flex flex-col justify-center items-center">
              <div>
              <Lottie animationData={profileMan} loop={true} className="h-40" ></Lottie>
              </div>
              <h2 className="text-2xl text-gray-100 font-bold -mt-5">M.I. Rohan</h2>
            </div>
            <div className="text-xl text-gray-300 justify-center text-center">
            <p>I built GameInsight in 2024 with a passion for gaming 
            and a goal to help others discover amazing games easily.</p>
            </div>
          </div>
        </section>

        {/* Social Media Links */}
        <footer className="mt-10 text-center">
          <h2 className="text-2xl font-semibold mb-4">Connect with Us</h2>
          <div className="flex justify-center space-x-4">
            <a
              href="https://facebook.com/GameInsight"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com/GameInsight"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com/GameInsight"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-400"
            >
              Instagram
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
