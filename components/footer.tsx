import Link from "next/link";
import { site } from "@/lib/site";
import { Github, Linkedin, Mail, FileText, Code2, Trophy } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-line/10 bg-muted/30">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-ink text-[10px] font-bold text-paper">
                {site.initials}
              </span>
              <p className="font-mono text-sm font-bold text-ink">{site.name}</p>
            </div>
            <p className="mono-label mt-2 text-[11px] text-ink/50">
              {site.tagline.join(" · ")}
            </p>
            <p className="mt-2 text-xs text-ink/50">
              Undergraduate Engineer · VIT Chennai (2024–2028)
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:items-end">
            <span className="mono-label text-[10px]">Profiles & Channels</span>
            <div className="flex flex-wrap items-center gap-3">
              {[
                { label: "GitHub", href: site.github, icon: Github },
                { label: "LinkedIn", href: site.linkedin, icon: Linkedin },
                { label: "Codeforces", href: site.codeforces, icon: Trophy },
                { label: "LeetCode", href: site.leetcode, icon: Code2 },
                { label: "CodeChef", href: site.codechef, icon: Code2 },
                { label: "Email", href: `mailto:${site.email}`, icon: Mail },
                { label: "Resume", href: site.resume, icon: FileText }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1 text-xs text-ink/60 transition-colors hover:text-accent"
                    title={item.label}
                  >
                    <Icon size={14} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-line/8 pt-6 sm:flex-row">
          <p className="text-xs text-ink/45">
            © {new Date().getFullYear()} {site.name}. Built with Next.js, MDX &amp; Tailwind CSS.
          </p>
          <div className="flex items-center gap-4 text-xs text-ink/45">
            <a href={`mailto:${site.email}`} className="hover:text-ink transition-colors">
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
