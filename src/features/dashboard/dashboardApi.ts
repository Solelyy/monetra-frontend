import type { AccountDetails } from "../../lib/general-types";
import { API_BASE_URL } from "@/lib/api";

// const dummyAccount: AccountDetails = {
//   accountName: "Jessa Gozun",
//   accountNumber: 12345,
//   accountBalance: 50250.75,
//   recentTransactions: [
//     {
//       id: "1",
//       type: "DEPOSIT",
//       amount: 5000,
//       description: "Deposit",
//       timestamp: "2026-05-24T09:30:00",
//     },
//     {
//       id: "2",
//       type: "TRANSFER",
//       amount: 1500,
//       description: "Transfer to Muning",
//       timestamp: "2026-05-23T14:15:00",
//     },
//     {
//       id: "3",
//       type: "WITHDRAW",
//       amount: 2000,
//       description: "Withdraw",
//       timestamp: "2026-05-22T11:45:00",
//     },
//     {
//       id: "4",
//       type: "TRANSFER",
//       amount: 750,
//       description: "Transfer to Taylor ",
//       timestamp: "2026-05-21T10:20:00",
//     },
//     {
//       id: "5",
//       type: "DEPOSIT",
//       amount: 3200,
//       description: "Deposit",
//       timestamp: "2026-05-20T08:00:00",
//     },
//   ],
// };

export async function dashboardApi(): Promise<AccountDetails> {
  const response = await fetch(`${API_BASE_URL}/api/dashboard`, {
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
