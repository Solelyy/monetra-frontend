import { useState } from "react";
import type { TransactionReceipt } from "@/lib/types/transaction";
import Receipt from "@/components/shared/Receipt";
import TransferForm from "./TransferForm";

export default function Transfer() {
  const [receipt, setReceipt] = useState<TransactionReceipt | null>(null);

  if (receipt) {
    return <Receipt receipt={receipt} type="TRANSFER_OUT" />;
  }

  return (
    <TransferForm
      onSuccess={(receiptData) => {
        setReceipt(receiptData);
      }}
    />
  );
}
