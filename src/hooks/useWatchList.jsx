import { useContext } from "react";
import { WatchlistContext } from "../context/WatchlistContext";

export const useWatchlist = () => {
  const context = useContext(WatchlistContext);
  if (context === undefined) {
    throw new Error("useWatchlist must be used within WatchlistProvider");
  }
  return context;
};
