import React from "react";

const Newsletter = () => {
  return (
    <div className="w-[80%] mx-auto">
      <div className="flex flex-col justify-center w-11/12 mx-auto bg-[#130E18] rounded-2xl my-8 border-2">
        <div className="flex justify-center pt-5">
          <h3 className="text-xl uppercase text-[#F24536] font-extrabold">Join newsletter</h3>
        </div>
        <div className="flex justify-center pb-4">
          <h2 className="text-4xl text-yellow-100 font-bold uppercase">Become one of Us</h2>
        </div>
        <div className="w-[60%] mx-auto">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow text-white " placeholder="Email" />
          </label>
        </div>
        <div></div>
        <div className="flex justify-center py-4">
          <button className="px-3 py-1 bg-[#E32B37] text-black font-bold text-2xl rounded-md">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;