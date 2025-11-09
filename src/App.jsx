import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import History from "./pages/History";
import Settings from "./pages/Settings";
import Watchlist from "./pages/Watchlist";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/history" element={<History />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>

      <Toaster position="top-right" richColors></Toaster>
    </>
  );
}

export default App;
