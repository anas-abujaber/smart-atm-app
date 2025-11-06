import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Clock,
  PlusCircle,
  MinusCircle,
  LayoutDashboard,
  Star,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard }, 
    { name: "Deposit", path: "/deposit", icon: PlusCircle },
    { name: "Withdraw", path: "/withdraw", icon: MinusCircle },
    { name: "History", path: "/history", icon: Clock },
    { name: "Watchlist", path: "/watchlist", icon: Star },
    { name: "Settings", path: "/settings", icon: Settings },
  ];

  return (
    <>
      <aside
        className={`
          bg-white rounded-xl shadow-md p-4 w-11/12 max-w-xs sm:w-56 md:w-64 h-fit
          fixed top-16 left-0 z-40
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          sm:translate-x-0 sm:relative sm:top-0
        `}
      >
        <nav className="flex flex-col space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                <Icon className="w-5 h-5 sm:w-5 sm:h-5" />
                <span className="truncate">{item.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </aside>

      <button
        className="sm:hidden fixed bottom-4 left-4 p-3 bg-blue-500 text-white rounded-full shadow-lg z-50"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>
    </>
  );
}
