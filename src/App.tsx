import Dashboard from "./features/dashboard/components/Dashboard";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Deposit from "./features/deposit/components/Deposit";
import Withdraw from "./features/withdraw/Withdraw";
import Transactions from "./features/transactions/Transactions";
import Transfer from "./features/transfer/Transfer";

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/transactions" element={<Transactions />} />
      </Route>
    </Routes>
  );
}
