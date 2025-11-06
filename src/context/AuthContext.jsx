import React, { createContext, useState, useEffect, useContext } from "react";
import * as api from "../api/api.js";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
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
      throw new Error("Username and PIN are required");
    }

    setIsLoading(true);
    setError(null);
    try {
      const userData = await api.loginUser(username, pin);
      setUser(userData);
      return true;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setError(null);
  };

  const updateUser = (updatedUserData) => {
    setUser(updatedUserData);
  };

  const resetAccount = async () => {
    if (!user) {
      throw new Error("No user logged in");
    }

    setIsLoading(true);
    setError(null);
    try {
      const updatedUser = await api.resetAccount(user);
      setUser(updatedUser);
      return updatedUser;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    user,
    login,
    logout,
    updateUser,
    resetAccount,
    isAuthenticated: !!user,
    isLoading,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
