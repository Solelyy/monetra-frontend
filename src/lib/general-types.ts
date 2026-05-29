export type Transaction = {
  id: number;
  type: TransactionType;
  amount: number;
  note?: string;
  timestamp: string;
  senderAccountNumber?: string;
  receiverAccountNumber?: string;
};

export type AccountDetails = {
  accountNumber?: string;
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
