"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

interface Feature {
  name: string;
  detail: string;
}

export function Features({ items }: { items: Feature[] }) {
  return (
    <Tabs.Root defaultValue={items[0]?.name} orientation="vertical" className="my-8 grid gap-0 sm:grid-cols-[220px_1fr]">
      <Tabs.List aria-label="Features" className="flex flex-row overflow-x-auto border-b border-line/10 sm:flex-col sm:border-b-0 sm:border-r">
        {items.map((item) => (
          <Tabs.Trigger
            key={item.name}
            value={item.name}
            className={cn(
              "shrink-0 border-b-2 px-4 py-3 text-left font-mono text-[13px] transition-colors focus-visible:outline-2 focus-visible:outline-accent",
              "border-transparent text-ink/55 hover:text-ink sm:border-b-0 sm:border-r-2 sm:px-5",
              "data-[state=active]:border-accent data-[state=active]:text-ink data-[state=active]:bg-accent/4"
            )}
          >
            {item.name}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {items.map((item) => (
        <Tabs.Content key={item.name} value={item.name} className="px-0 py-5 sm:px-6 sm:py-1">
          <h4 className="font-mono text-sm font-semibold uppercase tracking-wider text-ink">{item.name}</h4>
          <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{item.detail}</p>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
