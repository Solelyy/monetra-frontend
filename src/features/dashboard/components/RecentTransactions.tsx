import {
  ArrowDownLeft,
  ArrowUpRight,
  ArrowRightLeft,
  Send,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import type { Transaction } from "../../../lib/general-types";

type RecentTransactionsProps = {
  recentTransactions?: Transaction[];
};

export default function RecentTransactions({
  recentTransactions,
}: RecentTransactionsProps) {
  const getTransactionIcon = (type: Transaction["type"]) => {
    switch (type) {
      case "DEPOSIT":
        return ArrowDownLeft;
      case "WITHDRAW":
        return ArrowUpRight;
      case "TRANSFER":
        return Send;
      default:
        return ArrowRightLeft;
    }
  };

  const hasTransactions = (recentTransactions?.length ?? 0) > 0;

  return (
    <Card className="flex h-full max-h-100 flex-col border border-border/60 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">
          Recent Transactions
        </CardTitle>

        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>

      <CardContent className="flex-1 space-y-4 overflow-y-auto p-4 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-border">
        {/* EMPTY STATE */}
        {!hasTransactions && (
          <div className="flex text-center items-center justify-between rounded-xl border border-dashed border-border/50 p-3">
            <div className="flex flex-col mx-auto gap-2">
              <p className="text-sm font-medium text-muted-foreground">
                No recent transactions
              </p>

              <p className="text-xs text-muted-foreground">
                Your recent transaction history will appear here.
              </p>
            </div>
          </div>
        )}

        {/* TRANSACTIONS LIST */}
        {hasTransactions &&
          recentTransactions!.map((transaction) => {
            const Icon = getTransactionIcon(transaction.type);
            const isDeposit = transaction.type === "DEPOSIT";

            return (
              <div
                key={transaction.id}
                className="flex items-center justify-between rounded-2xl border border-border/50 p-3 transition-colors hover:bg-muted/40"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-500/10">
                    <Icon
                      size={20}
                      className="text-emerald-600 dark:text-emerald-400"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-foreground text-left">
                      {transaction.description}
                    </p>

                    <p className="text-xs text-muted-foreground text-left">
                      {new Date(transaction.timestamp).toLocaleDateString(
                        "en-PH",
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        },
                      )}
                    </p>
                  </div>
                </div>

                <p
                  className={`text-sm font-semibold ${
                    isDeposit
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-foreground"
                  }`}
                >
                  {isDeposit ? "+" : "-"}₱
                  {transaction.amount.toLocaleString("en-PH", {
                    minimumFractionDigits: 2,
                  })}
                </p>
              </div>
            );
          })}
      </CardContent>
    </Card>
  );
}
