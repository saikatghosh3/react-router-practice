import React from "react";

const Contact = () => {
  return (
    <section className="max-w-4xl mx-auto">
      
      {/* Page Title */}
      <h2 className="text-3xl font-bold text-gray-800 mb-2">
        Contact Us
      </h2>
      <p className="text-gray-500 mb-8">
        Have questions or need help? Feel free to reach out.
      </p>

      {/* Card */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">
              Email
            </h3>
            <p className="text-gray-600">
              support@example.com
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700">
              Phone
            </h3>
            <p className="text-gray-600">
              +880 1234 567 890
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700">
              Address
            </h3>
            <p className="text-gray-600">
              Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;
