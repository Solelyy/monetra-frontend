import Receipt from "@/components/shared/Receipt";
import type { DepositReceiptData } from "@/features/deposit/types";
import { useState } from "react";
import WithdrawForm from "./WithdrawForm";

export default function Withdraw() {
  const [receipt, setReceipt] = useState<DepositReceiptData | null>(null);

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
