export type DepositReceiptData = {
  amount: number;
  referenceNumber: string;
  timestamp: string;
};

export type DepositResponse = {
  success: boolean;
  amount: number;
  referenceNumber: string;
  timestamp: string;
  message: string;
};
