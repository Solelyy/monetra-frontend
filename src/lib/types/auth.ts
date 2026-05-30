import type { Transaction } from "./transaction";

export type AccountDetails = {
  accountNumber?: string;
  accountName?: string;
  accountBalance?: number;
  recentTransactions?: Transaction[];
};

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
