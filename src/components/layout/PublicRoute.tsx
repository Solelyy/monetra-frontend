import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import { Outlet, Navigate } from "react-router-dom";

export default function PublicRoute() {
  const { data: user } = useCurrentUser();

  if (user) return <Navigate to="/dashboard" />;
  return <Outlet />;
}
