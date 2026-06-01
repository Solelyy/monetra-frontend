import { API_BASE_URL } from "@/lib/api";
import type { TransactionResponse } from "@/lib/types/transaction";
import type { TransferPayload } from "./types";

const USE_MOCK = false;

async function mockTransfer(amount: number) {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return {
    success: true,
    message: "Transfer successful",
    data: {
      amount,
      timestamp: "2026-05-24T15:05:12Z",
      referenceNumber: "12390099",
      note: "pambili skincare",
      recipientAccountNumber: "0612345655",
    },
  };
}

export async function transferApi({
  amount,
  recipientAccountNumber,
  note,
}: TransferPayload): Promise<TransactionResponse> {
  if (USE_MOCK) {
    return mockTransfer(amount);
  }

  const response = await fetch(`${API_BASE_URL}/api/accounts/transfer`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ amount, recipientAccountNumber, note }),
  });

  if (!response.ok) {
    const errorData = await response.json();

    throw new Error(errorData.message ?? "Unable to transfer");
  }

  const result = await response.json();

  console.log("Transfer response: ", result);

  return result;
}
