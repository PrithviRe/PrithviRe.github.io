import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Who I am and what I work on."
};

const skills = [
  {
    group: "Languages",
    items: ["Python", "Java", "C++", "C", "SQL"]
  },
  {
    group: "Frameworks",
    items: ["FastAPI", "Spring Boot", "Flask", "React", "Tailwind CSS"]
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "Redis", "SQLite", "Firebase"]
  },
  {
    group: "Developer Tools",
    items: ["Git", "Docker", "Linux", "Azure", "Google Cloud Platform"]
  },
  {
    group: "AI/ML",
    items: ["LLMs", "MLflow", "Knowledge Graphs"]
  },
  {
    group: "Core Concepts",
    items: ["Distributed Systems", "Concurrent Programming", "REST APIs", "TCP/IP", "Network Security", "Performance Optimization"]
  }
];

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 pb-24 pt-12 sm:px-8 sm:pt-16">
      <header>
        <p className="mono-label">About</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          Prithvi Pramit
        </h1>
      </header>

      <div className="mt-8 space-y-5 leading-relaxed text-ink/70">
        <p>
          I&apos;m an undergraduate engineer at VIT Chennai, interested in backend systems,
          distributed computing, artificial intelligence, networking, and low-level performance
          optimization.
        </p>
        <p>
          I enjoy building software that is technically challenging — from network monitoring
          platforms to chess engines and high-concurrency trading systems.
        </p>
        <p className="text-ink/55">
          B.Tech in Electronics and Computer Engineering, Vellore Institute of Technology, Chennai
          (2024–2028) · CGPA 8.64.
        </p>
      </div>

      {/* Skills */}
      <section className="mt-14">
        <h2 className="text-xl font-semibold tracking-tight text-ink">Skills</h2>
        <div className="mt-6 grid gap-x-10 gap-y-7 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.group}>
              <h3 className="mono-label">{group.group}</h3>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-line/8 bg-muted px-2 py-1 font-mono text-xs text-ink/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Elsewhere */}
      <section className="mt-14 border-t border-line/8 pt-8">
        <h2 className="text-xl font-semibold tracking-tight text-ink">Elsewhere</h2>
        <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
          {[
            { label: "GitHub", href: site.github },
            { label: "LinkedIn", href: site.linkedin },
            { label: "Codeforces", href: site.codeforces },
            { label: "LeetCode", href: site.leetcode },
            { label: "Email", href: `mailto:${site.email}` }
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-sm font-medium text-accent hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
