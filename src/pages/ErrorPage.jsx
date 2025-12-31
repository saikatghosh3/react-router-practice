import React from "react";
import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-8 text-center">
        
        <h1 className="text-6xl font-bold text-red-500 mb-4">
          Oops!
        </h1>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Something went wrong
        </h2>

        <p className="text-gray-600 mb-6">
          {error.statusText || error.message}
        </p>

        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
