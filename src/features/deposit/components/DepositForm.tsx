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

import { useDepositMutation } from "../useDepositMutation";

import type { DepositReceiptData } from "../types";
import { toast } from "sonner";

type Props = {
  onSuccess: (receipt: DepositReceiptData) => void;
};

export default function DepositForm({ onSuccess }: Props) {
  const [amount, setAmount] = useState("");

  const MIN_AMOUNT = 100;
  const MAX_AMOUNT = 100_000;

  const parsedAmount = Number(amount);

  const isAmountValid =
    amount.trim().length > 0 &&
    Number.isInteger(parsedAmount) &&
    parsedAmount >= MIN_AMOUNT &&
    parsedAmount <= MAX_AMOUNT;

  const { mutateAsync, isPending } = useDepositMutation();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isAmountValid) return;

    try {
      const result = await mutateAsync(parsedAmount);

      onSuccess({
        amount: result.amount,
        referenceNumber: result.referenceNumber,
        timestamp: result.timestamp,
      });
    } catch (e) {
      toast.error("Unable to deposit. Please try again.");
      console.error(e);
    }
  };

  return (
    <div className="flex min-h-screen items-start justify-center px-4 pt-5">
      <Card className="flex w-full max-w-md min-h-[450px] md:min-h-[500px] flex-col">
        <form onSubmit={handleSubmit} className="flex flex-1 flex-col">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Deposit</CardTitle>

            <CardDescription>Deposit an amount to your account</CardDescription>
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
                  placeholder="Enter amount"
                  className="pl-8"
                  required
                />
              </div>

              {amount.trim().length > 0 && parsedAmount < MIN_AMOUNT ? (
                <p className="text-destructive text-xs">
                  Minimum allowed amount is ₱100
                </p>
              ) : null}
            </div>
          </CardContent>

          <CardFooter className="mt-auto flex gap-2 border-t px-6 py-4">
            <div className="flex-1">
              <Link to="/">
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
                {isPending ? "Depositing..." : "Deposit"}
              </Button>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
