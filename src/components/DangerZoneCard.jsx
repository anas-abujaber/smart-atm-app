import React from "react";
import { AlertTriangle } from "lucide-react";

export default function DangerZoneCard({ onReset, isLoading }) {
  return (
    <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-400 rounded-xl shadow-md p-6 transition-colors duration-200">
      <div className="flex items-start space-x-3 mb-4">
        <AlertTriangle className="w-6 h-6 text-red-500 dark:text-red-400 mt-0.5" />
        <h3 className="text-xl font-bold text-red-700 dark:text-red-300">
          Danger Zone
        </h3>
      </div>
      <p className="text-red-600 dark:text-red-200 mb-4 ml-9">
        Reset will clear your balance and all transaction history. Cannot undo.
      </p>
      <button
        onClick={onReset}
        disabled={isLoading}
        className="flex items-center space-x-2 bg-red-600 dark:bg-red-700 text-white dark:text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 dark:hover:bg-red-600 transition-colors disabled:opacity-50 ml-9"
      >
        <span className="text-xl">🗑️</span>
        <span>{isLoading ? "Processing..." : "Reset Account"}</span>
      </button>
    </div>
  );
}
