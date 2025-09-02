"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

export const dynamic = "force-dynamic";

const ShowSchool = () => {
  const [allschool, setAllSchool] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";
    axios
      .get(`${apiUrl}/api/showSchool`)
      .then((response) => {
        console.log("Response from backend:", response.data.message);
        setAllSchool(response.data.allregisteredschool || []);
      })
      .catch((error) => {
        console.error("Error fetching schools:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center text-white">
        Loading schools...
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] py-12 px-6">
      <h1 className="text-5xl font-bold text-white text-center mb-12">
        All Schools
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {allschool.length > 0 ? (
          allschool.map((school) => (
            <div
              key={school.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-105 flex flex-col overflow-hidden h-[450px]"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={school.imageurl}
                  alt={school.name}
                  className="h-full w-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </div>

              <div className="p-5 flex flex-col justify-between flex-1">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {school.name}
                </h2>
                <p className="text-gray-700 text-sm mb-1">
                  <span className="font-medium">Address:</span> {school.address}
                </p>
                <p className="text-gray-700 text-sm mb-1">
                  <span className="font-medium">City:</span> {school.city}
                </p>
                <p className="text-gray-700 text-sm mb-1">
                  <span className="font-medium">State:</span> {school.state}
                </p>
                <p className="text-gray-700 text-sm mb-1">
                  <span className="font-medium">Contact:</span> {school.contact}
                </p>
                <p className="text-gray-700 text-sm mb-4">
                  <span className="font-medium">Email:</span> {school.email_id}
                </p>

                <button className="mt-auto bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                  View Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg col-span-full">
            No schools available
          </p>
        )}
      </div>
    </div>
  );
};

export default ShowSchool;
