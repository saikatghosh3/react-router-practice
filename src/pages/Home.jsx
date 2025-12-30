import React from "react";

const Home = () => {
  return (
    <section className="max-w-6xl mx-auto">
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-10 text-white mb-10">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to React Router Practice
        </h1>
        <p className="text-lg opacity-90 max-w-2xl">
          Learn how nested routes, layouts, and Outlet work together to build
          scalable React applications.
        </p>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Nested Routes
          </h3>
          <p className="text-gray-600">
            Organize your application using parent and child routes for better
            structure.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Shared Layout
          </h3>
          <p className="text-gray-600">
            Reuse sidebar and headers across pages with layout components.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Outlet Power
          </h3>
          <p className="text-gray-600">
            Render dynamic child content inside a fixed layout using Outlet.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Home;
