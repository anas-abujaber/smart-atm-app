import React from "react";
import Layout from "../components/Layout";
import { useUser } from "../context/AuthContext";
import { useAccountStats } from "../hooks/useAccountStats";
import AccountBalanceCard from "../components/AccountBalanceCard";
import StatCard from "../components/StatCard";
import QuickActions from "../components/QuickActions";
import BirthdayPopup from "../components/BirthdayPopup";

export default function Dashboard() {
  const { user } = useUser();
  const { totalDeposits, totalWithdrawals, totalTransactions } =
    useAccountStats();

  if (!user) {
    return <Layout>please login first.</Layout>;
  }

  const formatCurrency = (n) => n.toLocaleString("en-US");

  return (
    <Layout>
      <div style={{ marginTop: "20px" }}>
        <AccountBalanceCard balance={user.balance} />

        <BirthdayPopup user={user} />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4">
          <StatCard
            title="Deposits"
            value={`₪${formatCurrency(totalDeposits)}`}
          />
          <StatCard
            title="Withdrawals"
            value={`₪${formatCurrency(totalWithdrawals)}`}
          />
          <StatCard title="Transactions" value={totalTransactions} />
        </div>

        <div className="mt-6">
          <QuickActions />
        </div>
      </div>
    </Layout>
  );
}
