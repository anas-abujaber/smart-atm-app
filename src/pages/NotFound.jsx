import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen 
      bg-gray-100 dark:bg-gray-900 
      text-gray-800 dark:text-gray-100 
      transition-colors duration-300"
    >
      <p className="mb-6 text-xl font-semibold flex items-center gap-2">
        <span>⚠️</span>
        <span>Oops! Page not found</span>
      </p>

      <Link to="/dashboard">
        <button
          className="
            px-6 py-3 rounded-xl font-medium shadow-md
            bg-blue-600 text-white
            hover:bg-blue-700 hover:shadow-lg
            dark:bg-blue-500 dark:hover:bg-blue-600
            transition-all duration-300
          "
        >
          Go Home
        </button>
      </Link>
    </div>
  );
}
