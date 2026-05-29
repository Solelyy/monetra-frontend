import { PhilippinePeso, Wallet2 } from "lucide-react";

type Props = {
  accountNumber: string;
  accountBalance: number;
};

export default function CardDetails({ accountNumber, accountBalance }: Props) {
  return (
    <div className="flex flex-col gap-2 text-accent-foreground justify-center bg-background">
      <div className="group relative w-full overflow-hidden rounded-xl border border-white/10 bg-linear-to-br from-[#43CB82] via-[#36b873] to-[#1f9d5c] p-6 text-white shadow-2xs">
        <div className="relative z-10 flex h-full flex-col justify-between gap-8">
          {/* Account Number */}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                Account Number
              </p>

              <p className="mt-1 text-base font-semibold tracking-widest">
                {accountNumber}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400">
              <Wallet2 size={22} />
            </div>
          </div>

          {/* Balance */}
          <div className="mx-auto">
            <div className="flex items-center gap-1">
              <PhilippinePeso size={40} strokeWidth={2.5} />
              <p className="text-4xl font-bold tracking-tight text-white">
                {accountBalance.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
