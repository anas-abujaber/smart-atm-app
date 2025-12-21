import React from "react";

export default function StatCard({ title, value }) {
  return (
    <div
      className="
      bg-white dark:bg-gray-800 
      rounded-xl shadow-md p-5 flex justify-between items-center
      dark:border-2 dark:border-blue-400/60
    "
    >
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
        <p className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-1">
          {value}
        </p>
      </div>
    </div>
  );
}
