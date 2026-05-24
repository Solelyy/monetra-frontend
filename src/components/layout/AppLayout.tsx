import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <header>
        <Navbar />
      </header>

      <main className="flex flex-col p-6 space-y-8">
        <Outlet />
      </main>
    </div>
  );
}
