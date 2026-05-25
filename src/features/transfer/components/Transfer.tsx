import { useState } from "react";
import type { DepositReceiptData } from "../../deposit/types";
import Receipt from "@/components/shared/Receipt";
import TransferForm from "./TransferForm";

export default function Transfer() {
  const [receipt, setReceipt] = useState<DepositReceiptData | null>(null);

  if (receipt) {
    return <Receipt receipt={receipt} type="TRANSFER" />;
  }

  return (
    <TransferForm
      onSuccess={(receiptData) => {
        setReceipt(receiptData);
      }}
    />
  );
}
