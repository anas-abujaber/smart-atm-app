import { handleApi } from "../utils/apiHelper";
import { processTransaction } from "../utils/transactionHelper";

export const loginUser = async (username, pin) => {
  const users = await handleApi("users");
  const user = users.find((u) => u.user_name === username && u.pin === pin);
  if (!user) {
    throw new Error("Invalid username or PIN");
  }
  return user;
};

export const makeDeposit = async (currentUser, amount) => {
  return processTransaction(currentUser, amount, "Deposit");
};

export const makeWithdraw = async (currentUser, amount) => {
  return processTransaction(currentUser, amount, "Withdraw");
};

export const resetAccount = async (currentUser) => {
  const updatedUserData = {
    ...currentUser,
    balance: 0,
    transactions: [],
  };

  return handleApi(`users/${currentUser.id}`, "PUT", updatedUserData);
};
