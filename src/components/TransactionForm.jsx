import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import { toast } from "sonner";
import { PlusCircleIcon, MinusCircleIcon } from "lucide-react";
import { useTransactions } from "../hooks/useTransactions";
import { useUser } from "../context/AuthContext";

const TransactionForm = ({ type }) => {
  const [amount, setAmount] = useState("");
  const { user } = useUser();
  const { deposit, withdraw, isLoading } = useTransactions();
  const navigate = useNavigate();

  const isDeposit = type === "Deposit";
  const handleTransaction = async (e) => {
    e.preventDefault();

    const transactionAmount = parseFloat(amount);
    if (isNaN(transactionAmount) || transactionAmount <= 0) {
      toast.error("Please enter a valid positive amount");
      return;
    }

    if (!user) {
      toast.error("No user logged in");
      return;
    }

    if (!isDeposit && transactionAmount > user.balance) {
      toast.error("Insufficient balance");
      return;
    }

    try {
      if (isDeposit) {
        await deposit(transactionAmount);
        toast.success(`Successfully deposited ₪${transactionAmount}`);
      } else {
        await withdraw(transactionAmount);
        toast.success(`Successfully withdrew ₪${transactionAmount}`);
      }
      setAmount("");
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.message || "Transaction failed");
    }
  };

  return (
    <Layout>
      <div className="bg-white rounded-xl shadow-md p-8 max-w-2xl mx-auto">
        <div className="flex items-center space-x-3 mb-6">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center ${
              isDeposit ? "bg-green-100" : "bg-red-100"
            }`}
          >
            {isDeposit ? (
              <PlusCircleIcon className="w-6 h-6 text-green-600" />
            ) : (
              <MinusCircleIcon className="w-6 h-6 text-red-600" />
            )}
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            {isDeposit ? "Deposit Money" : "Withdraw Money"}
          </h2>
        </div>

        <form onSubmit={handleTransaction} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amount (ILS)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg 
    border-gray-300 
    focus:outline-none 
    focus:ring-1 ${
      isDeposit
        ? "focus:ring-green-200 focus:border-green-400"
        : "focus:ring-red-200 focus:border-red-400"
    }
    transition-colors`}
              placeholder={`Enter amount to ${
                isDeposit ? "deposit" : "withdraw"
              }`}
              step="0.01"
              min="0"
              required
              disabled={isLoading}
            />
          </div>

          <div
            className={`rounded-lg p-4 ${
              isDeposit ? "bg-green-50" : "bg-red-50"
            }`}
          >
            <p className="text-sm text-gray-600">
              Current Balance:{" "}
              <span
                className={`font-bold ${
                  isDeposit ? "text-green-600" : "text-red-600"
                }`}
              >
                ₪{user?.balance.toLocaleString()}
              </span>
            </p>

            {amount && parseFloat(amount) > 0 && (
              <p className="text-sm text-gray-600 mt-2">
                New Balance:{" "}
                <span
                  className={`font-bold ${
                    isDeposit ? "text-green-600" : "text-red-600"
                  }`}
                >
                  ₪
                  {isDeposit
                    ? (user.balance + parseFloat(amount)).toLocaleString()
                    : (user.balance - parseFloat(amount)).toLocaleString()}
                </span>
              </p>
            )}
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${
                isDeposit
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "bg-red-500 text-white hover:bg-red-600"
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : type}
            </button>

            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default TransactionForm;
