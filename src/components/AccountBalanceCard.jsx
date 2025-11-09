
import React from "react";

export default function AccountBalanceCard({ balance }) {
  const formatCurrency = (amount) =>
    amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="bg-linear-to-r from-blue-600 to-blue-500 text-white rounded-xl shadow-lg p-6 md:p-8">
      <h3 className="text-xl font-medium mb-2">Account Balance</h3>
      <p className="text-5xl font-bold">₪{formatCurrency(balance)}</p>
      <span className="text-sm opacity-90">ILS</span>
    </div>
  );
}
