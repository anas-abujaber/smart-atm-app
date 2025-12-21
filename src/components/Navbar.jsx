import React from "react";
import { LogOutIcon } from "lucide-react";
import { useUser } from "../context/AuthContext";
import { toast } from "sonner";

export default function Navbar() {
  const { user, logout } = useUser();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <span className="text-white font-bold text-xl">
                <img src="../../public/logo.png" alt="" />
              </span>
            </div>
            <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              Smart ATM
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            {user && (
              <div className="flex items-center space-x-3">
                <img
                  src={user.profile_img}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full object-cover border border-gray-300 dark:border-gray-500"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  {user.first_name} {user.last_name}
                </span>
              </div>
            )}

            <button
              onClick={() => {
                logout();
                toast.info("Logged out successfully");
              }}
              className="flex items-center space-x-2 px-4 py-2 bg-red-500 dark:bg-red-600 text-white rounded-lg hover:bg-red-600 dark:hover:bg-red-700 transition-colors"
            >
              <LogOutIcon className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
