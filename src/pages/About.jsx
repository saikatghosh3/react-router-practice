import React from "react";

const About = () => {
  return (
    <section className="max-w-5xl mx-auto">
      
      {/* Page Title */}
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        About This Project
      </h2>
      <p className="text-gray-500 mb-8">
        A simple React Router practice project focused on layouts and nested
        routing.
      </p>

      {/* Content Card */}
      <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
        <p className="text-gray-700 leading-relaxed">
          This project is built to understand how React Router works in real
          world applications. It demonstrates the use of shared layouts, nested
          routes, and the <span className="font-semibold">Outlet</span> component
          to render dynamic content inside a fixed UI structure.
        </p>

        <p className="text-gray-700 leading-relaxed">
          By using a sidebar layout, all pages such as Home, About, and Contact
          share the same navigation while only the main content area changes
          based on the route.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Tailwind CSS is used to keep the UI clean, responsive, and easy to
          maintain in a scalable project.
        </p>
      </div>

    </section>
  );
};

export default About;
