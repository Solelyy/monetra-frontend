export type Transaction = {
  id: string;
  type: "deposit" | "withdraw" | "transfer";
  amount: number;
  description: string;
  timestamp: string;
  status: "completed" | "pending" | "failed";
};

export type AccountDetails = {
  accountNumber: number;
  accountName: string;
  accountBalance: number;
  recentTransactions: Transaction[];
};
