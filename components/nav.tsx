"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-line/10 bg-paper/85 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight text-ink"
        >
          {site.name}
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-2.5 py-1.5 text-sm transition-colors",
                isActive(link.href)
                  ? "font-medium text-ink"
                  : "text-ink/55 hover:text-ink"
              )}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
          <Link
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 hidden items-center rounded-md bg-ink px-3 py-1.5 text-sm font-medium text-paper transition-colors hover:bg-ink/85 sm:inline-flex"
          >
            Resume
          </Link>
        </nav>
      </div>
    </header>
  );
}
