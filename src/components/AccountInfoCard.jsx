import React from "react";

export default function AccountInfoCard({ user }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Account Info</h3>
      <p>
        <strong>Name:</strong> {user.first_name} {user.last_name}
      </p>
      <p>
        <strong>Username:</strong> {user.user_name}
      </p>
      <p>
        <strong>Birthday:</strong> {user.birthday || "N/A"}
      </p>
    </div>
  );
}
