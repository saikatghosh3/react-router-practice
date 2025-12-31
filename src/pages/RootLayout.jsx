import React from "react";
import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">
          React Router
        </h1>

        <nav>
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="block px-4 py-2 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="block px-4 py-2 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="block px-4 py-2 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/details"
                className="block px-4 py-2 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition"
              >
                Details
              </Link>
            </li>
            <li>
              <Link
                to="/details"
                className="block px-4 py-2 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition"
              >
                UserDetails
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="bg-white rounded-lg shadow-sm p-6 min-h-[calc(100vh-4rem)]">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default RootLayout;
