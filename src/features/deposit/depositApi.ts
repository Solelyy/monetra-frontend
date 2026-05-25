import { API_BASE_URL } from "@/lib/api";
import type { DepositResponse } from "./types";

const USE_MOCK = true;

async function mockDeposit(amount: number) {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return {
    success: true,
    amount,
    message: "Deposit successful",
    timestamp: "2026-05-24T15:05:12Z",
    referenceNumber: "12390099",
  };
}

export async function depositApi(amount: number): Promise<DepositResponse> {
  if (USE_MOCK) {
    return mockDeposit(amount);
  }

  const response = await fetch(`${API_BASE_URL}/`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(amount),
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error("Unable to deposit");
  }

  console.log("Deposit response: ", result);

  return result;
}
