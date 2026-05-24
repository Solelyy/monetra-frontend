import { useState } from "react";

import DepositForm from "./DepositForm";
import DepositReceipt from "./DepositReceipt";

import type { DepositReceiptData } from "@/features/deposit/types";

export default function Deposit() {
  const [receipt, setReceipt] = useState<DepositReceiptData | null>(null);

  if (receipt) {
    return <DepositReceipt receipt={receipt} />;
  }

  return (
    <DepositForm
      onSuccess={(receiptData) => {
        setReceipt(receiptData);
      }}
    />
  );
}
