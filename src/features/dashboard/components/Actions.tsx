import { Button } from "@/components/ui/button";
import { ArrowDownLeft, ArrowUpRight, Send } from "lucide-react";

export default function Actions() {
  const actions = [
    {
      icon: ArrowDownLeft,
      label: "Deposit",
      description: "Add funds",
    },
    {
      icon: ArrowUpRight,
      label: "Withdraw",
      description: "Cash out",
    },
    {
      icon: Send,
      label: "Transfer",
      description: "Send money",
    },
  ];

  return (
    <div className="flex justify-around gap-4">
      {actions.map((action) => {
        const Icon = action.icon;

        return (
          <Button
            key={action.label}
            variant="ghost"
            className="h-auto flex-col rounded-2xl bg-transparent p-4 hover:bg-transparent"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 transition-all duration-300 hover:scale-110 hover:bg-emerald-100 dark:bg-emerald-500/10 dark:hover:bg-emerald-500/20">
              <Icon
                size={20}
                className="text-emerald-600 dark:text-emerald-400"
              />
            </div>

            <div className="mt-3 text-center">
              <p className="text-sm font-semibold text-foreground">
                {action.label}
              </p>

              <p className="text-xs text-muted-foreground">
                {action.description}
              </p>
            </div>
          </Button>
        );
      })}
    </div>
  );
}
