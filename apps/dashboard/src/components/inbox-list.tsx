import { cn } from "@midday/ui/cn";
import { Icons } from "@midday/ui/icons";
import { ScrollArea } from "@midday/ui/scroll-area";
import { format } from "date-fns";
import { FormatAmount } from "./format-amount";
import { InboxStatus } from "./inbox-status";

type InboxListProps = {
  items: {
    id: string;
    status: string;
    name: string;
    created_at: string;
    file_name?: string;
    due_date?: string;
    currency?: string;
    amount?: number;
  }[];
  selectedId: string;
  setSelectedId: (id: string) => void;
};

export function InboxList({
  items,
  selectedId,
  setSelectedId,
}: InboxListProps) {
  if (!items.length) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        No results.
      </div>
    );
  }

  return (
    <ScrollArea className="h-screen">
      <div className="flex flex-col gap-4 pb-[250px]">
        {items.map((item) => (
          <button
            type="button"
            onClick={() => {
              setSelectedId(item.id);
            }}
            key={item.id}
            className={cn(
              "flex flex-col items-start gap-2 rounded-xl border p-4 text-left text-sm transition-all",
              selectedId === item.id &&
                "bg-accent border-[#DCDAD2] dark:border-[#2C2C2C]"
            )}
          >
            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center mb-1">
                <div className="flex items-center gap-2">
                  <div className="flex items-center space-x-2">
                    <div className="font-semibold">{item.name}</div>
                    {item.status === "handled" && <Icons.Check />}
                  </div>
                </div>
                <div
                  className={cn(
                    "ml-auto text-xs",
                    selectedId === item.id
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {item?.due_date && format(new Date(item.due_date), "PP")}
                </div>
              </div>
              <div className="flex">
                <div className="text-xs font-medium">
                  {item?.currency && item?.amount && (
                    <FormatAmount
                      amount={item.amount}
                      currency={item.currency}
                    />
                  )}
                </div>
                <div className="ml-auto">
                  <InboxStatus item={item} />
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </ScrollArea>
  );
}
