import React from "react";
import { Link } from "react-router-dom";
import { PlusCircle, MinusCircle, Clock } from "lucide-react";

export default function QuickActions() {
  const actions = [
    { name: "Deposit", path: "/deposit", icon: PlusCircle, bg: "bg-green-50", text: "text-green-700", border: "border-green-200", hover: "hover:bg-green-100" },
    { name: "Withdraw", path: "/withdraw", icon: MinusCircle, bg: "bg-red-50", text: "text-red-700", border: "border-red-200", hover: "hover:bg-red-100" },
    { name: "History", path: "/history", icon: Clock, bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200", hover: "hover:bg-blue-100" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
      <div className="flex flex-col sm:flex-row gap-4">
        {actions.map((action) => (
          <Link
            key={action.name}
            to={action.path}
            className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-lg font-semibold transition-colors border 
              ${action.bg} ${action.text} ${action.border} ${action.hover}`}
          >
            <action.icon className="w-5 h-5" />
            <span>{action.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}