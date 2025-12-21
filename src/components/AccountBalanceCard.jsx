import React from "react";

export default function AccountBalanceCard({ balance }) {
  const formatCurrency = (amount) =>
    amount.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const bgClass =
    balance === 0
      ? "bg-red-500 text-white dark:bg-red-700 dark:text-red-200"
      : "bg-green-500 text-white dark:bg-green-700 dark:text-green-200";

  return (
    <div
      className={`${bgClass} rounded-xl p-6 md:p-8 transition-colors duration-300`}
    >
      <h3 className="text-xl font-medium mb-2">Account Balance</h3>
      <p className="text-5xl font-bold">₪{formatCurrency(balance)}</p>
      <span className="text-sm opacity-90">ILS</span>
    </div>
  );
}
