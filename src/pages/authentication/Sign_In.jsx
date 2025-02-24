import React from "react";
import { NavLink } from "react-router-dom";

export const Sign_In = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full h-screen bg-gray-100">
      {/* Left Section - Sign In Form */}
      <div className="w-full sm:w-1/2 flex flex-col justify-center items-center p-6 md:p-10 bg-white shadow-lg">
        {/* Logo */}
        <div className="flex items-center ">
          <div className="w-8 h-8 bg-black rounded-full mr-2"></div>
          <h1 className="text-2xl md:text-3xl font-bold :text-gray-800">
            RATE A PROPERTY
          </h1>
        </div>

        {/* Sign In Form */}
        <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-md">
          <h2 className="text-white text-2xl font-semibold mb-6 text-center">
            Sign In
          </h2>

          <form action="#" method="POST" className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 sm:py-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 sm:py-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-3 rounded-md transition font-semibold"
            >
              Sign In ➤
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="text-gray-400 text-center mt-4">
            Don't have an account?{" "}
            <NavLink
              to="/signup"
              className="text-blue-400 hover:text-blue-300 transition font-semibold"
            >
              Sign Up
            </NavLink>
          </p>
        </div>
      </div>

      {/* Right Section - Welcome Message */}
      <div className="w-full sm:w-1/2 flex flex-col justify-center items-center bg-blue-600 text-white text-center p-6 sm:p-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Welcome to RATE A PROPERTY
        </h2>
        <p className="text-base sm:text-lg max-w-md">
          Discover, review, and share your experiences with properties
          worldwide. Join us today and make informed decisions!
        </p>
      </div>
    </div>
  );
};

export default Sign_In;
