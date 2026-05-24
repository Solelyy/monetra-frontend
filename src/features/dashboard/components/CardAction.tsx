import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CardAccount from "./CardDetails";
import Actions from "./Actions";
import type { AccountDetails } from "../types";

export default function CardAction({
  accountNumber,
  accountBalance,
}: AccountDetails) {
  return (
    <Card className="h-full max-h-100 border border-border/60 shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">My Savings</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col space-y-4">
        <div>
          <CardAccount
            accountNumber={accountNumber ?? 0}
            accountBalance={accountBalance ?? 0}
          />
        </div>

        {/*Actions */}
        <div>
          <Actions />
        </div>
      </CardContent>
    </Card>
  );
}
