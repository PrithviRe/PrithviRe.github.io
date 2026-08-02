"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";

const ORDER = ["system", "light", "dark"] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const Icon = theme === "dark" ? Moon : theme === "light" ? Sun : Monitor;
  const label = theme ?? "system";

  const cycle = () => {
    const current = theme ?? "system";
    const next = ORDER[(ORDER.indexOf(current as (typeof ORDER)[number]) + 1) % ORDER.length];
    setTheme(next);
  };

  return (
    <button
      onClick={cycle}
      type="button"
      aria-label="Toggle color theme"
      title={`Theme: ${label}. Click to cycle.`}
      className="inline-flex h-8 w-8 items-center justify-center rounded-md text-ink/55 transition-colors hover:bg-muted hover:text-ink dark:text-ink/55 dark:hover:text-ink"
    >
      {mounted && <Icon size={16} />}
    </button>
  );
}