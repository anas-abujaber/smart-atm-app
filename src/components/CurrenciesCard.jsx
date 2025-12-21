import { Star } from "lucide-react";
import { useWatchlist } from "../hooks/useWatchList";
import { toast } from "sonner";

export default function CurrencyCard({ currency }) {
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();

  const toggleWatchlist = (curr) => {
    if (isInWatchlist(curr.code)) {
      removeFromWatchlist(curr.code);
      toast.info(`${curr.code} removed from watchlist`);
    } else {
      addToWatchlist(curr.code);
      toast.success(`${curr.code} added to watchlist`);
    }
  };

  return (
    <div
      className="
       bg-white dark:bg-gray-800 
    rounded-xl p-5 shadow-md mb-6
    dark:border-2 dark:border-blue-400/60
    "
    >
      <h2
        className="
        text-[20px] font-bold mb-3
        text-gray-800 dark:text-gray-100
      "
      >
        All Currencies
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {currency.map((curr) => (
          <div
            key={curr.code}
            className="
               w-[220px]
    bg-linear-to-b 
    from-[#ecf6ff]/90 to-[#f5faff]/90
    dark:from-gray-700 dark:to-gray-700
    dark:border-gray-600/60
    rounded-xl p-4 shadow-sm
    flex flex-col justify-between
    transition-all duration-200
    hover:-translate-y-1 hover:shadow-lg
            "
          >
            <div className="flex justify-between items-start">
              <div>
                <h3
                  className="
                  text-lg font-bold
                  text-gray-900 dark:text-gray-100
                "
                >
                  {curr.code}
                </h3>
                <div
                  className="
                  text-sm mt-1
                  text-gray-500 dark:text-gray-400
                "
                >
                  Exchange Rate
                </div>
              </div>

              <button
                aria-label={`toggle ${curr.code}`}
                className="p-1.5"
                onClick={() => toggleWatchlist(curr)}
              >
                <Star
                  size={24}
                  className={
                    isInWatchlist(curr.code)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-400 dark:text-gray-500"
                  }
                />
              </button>
            </div>

            <div
              className="
              mt-3 text-2xl font-extrabold
              text-blue-700 dark:text-blue-300
            "
            >
              ₪{curr.rate.toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
