import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import History from "./pages/History";
import Settings from "./pages/Settings";
import Watchlist from "./pages/Watchlist";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/deposit" element={<Deposit />}></Route>
        <Route path="/withdraw" element={<Withdraw />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route path="/watchlist" element={<Watchlist />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
      </Routes>
    </>
  );
}

export default App;
