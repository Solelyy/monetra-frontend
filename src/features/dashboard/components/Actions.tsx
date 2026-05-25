import { Button } from "@/components/ui/button";
import { ArrowDownLeft, ArrowUpRight, Send } from "lucide-react";
import { Link } from "react-router-dom";

export default function Actions() {
  const actions = [
    {
      icon: ArrowDownLeft,
      label: "Deposit",
      description: "Add funds",
      route: "/deposit",
    },
    {
      icon: ArrowUpRight,
      label: "Withdraw",
      description: "Cash out",
      route: "withdraw",
    },
    {
      icon: Send,
      label: "Transfer",
      description: "Send money",
      route: "transfer",
    },
  ];

  return (
    <div className="flex justify-around gap-2 md:gap-4">
      {actions.map((action) => {
        const Icon = action.icon;

        return (
          <Link to={action.route} key={action.label}>
            <Button
              variant="ghost"
              className="h-auto flex-col rounded-2xl bg-transparent p-2 md:p-4 hover:bg-transparent"
            >
              <div className="flex h-10 md:h-11 w-10 md:w-11 items-center justify-center rounded-xl bg-emerald-50 transition-all duration-300 hover:scale-110 hover:bg-emerald-100 dark:bg-emerald-500/10 dark:hover:bg-emerald-500/20">
                <Icon
                  size={18}
                  className="text-emerald-600 dark:text-emerald-400"
                />
              </div>

              <div className="mt-2 md:mt-3 text-center">
                <p className="text-xs md:text-sm font-semibold text-foreground">
                  {action.label}
                </p>

                <p className="text-[10px] md:text-xs text-muted-foreground">
                  {action.description}
                </p>
              </div>
            </Button>
          </Link>
        );
      })}
    </div>
  );
}
