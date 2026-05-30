import Receipt from "@/components/shared/Receipt";
import type { TransactionReceipt } from "@/lib/types/transaction";
import { useState } from "react";
import WithdrawForm from "./WithdrawForm";

export default function Withdraw() {
  const [receipt, setReceipt] = useState<TransactionReceipt | null>(null);

  if (receipt) {
    return <Receipt receipt={receipt} type="WITHDRAW" />;
  }

  return (
    <WithdrawForm
      onSuccess={(receiptData) => {
        setReceipt(receiptData);
      }}
    />
  );
}
