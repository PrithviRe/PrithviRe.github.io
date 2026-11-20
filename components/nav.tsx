"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" }
];

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-line/10 bg-paper/80 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-ink"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded bg-ink text-[11px] font-bold text-paper transition-transform group-hover:scale-105">
            {site.initials}
          </span>
          <span>{site.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 sm:flex sm:gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                isActive(link.href)
                  ? "text-ink"
                  : "text-ink/60 hover:text-ink"
              )}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-accent" />
              )}
            </Link>
          ))}
          <div className="mx-1 h-4 w-[1px] bg-line/15" />
          <ThemeToggle />
          <Link
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1.5 rounded-md bg-accent px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-accent/90 hover:shadow"
          >
            Resume
            <ArrowUpRight size={13} />
          </Link>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 sm:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line/10 bg-muted/50 text-ink transition-colors"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation panel */}
      {mobileOpen && (
        <div className="border-b border-line/10 bg-paper/95 px-5 py-4 backdrop-blur-lg sm:hidden">
          <nav className="flex flex-col space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive(link.href)
                    ? "bg-accent/10 text-accent font-semibold"
                    : "text-ink/70 hover:bg-muted hover:text-ink"
                )}
              >
                <span>{link.label}</span>
                {isActive(link.href) && <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-accent py-2 text-center text-sm font-semibold text-white"
              >
                Resume PDF
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
