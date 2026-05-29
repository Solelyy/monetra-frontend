import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import Navbar from "./Navbar";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const { data: user, isLoading, isError } = useCurrentUser(true);

  if (isLoading) {
    return null;
  }

  if (!user || isError) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <header>
        <Navbar showAvatar={true} />
      </header>

      <main className="flex flex-col p-6 space-y-8">
        <Outlet />
      </main>
    </div>
  );
}
