import { createContext, useState, useMemo, useCallback } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = useCallback((code) => {
    setWatchlist((prev) => (prev.includes(code) ? prev : [...prev, code]));
  }, []);

  const removeFromWatchlist = useCallback((code) => {
    setWatchlist((prev) => prev.filter((c) => c !== code));
  }, []);

  const isInWatchlist = useCallback(
    (code) => {
      return watchlist.includes(code);
    },
    [watchlist]
  );

  const value = useMemo(
    () => ({
      watchlist,
      addToWatchlist,
      removeFromWatchlist,
      isInWatchlist,
    }),
    [watchlist, addToWatchlist, removeFromWatchlist, isInWatchlist]
  );
  return (
    <WatchlistContext.Provider value={value}>
      {children}
    </WatchlistContext.Provider>
  );
};
