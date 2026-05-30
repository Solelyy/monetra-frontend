import { useState } from "react";

import DepositForm from "./DepositForm";

import type { TransactionReceipt } from "@/lib/types/transaction";
import Receipt from "@/components/shared/Receipt";

export default function Deposit() {
  const [receipt, setReceipt] = useState<TransactionReceipt | null>(null);

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
