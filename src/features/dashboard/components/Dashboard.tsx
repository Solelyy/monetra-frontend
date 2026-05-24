import { useEffect, useState } from "react";
import { dashboardApi } from "../dashboardApi";
import type { AccountDetails } from "../types";
import CardAction from "./CardAction";
import Greeting from "./Greeting";
import RecentTransactions from "./RecentTransactions";

export default function Dashboard() {
  const [account, setAccount] = useState<AccountDetails | null>(null);

  useEffect(() => {
    const load = async () => {
      const data = await dashboardApi();
      setAccount(data);
    };

    load();
  }, []);

  return (
    <>
      <Greeting name={account?.accountName} />
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        {/*Card & Actions */}
        <div className="flex-1">
          <CardAction
            accountBalance={account?.accountBalance}
            accountNumber={account?.accountNumber}
          />
        </div>

        {/*Recent Transactions*/}
        <div className="flex-1">
          <RecentTransactions
            recentTransactions={account?.recentTransactions}
          />
        </div>
      </div>
    </>
  );
}
