import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import { Outlet, Navigate } from "react-router-dom";

export default function PublicRoute() {
  const { data: user, isLoading } = useCurrentUser();

  if (isLoading) return null;

  if (user) return <Navigate to="/dashboard" replace />;
  return <Outlet />;
}
