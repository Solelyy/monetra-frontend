import { API_BASE_URL } from "@/lib/api";
import type { TransactionResponse } from "@/lib/types/transaction";

const USE_MOCK = true;

async function mockWithdraw(amount: number) {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return {
    success: true,
    message: "Withdraw successful",
    receipt: {
      timestamp: "2026-05-24T15:05:12Z",
      referenceNumber: "12390099",
      amount,
    },
  };
}

export async function withdrawApi(
  amount: number,
): Promise<TransactionResponse> {
  if (USE_MOCK) {
    return mockWithdraw(amount);
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
    throw new Error("Unable to withdraw");
  }

  console.log("Withdraw response: ", result);

  return result;
}
