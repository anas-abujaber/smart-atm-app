import { useUser } from "../context/AuthContext";

export function useAccountStats() {
  const { user } = useUser();
  const list = user?.transactions || [];

  let deposits = 0;
  let withdraws = 0;

  list.forEach((tx) => {
    if (tx.type === "Deposit") deposits += tx.amount;
    else if (tx.type === "Withdraw") withdraws += tx.amount;
  });

  return {
    totalDeposits: deposits,
    totalWithdrawals: withdraws,
    totalTransactions: list.length,
  };
}
