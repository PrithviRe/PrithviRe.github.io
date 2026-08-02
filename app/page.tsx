import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Github, Mail } from "lucide-react";
import { getProjectDocs } from "@/lib/content";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Prithvi Pramit — Backend Engineer"
};

export default function HomePage() {
  const featured = getProjectDocs()
    .filter((d) => d.featured)
    .slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="mx-auto w-full max-w-3xl px-5 pb-16 pt-20 sm:px-8 sm:pt-28">
        <p className="mono-label">Prithvi Pramit</p>
        <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl">
          Backend Engineer.
          <br />
          Systems Programming.
          <br />
          Artificial Intelligence.
        </h1>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink/60">
          Building high-performance software, distributed systems, network security tools,
          and AI applications.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Button asChild size="lg">
            <a href={site.resume} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              <Github size={16} /> GitHub
            </a>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <Link href="/projects">Projects</Link>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <Link href="/blog">Blog</Link>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <Link href="/about">About</Link>
          </Button>
        </div>
      </section>

      {/* Featured work */}
      <section className="mx-auto w-full max-w-3xl px-5 pb-24 sm:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight text-ink">Selected work</h2>
          <Link
            href="/projects"
            className="font-mono text-xs text-ink/45 transition-colors hover:text-ink"
          >
            All projects →
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {featured.map((doc) => (
            <Link
              key={doc.slug}
              href={`/projects/${doc.slug}`}
              className="group flex flex-col justify-between rounded-xl border border-line/10 p-5 transition-all hover:border-line/25 hover:bg-muted"
            >
              <div>
                <div className="flex items-start justify-between">
                  <span className="mono-label">{doc.year}</span>
                  <ArrowUpRight
                    size={16}
                    className="text-ink/30 transition-all group-hover:text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink">{doc.title}</h3>
                <p className="mt-1 text-sm text-ink/55">{doc.subtitle}</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {doc.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="rounded border border-line/8 bg-card px-1.5 py-0.5 font-mono text-[10px] text-ink/55"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-2 border-t border-line/8 pt-8">
          <p className="text-sm leading-relaxed text-ink/60">
            Undergraduate engineer. Backend systems, distributed computing, artificial
            intelligence, networking, and low-level performance optimization.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
          >
            <Mail size={14} /> {site.email}
          </a>
        </div>
      </section>
    </main>
  );
}
