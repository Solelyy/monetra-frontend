import { API_BASE_URL } from "@/lib/api";

// MOCK MODE - Set this to false when backend is ready
const USE_MOCK = true;

async function mockDeposit(amount: number) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return {
    success: true,
    amount,
    message: "Deposit successful",
    timestamp: "2026-05-24T15:05:12Z",
    referenceNumber: "12390099",
  };
}

export type DepositResponse = {
  success: boolean;
  amount: number;
  referenceNumber: string;
  timestamp: string;
  message: string;
};

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
