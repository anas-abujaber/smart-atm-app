import React from "react";
import Layout from "../components/Layout";
import { useUser } from "../context/AuthContext";
import TransactionList from "../utils/TransactionList";

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

  return (
    <Layout>
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold mb-5 text-gray-800">
          Transaction History
        </h2>
        <TransactionList transactions={transactions} />
      </div>
    </Layout>
  );
}
