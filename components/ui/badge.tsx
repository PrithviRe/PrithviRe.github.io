import * as React from "react";
import { cn } from "@/lib/utils";

function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border border-line/10 bg-muted px-2 py-0.5 font-mono text-[11px] font-medium tracking-tight text-ink/70",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
