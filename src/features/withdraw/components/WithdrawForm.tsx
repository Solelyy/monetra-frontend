import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import { useWithdrawMutation } from "../useWithdrawMutation";
import type { TransactionReceipt } from "@/lib/types/transaction";
import { toast } from "sonner";

type Props = {
  onSuccess: (receipt: TransactionReceipt) => void;
};

export default function WithdrawForm({ onSuccess }: Props) {
  const [amount, setAmount] = useState("");

  const MIN_AMOUNT = 50;
  const MAX_AMOUNT = 50_000;

  const parsedAmount = Number(amount);

  const isAmountValid =
    amount.trim().length > 0 &&
    Number.isInteger(parsedAmount) &&
    parsedAmount >= MIN_AMOUNT &&
    parsedAmount <= MAX_AMOUNT;

  const { mutateAsync, isPending } = useWithdrawMutation();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isAmountValid) return;

    try {
      const result = await mutateAsync(parsedAmount);

      onSuccess({
        amount: result.data.amount,
        referenceNumber: result.data.referenceNumber,
        timestamp: result.data.timestamp,
      });
    } catch (e) {
      e instanceof Error
        ? toast.error(e.message)
        : toast.error("Unable to withdraw, please try again.");
      console.error(e instanceof Error ? e.stack : e);
    }
  };

  return (
    <div className="flex min-h-screen items-start justify-center px-4 pt-5">
      <Card className="flex w-full max-w-md min-h-[450px] md:min-h-[500px] flex-col">
        <form onSubmit={handleSubmit} className="flex flex-1 flex-col">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Withdraw</CardTitle>

            <CardDescription>
              Withdraw an amount from your account
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="mt-8 space-y-2">
              <Label htmlFor="amount">Amount</Label>

              <div className="relative">
                <span className="text-muted-foreground pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm">
                  ₱
                </span>

                <Input
                  id="amount"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck={false}
                  value={amount}
                  onChange={(event) => {
                    const digitsOnly = event.target.value.replace(/\D/g, "");

                    if (!digitsOnly) {
                      setAmount("");
                      return;
                    }

                    const nextAmount = Number(digitsOnly);

                    if (nextAmount <= MAX_AMOUNT) {
                      setAmount(digitsOnly);
                    }
                  }}
                  placeholder="Enter amount (min ₱50.00 max ₱50,000)"
                  className="pl-8"
                  required
                />
              </div>

              {amount.trim().length > 0 && parsedAmount < MIN_AMOUNT ? (
                <p className="text-destructive text-xs text-left">
                  Minimum allowed amount is ₱50
                </p>
              ) : null}
            </div>
          </CardContent>

          <CardFooter className="mt-auto flex gap-2 border-t px-6 py-4">
            <div className="flex-1">
              <Link to="/dashboard">
                <Button
                  type="button"
                  variant="secondary"
                  className="w-full"
                  size="lg"
                >
                  Cancel
                </Button>
              </Link>
            </div>

            <div className="flex-1">
              <Button
                type="submit"
                disabled={isPending}
                className="w-full"
                size="lg"
              >
                {isPending ? "Withdrawing..." : "Withdraw"}
              </Button>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
