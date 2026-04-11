"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/resume", label: "Resume" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md border-b-[1px] border-border bg-background/80 transition-colors duration-300">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-24 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg hover:text-accent transition-colors duration-200">
          Prithvi
        </Link>
        
        <nav className="hidden sm:flex items-center gap-6">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-200 hover:text-accent relative py-1 ${
                  isActive ? "text-primary border-b-2 border-accent" : "text-secondary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-full hover:bg-card hover:scale-105 transition-all duration-200"
          aria-label="Toggle theme"
        >
          {mounted && (
            theme === 'dark' ? <Sun size={20} className="text-secondary hover:text-accent" /> : <Moon size={20} className="text-secondary hover:text-accent" />
          )}
        </button>
      </div>
    </header>
  );
}
