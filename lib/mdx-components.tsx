import { MDXProvider } from "@mdx-js/react";
import { ArchitectureFlow } from "@/components/mdx/architecture-flow";
import { Features } from "@/components/mdx/features";
import { Screenshot } from "@/components/mdx/screenshot";
import { Challenge, Solution, Callout } from "@/components/mdx/callouts";
import { OrderBook } from "@/components/mdx/order-book";
import { Chess } from "@/components/mdx/chess";

export const mdxComponents: React.ComponentProps<typeof MDXProvider>["components"] = {
  ArchitectureFlow,
  Features,
  Screenshot,
  Challenge,
  Solution,
  Callout,
  OrderBook,
  Chess
};
