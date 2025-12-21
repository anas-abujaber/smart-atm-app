import React from "react";

export default function AccountInfoCard({ user }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-transparent dark:border-blue-400/60 transition-colors duration-200">
      <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
        Account Info
      </h3>
      <p className="text-gray-700 dark:text-gray-200 mb-1">
        <strong>Name:</strong> {user.first_name} {user.last_name}
      </p>
      <p className="text-gray-700 dark:text-gray-200 mb-1">
        <strong>Username:</strong> {user.user_name}
      </p>
      <p className="text-gray-700 dark:text-gray-200">
        <strong>Birthday:</strong> {user.birthday || "N/A"}
      </p>
    </div>
  );
}
