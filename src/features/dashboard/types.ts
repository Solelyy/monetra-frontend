export type Transaction = {
  id: string;
  type: "DEPOSIT" | "WITHDRAW" | "TRANSFER";
  amount: number;
  description: string;
  timestamp: string;
};

export type AccountDetails = {
  accountNumber?: number;
  accountName?: string;
  accountBalance?: number;
  recentTransactions?: Transaction[];
};
