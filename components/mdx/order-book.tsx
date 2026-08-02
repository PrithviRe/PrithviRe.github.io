"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Trade {
  id: number;
  price: string;
  qty: string;
  side: "BUY" | "SELL";
}

const BOOK = [
  { price: "182.40", qty: "1,200", side: "BUY" as const },
  { price: "182.35", qty: "800", side: "BUY" as const },
  { price: "182.30", qty: "2,400", side: "BUY" as const },
  { price: "182.45", qty: "1,500", side: "SELL" as const },
  { price: "182.50", qty: "900", side: "SELL" as const },
  { price: "182.55", qty: "1,800", side: "SELL" as const }
];

const SEQUENCE: Trade[] = [
  { id: 1, price: "182.42", qty: "500", side: "BUY" },
  { id: 2, price: "182.40", qty: "700", side: "BUY" },
  { id: 3, price: "182.45", qty: "300", side: "SELL" },
  { id: 4, price: "182.38", qty: "1,100", side: "BUY" }
];

export function OrderBook() {
  const [step, setStep] = useState(0);
  const [trades, setTrades] = useState<Trade[]>([]);
  const [matching, setMatching] = useState(false);
  const timers = useRef<number[]>([]);

  const schedule = useCallback((fn: () => void, ms: number) => {
    timers.current.push(window.setTimeout(fn, ms));
  }, []);

  const run = useCallback(() => {
    setTrades([]);
    setStep(0);
    SEQUENCE.forEach((trade, i) => {
      schedule(() => setStep(i + 1), 900 + i * 1400);
      schedule(() => {
        setMatching(true);
        setTimeout(() => {
          setMatching(false);
          setTrades((prev) => [trade, ...prev]);
        }, 700);
      }, 900 + i * 1400);
    });
  }, [schedule]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const spread = Math.abs(parseFloat("182.40") - parseFloat("182.45"));

  return (
    <div className="not-prose my-8 rounded-xl border border-line/10 bg-card shadow-card">
      <div className="flex items-center justify-between border-b border-line/8 px-5 py-3">
        <p className="mono-label">Order book</p>
        <Button size="sm" variant="outline" onClick={run}>
          Run match
        </Button>
      </div>

      <div className="grid gap-6 p-5 sm:grid-cols-2">
        {/* Order book */}
        <div>
          <div className="mb-2 flex justify-between font-mono text-[10px] uppercase tracking-wider text-ink/40">
            <span>Price</span>
            <span>Qty</span>
          </div>
          {[...BOOK]
            .sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
            .map((row) => (
              <div
                key={row.price}
                className="flex items-center justify-between border-b border-line/5 py-1.5 font-mono text-[13px]"
              >
                <span className={row.side === "BUY" ? "text-up" : "text-down"}>{row.price}</span>
                <span className="text-ink/60">{row.qty}</span>
              </div>
            ))}

          {/* Match lane */}
          <div className="relative mt-5 h-12 overflow-hidden rounded-lg border border-line/10 bg-muted">
            <div className="absolute inset-x-0 top-1/2 h-px bg-line/10" />
            <AnimatePresence mode="wait">
              {step > 0 && (
                <motion.div
                  key={`lane-${step}`}
                  className="relative flex h-full items-center justify-between px-3 font-mono text-xs font-semibold"
                >
                  <motion.span
                    initial={{ x: -40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="rounded bg-up px-2 py-1 text-white"
                  >
                    BUY
                  </motion.span>
                  <span className="text-ink/70">182.42</span>
                  <motion.span
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="rounded bg-down px-2 py-1 text-white"
                  >
                    SELL
                  </motion.span>
                </motion.div>
              )}
            </AnimatePresence>
            {matching && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="rounded bg-ink px-3 py-1 font-mono text-xs font-bold text-accent-300">
                  MATCH
                </span>
              </motion.div>
            )}
          </div>
        </div>

        {/* Trade log */}
        <div>
          <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-ink/40">
            Trade log · spread {spread.toFixed(2)}
          </p>
          <div className="min-h-[180px] rounded-lg border border-line/10 bg-muted/70 p-3 font-mono text-xs">
            {trades.length === 0 ? (
              <p className="text-ink/35">No trades yet — press &ldquo;Run match&rdquo;.</p>
            ) : (
              <ul className="space-y-1.5">
                {trades.map((t, i) => (
                  <motion.li
                    key={t.id}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-between border-b border-line/5 pb-1.5"
                  >
                    <span className="text-ink/45">#{trades.length - i}</span>
                    <span className="text-ink/80">{t.qty} @ {t.price}</span>
                    <span className={t.side === "BUY" ? "text-up" : "text-down"}>
                      {t.side === "BUY" ? "TAKER ▲" : "TAKER ▼"}
                    </span>
                  </motion.li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
