export type DepositReceiptData = {
  amount: number;
  referenceNumber: string;
  timestamp: string;
  recipientAccountNumber?: string;
  note?: string;
};

export type DepositResponse = {
  success: boolean;
  amount: number;
  referenceNumber: string;
  timestamp: string;
  message: string;
  recipientAccountNumber?: string;
  note?: string;
};
