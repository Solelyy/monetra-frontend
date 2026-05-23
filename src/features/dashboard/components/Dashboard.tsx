import { useEffect, useState } from "react";
import { dashboardApi } from "../dashboardApi";
import type { AccountDetails } from "../types";
import { Card } from "@/components/ui/card";

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
      <div className="text-left">{`Welcome, ${account?.accountName}!`}</div>

      <Card>
        <div className=""></div>
      </Card>
    </>
  );
}
