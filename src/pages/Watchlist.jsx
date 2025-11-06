import React, { useState } from "react";
import { Star } from "lucide-react";
import Layout from "../components/Layout";

const currenciesData = [
  { code: "USD", rate: 3.7 },
  { code: "EUR", rate: 4.1 },
  { code: "JOD", rate: 5.2 },
];

export default function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);

  const toggleWatchlist = (currency) => {
    if (watchlist.find((item) => item.code === currency.code)) {
      setWatchlist(watchlist.filter((item) => item.code !== currency.code));
    } else {
      setWatchlist([...watchlist, currency]);
    }
  };

  const isInWatchlist = (code) => watchlist.some((item) => item.code === code);

  return (
    <Layout>
      <div className="bg-white rounded-xl p-5 shadow-md mb-6">
        <h2 className="text-[20px] font-bold mb-3">All Currencies</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {currenciesData.map((currency) => (
            <div
              key={currency.code}
              className="w-[220px] bg-gradient-to-b from-[#ecf6ff]/90 to-[#f5faff]/90 rounded-xl p-4 shadow-sm flex flex-col justify-between transition-transform duration-150 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold">{currency.code}</h3>
                  <div className="text-sm text-gray-500 mt-1">
                    Exchange Rate
                  </div>
                </div>
                <button
                  aria-label={`toggle ${currency.code}`}
                  className="p-1.5"
                  onClick={() => toggleWatchlist(currency)}
                >
                  <Star
                    size={24}
                    className={
                      isInWatchlist(currency.code)
                        ? "text-[#f6c024] fill-current"
                        : "text-slate-300"
                    }
                  />
                </button>
              </div>
              <div className="mt-3 text-2xl font-extrabold text-blue-700">
                ₪{currency.rate.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-5 shadow-md">
        <h2 className="text-[20px] font-bold mb-3">My Watchlist</h2>

        {watchlist.length === 0 ? (
          <div className="p-7 text-center text-gray-500">
            <Star size={48} className="mx-auto text-gray-300 mb-2" />
            <p className="font-semibold mb-1">
              No currencies in your watchlist
            </p>
            <p className="text-sm text-gray-400">
              Click the star icon to add currencies
            </p>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-4">
            {watchlist.map((currency) => (
              <div
                key={currency.code}
                className="w-[220px] bg-gradient-to-b from-[#fff8e6] to-[#fff6e0] border border-[#f3d68a] rounded-xl p-4 shadow-sm flex flex-col justify-between"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold">{currency.code}</h3>
                    <div className="text-sm text-gray-500 mt-1">
                      Exchange Rate
                    </div>
                  </div>
                  <button
                    aria-label={`remove ${currency.code}`}
                    className="p-1.5"
                    onClick={() => toggleWatchlist(currency)}
                  >
                    <Star size={24} className="text-[#f6c024] fill-current" />
                  </button>
                </div>
                <div className="mt-3 text-2xl font-extrabold text-orange-700">
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
