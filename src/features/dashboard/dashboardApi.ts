import type { AccountDetails } from "../../lib/types/auth";
import { API_BASE_URL } from "@/lib/api";

const dummyAccount: AccountDetails = {
  accountName: "Jessa Gozun",
  accountNumber: "123456789101",
  accountBalance: 50250.75,
  recentTransactions: [
    {
      id: 1,
      type: "DEPOSIT",
      amount: 5000,
      timestamp: "2026-05-24T09:30:00",
      senderAccountNumber: "12345789099",
      receiverAccountNumber: "",
    },
    {
      id: 2,
      type: "TRANSFER_OUT",
      amount: 1500,
      timestamp: "2026-05-23T14:15:00",
      senderAccountNumber: "12345789099",
      receiverAccountNumber: "123456789101",
    },
    {
      id: 3,
      type: "WITHDRAW",
      amount: 2000,
      timestamp: "2026-05-22T11:45:00",
    },
    {
      id: 4,
      type: "TRANSFER_OUT",
      amount: 750,
      timestamp: "2026-05-21T10:20:00",
      senderAccountNumber: "123456789101",
      receiverAccountNumber: "124155215112",
    },
    {
      id: 5,
      type: "DEPOSIT",
      amount: 3200,
      timestamp: "2026-05-20T08:00:00",
    },
  ],
};

const useDummy = false;

export async function dashboardApi(): Promise<AccountDetails> {
  if (useDummy) return dummyAccount;

  const response = await fetch(`${API_BASE_URL}/api/accounts/me`, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch account details.");
  }

  const result = await response.json();

  return result;

  // return dummyAccount;
}
