import React from "react";

export default function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 flex justify-between items-center">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-bold text-gray-800 mt-1">{value}</p>
      </div>
    </div>
  );
}
