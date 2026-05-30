import { API_BASE_URL } from "@/lib/api";
import type { AuthUser } from "@/lib/types/auth";

const mockUser: AuthUser = {
  id: 1,
  email: "jessa@gmail.com",
  firstName: "Jessa",
  lastName: "Gozun",
};

const useMock = false;

export async function getCurrentUserApi(): Promise<AuthUser | null> {
  if (useMock) return mockUser;

  const response = await fetch(`${API_BASE_URL}/api/auth/me`, {
    method: "GET",
    credentials: "include",
  });

  if (response.status === 401 || response.status === 403) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to fetch user.");
  }

  const result = await response.json();

  return result;
}
