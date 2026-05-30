import { API_BASE_URL } from "@/lib/api";
import type { LoginCredentials } from "@/lib/types/auth";

export async function loginApi(data: LoginCredentials) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorResult = await response.json();

      throw new Error(errorResult.message || "Failed to login.");
    }

    return response.json();
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error("Can't connect to server. Please try again later.");
    }

    throw error;
  }
}
