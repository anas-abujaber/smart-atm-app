import React, { createContext, useState, useEffect, useContext } from "react";
import * as api from "../api/api.js";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("atmUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      localStorage.setItem("atmUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("atmUser");
    }
  }, [user]);

  const login = async (username, pin) => {
    if (!username || !pin) {
      setError("Username and PIN are required");
      return false;
    }

    setIsLoading(true);
    setError(null);
    try {
      const userData = await api.loginUser(username, pin);
      setUser(userData);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setError(null);
  };

  const deposit = async (amount) => {
    if (!user) {
      setError("No user logged in");
      return false;
    }
    setIsLoading(true);
    setError(null);
    try {
      const updatedUser = await api.makeDeposit(user, amount);
      setUser(updatedUser);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const withdraw = async (amount) => {
    if (!user) {
      setError("No user logged in");
      return false;
    }
    setIsLoading(true);
    setError(null);
    try {
      const updatedUser = await api.makeWithdraw(user, amount);
      setUser(updatedUser);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const reset = async () => {
    if (!user) {
      setError("No user logged in");
      return false;
    }
    setIsLoading(true);
    setError(null);
    try {
      const updatedUser = await api.resetAccount(user);
      setUser(updatedUser);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    user,
    isLoading,
    error,
    login,
    logout,
    deposit,
    withdraw,
    reset,
    isAuthenticated: !!user,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};
