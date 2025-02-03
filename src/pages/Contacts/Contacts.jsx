import React from "react";
import { BiLocationPlus } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall, MdMarkEmailRead } from "react-icons/md";

const Contacts = () => {
  return (
    <div>
      <div className="relative h-[300px] bg-gradient-to-b from-[#A70B0B] to-white overflow-hidden">
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-gray-700 font-bold text-2xl md:text-5xl lg:text-4xl leading-tight mb-4 font-[cursive]">
            Our Contacts
          </h1>
          <div className="text-gray-600  text-lg md:text-xl">
            <span className="mr-2">Home</span> - Contact
          </div>
        </div>
        <div className="absolute inset-0 "></div>{" "}
      </div>

      <div className="max-w-6xl mx-auto p-6 py-10 flex flex-col gap-10 md:gap-2 md:flex-row md:space-x-10">
        {/* Left Section */}
        <div className="md:w-1/3 space-y-6">
          <div>
            <h2 className="text-lg font-bold text-yellow-500 flex items-center">
              <span className="mr-2">
                <FaLocationDot />
              </span>{" "}
              Our Location
            </h2>
            <p className="text-gray-600 px-5">23 Demo Street, City, Country.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-red-500 flex items-center">
              <span className="mr-2">
                <MdCall />
              </span>{" "}
              Phone Number
            </h2>
            <p className="text-gray-600 px-5">+1234 567 890, 0987654321</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-orange-500 flex items-center">
              <span className="mr-2">
                <MdMarkEmailRead />
              </span>{" "}
              Email Address
            </h2>
            <p className="text-gray-600 px-5">support@kidiVerse.com</p>
            <p className="text-gray-600 px-5">hello@kidverse.com</p>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="md:w-2/3">
          <form className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              rows="4"
              placeholder="Your Messages"
              className="w-full col-span-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
            <button
              type="submit"
              className="w-full col-span-2 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
