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

import { useTransferMutation } from "../useTransferMutation";
import type { TransactionReceipt } from "@/lib/types/transaction";
import { toast } from "sonner";
import type { TransferPayload } from "../types";

type Props = {
  onSuccess: (receipt: TransactionReceipt) => void;
};

export default function TransferForm({ onSuccess }: Props) {
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] =
    useState<TransferPayload["recipientAccountNumber"]>("");
  const [note, setNote] = useState<TransferPayload["note"]>("");

  const MIN_AMOUNT = 50;
  const MAX_AMOUNT = 50_000;

  const parsedAmount = Number(amount);

  const isAmountValid =
    amount.trim().length > 0 &&
    Number.isInteger(parsedAmount) &&
    parsedAmount >= MIN_AMOUNT &&
    parsedAmount <= MAX_AMOUNT;

  const isRecipientValid = recipient.length === 10;

  const isFormValid = isAmountValid && isRecipientValid;

  const { mutateAsync, isPending } = useTransferMutation();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isFormValid) return;

    try {
      const result = await mutateAsync({
        amount: parsedAmount,
        recipientAccountNumber: recipient,
        note,
      });

      onSuccess({
        amount: result.receipt.amount,
        referenceNumber: result.receipt.referenceNumber,
        timestamp: result.receipt.timestamp,
        recipientAccountNumber: result.receipt.recipientAccountNumber,
        note: result.receipt.note,
      });
    } catch (e) {
      toast.error("Unable to transfer. Please try again.");
      console.error(e);
    }
  };

  return (
    <div className="flex min-h-screen items-start justify-center px-4 pt-5">
      <Card className="flex w-full max-w-md min-h-[450px] md:min-h-[500px] flex-col">
        <form onSubmit={handleSubmit} className="flex flex-1 flex-col">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Transfer</CardTitle>

            <CardDescription>
              Transfer an amount to another account
            </CardDescription>
          </CardHeader>

          <CardContent className="mt-8 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="recipient">Recipient Account Number</Label>

              <Input
                id="recipient"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                autoComplete="off"
                autoCorrect="off"
                spellCheck={false}
                value={recipient}
                onChange={(event) => {
                  const digitsOnly = event.target.value.replace(/\D/g, "");

                  if (digitsOnly.length <= 10) {
                    setRecipient(digitsOnly);
                  }
                }}
                placeholder="Enter 10-digit account number"
                required
              />

              {recipient.trim().length > 0 && recipient.length !== 10 ? (
                <p className="text-destructive text-xs text-left">
                  Account number must be 10 digits
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
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

            <div className="space-y-2 mb-5">
              <Label htmlFor="note">Note (Optional)</Label>

              <Input
                id="note"
                type="text"
                autoComplete="off"
                autoCorrect="off"
                spellCheck={false}
                value={note}
                onChange={(event) => {
                  const nextNote = event.target.value;

                  if (nextNote.length <= 50) {
                    setNote(nextNote);
                  }
                }}
                placeholder="Add a note (max 10 characters)"
                maxLength={10}
              />

              {note && note.length > 0 && (
                <p className="text-muted-foreground text-xs text-left">
                  {note.length}/10
                </p>
              )}
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
                {isPending ? "Transferring..." : "Transfer"}
              </Button>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
