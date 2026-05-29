import CardAction from "./CardAction";
import Greeting from "./Greeting";
import RecentTransactions from "./RecentTransactions";
import { useDashboard } from "../useDashboard";

export default function Dashboard() {
  const { data: account } = useDashboard();

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
            accountNumber={account?.accountNumber}
          />
        </div>
      </div>
    </>
  );
}
