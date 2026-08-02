import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getProjectDocs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Case studies of systems, trading, and network security work."
};

export default function ProjectsPage() {
  const docs = getProjectDocs();

  return (
    <main className="mx-auto w-full max-w-3xl px-5 pb-24 pt-12 sm:px-8 sm:pt-16">
      <header>
        <p className="mono-label">Selected work</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">Projects</h1>
        <p className="mt-4 max-w-prose text-lg leading-relaxed text-ink/60">
          Each project is written as a case study — problem, architecture, implementation,
          and the tradeoffs I actually hit. The systems-heavy work is at the top.
        </p>
      </header>

      <div className="mt-12 space-y-3">
        {docs.map((doc, i) => (
          <Link
            key={doc.slug}
            href={`/projects/${doc.slug}`}
            className="group flex flex-col gap-1 rounded-xl border border-line/10 p-5 transition-all hover:border-line/25 hover:bg-muted sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6"
          >
            <div className="flex items-start gap-5">
              <span className="hidden font-mono text-sm text-ink/35 sm:block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="text-lg font-semibold tracking-tight text-ink">
                  {doc.title}
                  <span className="text-ink/45"> — {doc.subtitle}</span>
                </h2>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-ink/55">
                  {doc.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {doc.tech.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="rounded border border-line/8 bg-card px-1.5 py-0.5 font-mono text-[10px] text-ink/55"
                    >
                      {t}
                    </span>
                  ))}
                  {doc.tech.length > 5 && (
                    <span className="font-mono text-[10px] text-ink/35">
                      +{doc.tech.length - 5}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-3 sm:flex-col sm:items-end">
              <span className="mono-label">{doc.status} · {doc.year}</span>
              <ArrowUpRight
                size={18}
                className="text-ink/30 transition-all group-hover:text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
