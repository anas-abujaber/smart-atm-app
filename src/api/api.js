import { handleApi } from "../utils/apiHelper";

export const loginUser = async (username, pin) => {
  const users = await handleApi("users");
  const user = users.find((u) => u.user_name === username && u.pin === pin);
  if (!user) {
    throw new Error("Invalid username or PIN");
  }
  return user;
};

export const makeDeposit = async (currentUser, amount) => {
  const value = Number(amount);
  if (!Number.isFinite(value) || value <= 0) {
    throw new Error("Deposit amount must be a positive number");
  }

  const newTransaction = {
    id: Date.now(),
    type: "Deposit",
    amount: value,
    currency: "ILS",
    date: new Date().toISOString(),
  };

  const updatedUserData = {
    ...currentUser,
    balance: currentUser.balance + value,
    transactions: [...currentUser.transactions, newTransaction],
  };

  return handleApi(`users/${currentUser.id}`, "PUT", updatedUserData);
};

export const makeWithdraw = async (currentUser, amount) => {
  const value = Number(amount);
  if (!Number.isFinite(value) || value <= 0) {
    throw new Error("Withdraw amount must be a positive number");
  }

  if (value > currentUser.balance) {
    throw new Error("Insufficient funds for this withdrawal");
  }

  const newTransaction = {
    id: Date.now(),
    type: "Withdraw",
    amount: value,
    currency: "ILS",
    date: new Date().toISOString(),
  };

  const updatedUserData = {
    ...currentUser,
    balance: currentUser.balance - value,
    transactions: [...currentUser.transactions, newTransaction],
  };

  return handleApi(`users/${currentUser.id}`, "PUT", updatedUserData);
};

export const resetAccount = async (currentUser) => {
  const updatedUserData = {
    ...currentUser,
    balance: 0,
    transactions: [],
  };

  return handleApi(`users/${currentUser.id}`, "PUT", updatedUserData);
};
