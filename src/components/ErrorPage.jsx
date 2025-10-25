// src/components/ErrorPage.jsx
import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-white text-center p-8">
      <h1 className="text-6xl font-extrabold text-red-500 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">
        Oops! Page Not Found 😢
      </h2>
      <p className="text-gray-600 mb-8 max-w-md">
        Looks like you wandered off the route! Don’t worry — even Google Maps gets lost sometimes.
      </p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
