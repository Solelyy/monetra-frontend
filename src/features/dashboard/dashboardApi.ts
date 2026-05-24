import type { AccountDetails } from "./types";

const dummyAccount: AccountDetails = {
  accountName: "Jessa Gozun",
  accountNumber: 12345,
  accountBalance: 50250.75,
  recentTransactions: [
    // {
    //   id: "1",
    //   type: "DEPOSIT",
    //   amount: 5000,
    //   description: "Deposit",
    //   timestamp: "2026-05-24T09:30:00",
    // },
    // {
    //   id: "2",
    //   type: "TRANSFER",
    //   amount: 1500,
    //   description: "Transfer",
    //   timestamp: "2026-05-23T14:15:00",
    // },
    // {
    //   id: "3",
    //   type: "WITHDRAW",
    //   amount: 2000,
    //   description: "Withdraw",
    //   timestamp: "2026-05-22T11:45:00",
    // },
    // {
    //   id: "4",
    //   type: "TRANSFER",
    //   amount: 750,
    //   description: "Transferred to John ",
    //   timestamp: "2026-05-21T10:20:00",
    // },
    // {
    //   id: "5",
    //   type: "DEPOSIT",
    //   amount: 3200,
    //   description: "Deposit",
    //   timestamp: "2026-05-20T08:00:00",
    // },
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
