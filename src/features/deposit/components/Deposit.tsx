import { useState } from "react";

import DepositForm from "./DepositForm";

import type { DepositReceiptData } from "@/features/deposit/types";
import Receipt from "@/components/shared/Receipt";

export default function Deposit() {
  const [receipt, setReceipt] = useState<DepositReceiptData | null>(null);

  if (receipt) {
    return <Receipt receipt={receipt} type="DEPOSIT" />;
  }

  return (
    <DepositForm
      onSuccess={(receiptData) => {
        setReceipt(receiptData);
      }}
    />
  );
}
