import { useState } from "react";
import * as api from "../api/api";
import { useUser } from "../context/AuthContext";

export const useTransactions = () => {
  const { user, updateUser } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const deposit = async (amount) => {
    if (!user) {
      throw new Error("No user logged in");
    }

    setIsLoading(true);
    setError(null);
    try {
      const updatedUser = await api.makeDeposit(user, amount);
      updateUser(updatedUser);
      return updatedUser;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const withdraw = async (amount) => {
    if (!user) {
      throw new Error("No user logged in");
    }

    setIsLoading(true);
    setError(null);
    try {
      const updatedUser = await api.makeWithdraw(user, amount);
      updateUser(updatedUser);
      return updatedUser;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    deposit,
    withdraw,
    isLoading,
    error,
  };
};
