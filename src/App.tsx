import Dashboard from "./features/dashboard/components/Dashboard";
import { Route, Routes } from "react-router-dom";
import Deposit from "./features/deposit/components/Deposit";
import Withdraw from "./features/withdraw/components/Withdraw";
import Transactions from "./features/transactions/Transactions";
import Transfer from "./features/transfer/components/Transfer";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import HomePage from "./components/layout/HomePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/transactions" element={<Transactions />} />
      </Route>
    </Routes>
  );
}
