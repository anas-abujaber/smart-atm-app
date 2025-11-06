import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex flex-col ">
      <Navbar />

      <div className="flex flex-col sm:flex-row mt-4 sm:mt-8 gap-4 px-4 sm:px-6 lg:px-12">
        <div className="w-full sm:w-auto shrink-0">
          <Sidebar />
        </div>

        <main className="flex-1 font-sans">{children}</main>
      </div>
    </div>
  );
}
