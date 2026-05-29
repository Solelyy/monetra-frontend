import { API_BASE_URL } from "@/lib/api";

export async function logoutApi() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
      method: "POST",
      credentials: "include",
    });

    if (!response.ok) {
      const errorResult = await response.json();

      throw new Error(errorResult.message || "Failed to logout.");
    }

    return response.json();
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error("Can't connect to server. Please try again later.");
    }

    throw error;
  }
}
