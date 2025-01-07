import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Fade, Zoom } from 'react-awesome-reveal';

const CountCard = () => {
  return (
    <div className="my-8 w-11/12 mx-auto">
      {/* Title with Typewriter Effect */}
      <h2 className="text-3xl font-bold p-3 text-center text-[#F14334]">
        <Typewriter words={['Other Features']} loop={false} cursor cursorStyle="_" />
      </h2>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {/* Twitch Streams */}
        <Zoom triggerOnce>
          <div className="bg-[#130E18] rounded-xl text-center font-bold text-white p-8 shadow-lg transform hover:scale-105 transition duration-300">
            <p className="text-4xl mb-2">201</p>
            <h2 className="text-lg">Twitch Streams</h2>
          </div>
        </Zoom>

        {/* YouTube Streams */}
        <Zoom triggerOnce>
          <div className="bg-[#130E18] rounded-xl text-center font-bold text-white p-8 shadow-lg transform hover:scale-105 transition duration-300">
            <p className="text-4xl mb-2">150</p>
            <h2 className="text-lg">YouTube Streams</h2>
          </div>
        </Zoom>

        {/* Players */}
        <Fade direction="up" triggerOnce>
          <div className="bg-[#130E18] rounded-xl text-center font-bold text-white p-8 shadow-lg transform hover:scale-105 transition duration-300">
            <p className="text-4xl mb-2">301</p>
            <h2 className="text-lg">Players</h2>
          </div>
        </Fade>

        {/* Pro Teams */}
        <Fade direction="up" triggerOnce>
          <div className="bg-[#130E18] rounded-xl text-center font-bold text-white p-8 shadow-lg transform hover:scale-105 transition duration-300">
            <p className="text-4xl mb-2">20</p>
            <h2 className="text-lg">Pro Teams</h2>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default CountCard;
