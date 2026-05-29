import { API_BASE_URL } from "@/lib/api";
import type { AuthUser } from "@/lib/general-types";

export async function getCurrentUserApi(): Promise<AuthUser> {
  const response = await fetch(`${API_BASE_URL}/api/auth/me`, {
    method: "GET",
    credentials: "include",
  });

  if (response.status === 401) {
    throw new Error("Unauthorized");
  }

  if (!response.ok) {
    throw new Error("Failed to fetch user.");
  }

  const result = await response.json();

  return result;
}
