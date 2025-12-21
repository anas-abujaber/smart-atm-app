import React from "react";
import { Link } from "react-router-dom";
import { PlusCircle, MinusCircle, Clock } from "lucide-react";

export default function QuickActions() {
  const actions = [
    {
      name: "Deposit",
      path: "/deposit",
      icon: PlusCircle,
      bg: "bg-green-50 dark:bg-green-900/30",
      text: "text-green-700 dark:text-green-300",
      border: "border-green-200 dark:border-green-700",
      hover: "hover:bg-green-100 dark:hover:bg-green-800/50",
    },
    {
      name: "Withdraw",
      path: "/withdraw",
      icon: MinusCircle,
      bg: "bg-red-50 dark:bg-red-900/30",
      text: "text-red-700 dark:text-red-300",
      border: "border-red-200 dark:border-red-700",
      hover: "hover:bg-red-100 dark:hover:bg-red-800/50",
    },
    {
      name: "History",
      path: "/history",
      icon: Clock,
      bg: "bg-blue-50 dark:bg-blue-900/30",
      text: "text-blue-700 dark:text-blue-300",
      border: "border-blue-200 dark:border-blue-700",
      hover: "hover:bg-blue-100 dark:hover:bg-blue-800/50",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 dark:border-2 dark:border-blue-400/60">
      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        Quick Actions
      </h3>
      <div className="flex flex-col sm:flex-row gap-4">
        {actions.map((action) => (
          <Link
            key={action.name}
            to={action.path}
            className={`
              flex-1 flex items-center justify-center space-x-2 py-3 rounded-lg font-semibold transition-colors border
              ${action.bg} ${action.text} ${action.border} ${action.hover}
            `}
          >
            <action.icon className="w-5 h-5" />
            <span>{action.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
