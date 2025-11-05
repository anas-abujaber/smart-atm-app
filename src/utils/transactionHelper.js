import { handleApi } from "./apiHelper";

export const processTransaction = async (
  currentUser,
  amount,
  transactionType
) => {
  const value = Number(amount);
  if (!Number.isFinite(value) || value <= 0) {
    throw new Error(`${transactionType} amount must be a positive number`);
  }

  if (transactionType === "Withdraw" && amount > currentUser.balance) {
    throw new Error("Insufficient funds for this withdrawal");
  }

  const newTransaction = {
    id: Date.now(),
    type: transactionType,
    amount: amount,
    currency: "ILS",
    date: new Date().toISOString(),
  };

  const balanceChange = transactionType === "Deposit" ? amount : -amount;

  const updatedUserData = {
    ...currentUser,
    balance: currentUser.balance + balanceChange,
    transactions: [...currentUser.transactions, newTransaction],
  };

  return handleApi(`users/${currentUser.id}`, "PUT", updatedUserData);
};
