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

import type { DepositReceiptData } from "../types";

type Props = {
  receipt: DepositReceiptData;
};

export default function DepositReceipt({ receipt }: Props) {
  return (
    <div className="flex min-h-screen items-start justify-center px-4 pt-5">
      <Card className="flex w-full max-w-md min-h-[450px] md:min-h-[500px] flex-col">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Deposit Successful
          </CardTitle>

          <CardDescription>
            Your deposit has been processed successfully
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-1 flex-col justify-center">
          <div className="space-y-4 rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Amount</p>

              <p className="font-medium">₱{receipt.amount.toLocaleString()}</p>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Reference No.</p>

              <p className="font-medium">{receipt.referenceNumber}</p>
            </div>

            <div className="flex items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">Date</p>

              <p className="text-right text-sm font-medium">
                {receipt.depositedAt}
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
