import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Github, Mail, Trophy, Cpu, Bot, Database, FileText } from "lucide-react";
import { getProjectDocs, getBlogDocs, formatDate } from "@/lib/content";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Prithvi Pramit — Systems, Graphics & AI Engineer"
};

export default function HomePage() {
  const allProjects = getProjectDocs();
  const featured = allProjects.filter((d) => d.featured).slice(0, 4);
  const latestPosts = getBlogDocs().slice(0, 3);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative mx-auto w-full max-w-4xl px-5 pb-16 pt-16 sm:px-8 sm:pt-24">
        {/* Status pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-line/10 bg-card px-3 py-1 text-xs font-mono text-ink/70 shadow-sm backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span>VIT Chennai · Pre-Final Year B.Tech (ECE)</span>
        </div>

        {/* Main headline */}
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-ink sm:text-6xl sm:leading-[1.1]">
          Building <span className="text-accent">high-performance systems</span>, graphics engines, and autonomous AI.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
          Hi, I&apos;m <span className="font-semibold text-ink">Prithvi Pramit</span>. I engineer low-level systems in C++,
          real-time OpenGL simulations, supervisor-controlled multi-agent frameworks, and high-concurrency distributed backends.
        </p>

        {/* Action buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild size="lg" className="shadow-sm">
            <Link href="/projects">
              Explore Projects <ArrowUpRight size={16} />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={site.resume} target="_blank" rel="noopener noreferrer">
              <FileText size={16} /> Resume PDF
            </a>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              <Github size={16} /> GitHub
            </a>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <Link href="/about">About &amp; Skills</Link>
          </Button>
        </div>

        {/* Metric / Credential Bar */}
        <div className="mt-12 grid grid-cols-2 gap-3 border-y border-line/10 py-5 sm:grid-cols-4 sm:gap-6">
          <div className="flex flex-col">
            <span className="font-mono text-xl font-bold text-ink">11+</span>
            <span className="mono-label text-[10px] text-ink/50">Technical Projects</span>
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xl font-bold text-accent">Expert</span>
            <span className="mono-label text-[10px] text-ink/50">Codeforces Profile</span>
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xl font-bold text-ink">250+</span>
            <span className="mono-label text-[10px] text-ink/50">Day LeetCode Streak</span>
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xl font-bold text-emerald-600 dark:text-emerald-400">Deloitte USI</span>
            <span className="mono-label text-[10px] text-ink/50">AI &amp; Data Intern</span>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="mx-auto w-full max-w-4xl px-5 pb-16 sm:px-8">
        <div className="mb-6">
          <p className="mono-label">Capabilities</p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-ink">Core Engineering Focus</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="glass-card hover-lift rounded-xl p-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-accent">
              <Cpu size={20} />
            </div>
            <h3 className="mt-3 text-base font-semibold text-ink">Systems &amp; Graphics</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-ink/65">
              C++17/20, OpenGL 3.3 Core, spatial hashing, bitboards, GPU hardware instancing, and Navier-Stokes numerical solvers.
            </p>
          </div>

          <div className="glass-card hover-lift rounded-xl p-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
              <Bot size={20} />
            </div>
            <h3 className="mt-3 text-base font-semibold text-ink">AI &amp; Multi-Agent Systems</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-ink/65">
              LangGraph orchestration, DAG task planning with Kahn&apos;s topological sort, local LLMs (Ollama), ChromaDB RAG, and AST execution sandboxing.
            </p>
          </div>

          <div className="glass-card hover-lift rounded-xl p-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <Database size={20} />
            </div>
            <h3 className="mt-3 text-base font-semibold text-ink">Backend &amp; Distributed</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-ink/65">
              Spring Boot &amp; FastAPI, ACID matching engines, Redis order book caching, Kafka message streams, and Scapy packet engines.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mx-auto w-full max-w-4xl px-5 pb-20 sm:px-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="mono-label">Selected Work</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-ink">Featured Case Studies</h2>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-1 font-mono text-xs font-semibold text-accent hover:underline"
          >
            All 11 projects <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {featured.map((doc) => (
            <div
              key={doc.slug}
              className="glass-card hover-lift group relative flex flex-col justify-between rounded-xl p-6 transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-xs">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-line/10 bg-muted px-2 py-0.5 font-mono text-[10px] text-ink/60">
                    <span className={doc.status === "In Progress" ? "h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" : "h-1.5 w-1.5 rounded-full bg-emerald-500"} />
                    {doc.status}
                  </span>
                  <span className="font-mono text-ink/40">{doc.year}</span>
                </div>

                <h3 className="mt-3 text-lg font-bold tracking-tight text-ink group-hover:text-accent transition-colors">
                  <Link href={`/projects/${doc.slug}`}>
                    {doc.title}
                  </Link>
                </h3>
                <p className="mt-1 text-xs font-medium text-ink/50">{doc.subtitle}</p>
                <p className="mt-3 text-xs leading-relaxed text-ink/70 line-clamp-3">
                  {doc.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-line/8">
                <div className="flex flex-wrap gap-1.5">
                  {doc.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded border border-line/8 bg-muted/60 px-2 py-0.5 font-mono text-[10px] text-ink/60"
                    >
                      {t}
                    </span>
                  ))}
                  {doc.tech.length > 4 && (
                    <span className="px-1 py-0.5 font-mono text-[10px] text-ink/40">
                      +{doc.tech.length - 4}
                    </span>
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between pt-2">
                  <Link
                    href={`/projects/${doc.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
                  >
                    Read case study <ArrowUpRight size={13} />
                  </Link>
                  {doc.github && (
                    <a
                      href={doc.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-ink/50 hover:text-ink transition-colors"
                      title="GitHub Repository"
                    >
                      <Github size={15} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Technical Writing */}
      <section className="mx-auto w-full max-w-4xl px-5 pb-20 sm:px-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="mono-label">Publications</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-ink">Recent Technical Deep Dives</h2>
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-1 font-mono text-xs font-semibold text-accent hover:underline"
          >
            All 8 articles <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="space-y-3">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="glass-card hover-lift group flex flex-col justify-between rounded-xl p-5 transition-all sm:flex-row sm:items-center sm:gap-6"
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-ink/45">
                  <span>{formatDate(post.date)}</span>
                  <span>·</span>
                  <span>{post.minutes} min read</span>
                  <span>·</span>
                  <span className="text-accent">{post.tags.slice(0, 3).join(" · ")}</span>
                </div>
                <h3 className="mt-1.5 text-base font-bold tracking-tight text-ink group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="mt-1 text-xs text-ink/65 line-clamp-2 leading-relaxed">
                  {post.description}
                </p>
              </div>
              <div className="mt-3 flex shrink-0 items-center gap-1 font-mono text-xs text-accent sm:mt-0">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">Read</span>
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact / CTA card */}
      <section className="mx-auto w-full max-w-4xl px-5 pb-24 sm:px-8">
        <div className="glass-card relative overflow-hidden rounded-2xl border border-line/10 bg-gradient-to-br from-card via-card to-accent/5 p-8 sm:p-10">
          <div className="max-w-xl">
            <span className="mono-label text-accent font-semibold">Get in Touch</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Interested in collaborating or discussing systems &amp; AI?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              I&apos;m always keen to discuss software engineering, distributed systems, high-performance C++, graphics simulations, or AI research.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild>
                <a href={`mailto:${site.email}`}>
                  <Mail size={15} /> Send an Email
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </Button>
              <Button asChild variant="ghost">
                <a href={site.codeforces} target="_blank" rel="noopener noreferrer">
                  <Trophy size={15} /> Codeforces Expert
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
