import React from "react";
import { PlusCircleIcon, MinusCircleIcon } from "lucide-react";
import Layout from "../components/Layout";
import { useUser } from "../context/UserContext";

export default function History() {
  const { user } = useUser();

  if (!user) {
    return (
      <Layout>
        <div className="bg-white rounded-xl shadow-md p-8 text-center text-red-600 font-semibold">
          Please login first to view your transaction history.
        </div>
      </Layout>
    );
  }

  const transactions = user.transactions || [];

  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${day}/${month}/${year} at ${hours}:${minutes}`;
  };

  return (
    <Layout>
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold mb-5 text-gray-800 text-center">
          Transaction History
        </h2>

        {transactions.length === 0 ? (
          <div className="text-center text-gray-500 font-medium">
            No transactions found.
          </div>
        ) : (
          transactions.map((tx) => (
            <div
              key={tx.id}
              className="flex items-center justify-between bg-[#f9fbff] py-[15px] px-5 mb-3 rounded-xl shadow-md transition-colors duration-200 hover:bg-[#f0f4f8]"
            >
              <div
                className={`flex justify-center items-center w-12 h-12 rounded-full ${
                  tx.type === "Deposit"
                    ? "bg-[#d8f5d8] text-green-600"
                    : "bg-[#ffd8d8] text-red-600"
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
                <div className="text-xs text-[#555] mt-[2px]">
                  {formatDateTime(tx.date)}
                </div>
                {tx.to && (
                  <div className="text-xs text-[#555] mt-[2px]">
                    To: {tx.to}
                  </div>
                )}
              </div>

              <div
                className={`font-bold text-base text-right ${
                  tx.type === "Deposit" ? "text-green-600" : "text-red-600"
                }`}
              >
                {tx.type === "Deposit" ? "+" : "-"}₪{tx.amount}
                <div className="text-xs text-[#555]">{tx.currency}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </Layout>
  );
}
