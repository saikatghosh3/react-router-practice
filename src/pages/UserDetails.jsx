import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();   
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-gray-600">Loading user details...</p>;
  }

  return (
    <div className="max-w-xl mx-auto">
      <div className="bg-black shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          User Details
        </h2>

        <p className="text-gray-700 mb-2">
          <span className="font-semibold">ID:</span> {user.id}
        </p>

        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Name:</span> {user.name}
        </p>

        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Email:</span> {user.email}
        </p>

        <p className="text-gray-700">
          <span className="font-semibold">City:</span>{" "}
          {user.address.city}
        </p>
      </div>
    </div>
  );
};

export default UserDetails;
