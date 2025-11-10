import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useUser } from "../context/AuthContext";
import Layout from "../components/Layout";
import AccountInfoCard from "../components/AccountInfoCard";
import DangerZoneCard from "../components/DangerZoneCard";

export default function Settings() {
  const { user, resetAccount, isLoading } = useUser();
  const [isResetting, setIsResetting] = useState(false);
  const navigate = useNavigate();

  if (!user) {
    return (
      <Layout>
        <div className="bg-white rounded-xl shadow-md p-8 text-center text-red-600 font-semibold">
          Please login to view your settings.
        </div>
      </Layout>
    );
  }

  // handle function
  const handleReset = () => {
    if (!window.confirm("Are you sure? This cannot be undone")) return;

    setIsResetting(true);
    toast.info("Resetting...");

    resetAccount()
      .then(() => {
        toast.success("Account reset!");
        navigate("/dashboard");
      })
      .catch(() => toast.error("Reset failed"))
      .finally(() => setIsResetting(false));
  };

  return (
    <Layout>
      <div className="flex flex-col items-center w-full min-h-full">
        <div className="max-w-4xl w-full p-4 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Settings</h2>
          <AccountInfoCard user={user} />
          <DangerZoneCard
            onReset={handleReset}
            isLoading={isLoading || isResetting}
          />
        </div>
      </div>
    </Layout>
  );
}
