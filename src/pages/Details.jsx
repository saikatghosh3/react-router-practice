import React, { useEffect, useState } from "react";

const Details = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-gray-600">Loading data...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        User Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cards */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {users.map((user) => (
            <div
              key={user.id}
              onClick={() => setSelectedUser(user)}
              className="bg-white p-4 rounded-lg shadow cursor-pointer hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {user.name}
              </h3>
              <p className="text-sm text-gray-500">
                {user.email}
              </p>
            </div>
          ))}
        </div>

        {/* Details Section */}
        <div className="bg-white rounded-lg shadow p-6">
          {selectedUser ? (
            <>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {selectedUser.name}
              </h3>
              <p className="text-gray-600 mb-1">
                <span className="font-semibold">Email:</span>{" "}
                {selectedUser.email}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-semibold">Phone:</span>{" "}
                {selectedUser.phone}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">City:</span>{" "}
                {selectedUser.address.city}
              </p>
            </>
          ) : (
            <p className="text-gray-500">
              Click on a card to see details
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
