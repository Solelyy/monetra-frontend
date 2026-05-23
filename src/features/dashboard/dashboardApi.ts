import type { AccountDetails } from "./types";

const dummyAccount: AccountDetails = {
  accountName: "Jessa Gozun",
  accountNumber: 12345,
  accountBalance: 50250.75,
  recentTransactions: [
    {
      id: "1",
      type: "deposit",
      amount: 5000,
      description: "Salary Deposit",
      timestamp: "2026-05-24T09:30:00",
      status: "completed",
    },
    {
      id: "2",
      type: "transfer",
      amount: 1500,
      description: "Transfer to John Doe",
      timestamp: "2026-05-23T14:15:00",
      status: "completed",
    },
    {
      id: "3",
      type: "withdraw",
      amount: 2000,
      description: "ATM Withdrawal",
      timestamp: "2026-05-22T11:45:00",
      status: "completed",
    },
    {
      id: "4",
      type: "transfer",
      amount: 750,
      description: "Payment to Sarah Smith",
      timestamp: "2026-05-21T10:20:00",
      status: "completed",
    },
    {
      id: "5",
      type: "deposit",
      amount: 3200,
      description: "Client Payment",
      timestamp: "2026-05-20T08:00:00",
      status: "completed",
    },
  ],
};

export async function dashboardApi(): Promise<AccountDetails> {
  //   const response = await fetch(`${API_BASE_URL}/`, {
  //     method: "GET",
  //     credentials: "include",
  //   });

  //   const result = await response.json();

  //   if (!response.ok) {
  //     throw new Error("Failed to fetch account details.");
  //   }

  //   return result;

  return dummyAccount;
}
