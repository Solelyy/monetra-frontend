export type Transaction = {
  id: string;
  type: TransactionType;
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

export type TransactionType = "DEPOSIT" | "TRANSFER" | "WITHDRAW";

export type AuthUser = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
};

export type LoginCredentials = {
  email: string;
  password: string;
};
