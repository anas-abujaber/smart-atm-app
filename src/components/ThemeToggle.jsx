import React from "react";
import useTheme from "../hooks/useTheme";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="p-6 bg-white dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-md border border-transparent dark:border-blue-400/60 transition-colors duration-200">
      <h3 className="text-2xl mb-6 text-gray-800 dark:text-gray-100 font-semibold tracking-wide">
        Appearance Settings
      </h3>

      <button
        onClick={toggleTheme}
        className={`group flex items-center justify-center gap-4 px-8 py-4 rounded-xl font-medium text-lg
          bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary
          ${isDark ? "text-white" : "text-gray-800"} 
          transition-all duration-500 ease-in-out shadow-lg hover:shadow-2xl hover:scale-105 hover:opacity-95 border-2 border-transparent hover:border-light-secondary dark:hover:border-dark-secondary backdrop-blur-sm`}
      >
        {isDark ? (
          <>
            <Sun
              size={26}
              className="transition-transform duration-700 ease-in-out transform rotate-0 group-hover:rotate-360 text-yellow-400"
            />
            <span>Switch to Light Mode</span>
          </>
        ) : (
          <>
            <Moon
              size={26}
              className="transition-transform duration-700 ease-in-out transform rotate-0 group-hover:rotate-360 text-gray-800"
            />
            <span>Switch to Dark Mode</span>
          </>
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
