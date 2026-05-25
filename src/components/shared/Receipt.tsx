import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";

import type { DepositReceiptData } from "@/features/deposit/types";
import { formatDateTime } from "@/lib/date-format";
import type { TransactionType } from "@/lib/general-types";

type Props = {
  receipt: DepositReceiptData;
  type: TransactionType;
};

export default function Receipt({ receipt, type }: Props) {
  const title =
    type === "DEPOSIT"
      ? "Deposit"
      : type === "TRANSFER"
        ? "Transfer"
        : "Withdaw";

  return (
    <div className="flex min-h-screen items-start justify-center px-4 pt-5">
      <Card className="flex w-full max-w-md min-h-[450px] md:min-h-[500px] flex-col">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            {`${title} Successful!`}
          </CardTitle>

          <CardDescription>
            {`Your ${title.toLowerCase()} has been processed successfully`}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-1 flex-col justify-center">
          <div className="space-y-4 rounded-lg border p-4">
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm text-muted-foreground whitespace-nowrap shrink-0">
                Amount
              </p>

              <p className="text-sm font-medium text-right wrap-break-word min-w-0">
                ₱{receipt.amount.toLocaleString()}
              </p>
            </div>

            <div className="flex items-start justify-between gap-4">
              <p className="text-sm text-muted-foreground whitespace-nowrap shrink-0">
                Reference No.
              </p>

              <p className="text-sm font-medium text-right wrap-break-word min-w-0">
                {receipt.referenceNumber}
              </p>
            </div>

            <div className="flex items-start justify-between gap-4">
              <p className="text-sm text-muted-foreground whitespace-nowrap shrink-0">
                Date
              </p>

              <p className="text-right text-sm">
                {formatDateTime(receipt.timestamp)}
              </p>
            </div>
          </div>
        </CardContent>

        <CardFooter className="mt-auto border-t px-6 py-4">
          <Link to="/" className="w-full">
            <Button className="w-full" size="lg">
              Back to Dashboard
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
