import { Star } from "lucide-react";
import Layout from "../components/Layout";
import { toast } from "sonner";
import { useWatchlist } from "../hooks/useWatchList";
import { CURRENCIES } from "../utils/constants";

export default function Watchlist() {
  const { watchlist, removeFromWatchlist } = useWatchlist();

  const watchlistedCurrencies = CURRENCIES.filter((currency) =>
    watchlist.includes(currency.code)
  );

  const handleRemove = (currency) => {
    removeFromWatchlist(currency.code);
    toast.info(`${currency.code} removed from watchlist`);
  };

  return (
    <Layout>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border border-transparent dark:border-blue-400/60">
        <h2 className="text-[20px] font-bold mb-3 text-gray-800 dark:text-gray-100">
          My Watchlist
        </h2>

        {watchlistedCurrencies.length === 0 ? (
          <div className="p-7 text-center text-gray-500 dark:text-gray-300">
            <Star
              size={48}
              className="mx-auto text-gray-300 dark:text-gray-500 mb-2"
            />
            <p className="font-semibold mb-1">
              No currencies in your watchlist
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-400">
              Go to Dashboard to add currencies
            </p>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-4">
            {watchlistedCurrencies.map((currency) => (
              <div
                key={currency.code}
                className="w-[220px] 
                  bg-linear-to-b from-[#fff8e6] to-[#fff6e0] 
                  dark:from-gray-700 dark:to-gray-700
                  border border-[#f3d68a] dark:border-blue-400/60
                  rounded-xl p-4 shadow-sm flex flex-col justify-between
                  transition-colors duration-200 hover:shadow-lg"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                      {currency.code}
                    </h3>
                    <div className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                      Exchange Rate
                    </div>
                  </div>
                  <button
                    aria-label={`remove ${currency.code}`}
                    className="p-1.5"
                    onClick={() => handleRemove(currency)}
                  >
                    <Star
                      size={24}
                      className="text-[#f6c024] dark:text-yellow-400 fill-current"
                    />
                  </button>
                </div>
                <div className="mt-3 text-2xl font-extrabold text-orange-700 dark:text-orange-400">
                  ₪{currency.rate.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
