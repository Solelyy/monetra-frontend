export type Transaction = {
  id: number;
  type: TransactionType;
  amount: number;
  note?: string;
  timestamp: string;
  senderAccountNumber?: string;
  receiverAccountNumber?: string;
};

export type TransactionType =
  | "DEPOSIT"
  | "TRANSFER_IN"
  | "TRANSFER_OUT"
  | "WITHDRAW";

export type TransactionReceipt = {
  amount: number;
  referenceNumber: string;
  timestamp: string;
  recipientAccountNumber?: string;
  note?: string;
  recipientAccountName?: string;
};

export type TransactionResponse = {
  success: boolean;
  message: string;
  data: TransactionReceipt;
};
