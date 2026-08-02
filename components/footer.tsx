import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line/8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="font-mono text-sm font-semibold text-ink">{site.name}</p>
          <p className="mono-label mt-1">{site.tagline.join(" · ")}</p>
        </div>

        <nav className="flex items-center gap-5">
          {[
            { label: "Email", href: `mailto:${site.email}` },
            { label: "LinkedIn", href: site.linkedin },
            { label: "GitHub", href: site.github },
            { label: "LeetCode", href: site.leetcode },
            { label: "Resume", href: site.resume }
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-sm text-ink/55 transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
