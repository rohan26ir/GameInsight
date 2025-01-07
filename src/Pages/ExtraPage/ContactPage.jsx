import React from "react";

const ContactPage = () => {
  const handleSend = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen py-10 px-5">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4 animate-fadeInDown">Contact Us</h1>
        <p className="text-lg text-gray-300 animate-fadeInUp">
          Have questions or need assistance? We'd love to hear from you. Fill out the form below or reach out to us directly.
        </p>
      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row gap-5 w-11/12 mx-auto">
        {/* Contact Form */}
        <div className="flex-1 animate-fadeInLeft">
          <section className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <form onSubmit={handleSend}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    aria-label="Enter your name"
                    className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    aria-label="Enter your email"
                    className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  aria-label="Write your message"
                  rows="5"
                  className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Write your message here"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-3 bg-blue-500 rounded text-white font-semibold hover:bg-blue-400 transition-transform duration-200 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </section>
        </div>

        {/* Contact Information */}
        <div className="flex-1 flex justify-center items-center animate-fadeInRight">
          <section className="text-center bg-gray-800 h-[100%] w-[100%] p-12 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-4">Our Contact Details</h2>
            <p className="text-gray-300 mb-4">
              <span className="font-semibold">Email:</span> support@gameinsight.com
            </p>
            <p className="text-gray-300 mb-4">
              <span className="font-semibold">Phone:</span> +1 (234) 567-8901
            </p>
            <p className="text-gray-300 mb-4">
              <span className="font-semibold">Address:</span> 123 Game Insight Street, Gaming City, GC 45678
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-6 justify-center">
                <a
                  href="https://facebook.com/GameInsight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transform hover:scale-110 transition-transform"
                >
                  Facebook
                </a>
                <a
                  href="https://twitter.com/GameInsight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transform hover:scale-110 transition-transform"
                >
                  Twitter
                </a>
                <a
                  href="https://instagram.com/GameInsight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-400 transform hover:scale-110 transition-transform"
                >
                  Instagram
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
