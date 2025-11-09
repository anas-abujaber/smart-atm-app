import React from "react";
import { PlusCircleIcon, MinusCircleIcon } from "lucide-react";

export default function TransactionList({ transactions }) {
  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${day}/${month}/${year} at ${hours}:${minutes}`;
  };

  if (!transactions || transactions.length === 0) {
    return (
      <div className="text-center text-gray-500 font-medium">
        No transactions found.
      </div>
    );
  }

  return (
    <div>
      {transactions.map((tx) => (
        <div
          key={tx.id}
          className="flex items-center justify-between bg-gray py-4 px-5 mb-3 rounded-xl shadow-md transition-colors duration-200 hover:bg-gray-100"
        >
          <div
            className={`flex justify-center items-center w-12 h-12 rounded-full ${
              tx.type === "Deposit"
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {tx.type === "Deposit" ? (
              <PlusCircleIcon className="w-6 h-6" />
            ) : (
              <MinusCircleIcon className="w-6 h-6" />
            )}
          </div>

          <div className="flex-1 ml-4 flex flex-col">
            <div className="font-bold text-base">{tx.type}</div>
            <div className="text-xs text-gray-500 mt-0.5">
              {formatDateTime(tx.date)}
            </div>
            {tx.to && (
              <div className="text-xs text-gray-500 mt-0.5">To: {tx.to}</div>
            )}
          </div>

          <div
            className={`font-bold text-base text-right ${
              tx.type === "Deposit" ? "text-green-600" : "text-red-600"
            }`}
          >
            {tx.type === "Deposit" ? "+" : "-"}₪{tx.amount}
            <div className="text-xs text-gray-500">{tx.currency}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
