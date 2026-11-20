import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { getBlogDocs, formatDate } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "In-depth technical writing on multi-agent AI, C++ systems, OpenGL graphics, numerical physics, and concurrent databases."
};

export default function BlogPage() {
  const posts = getBlogDocs();

  return (
    <main className="mx-auto w-full max-w-4xl px-5 pb-24 pt-12 sm:px-8 sm:pt-16">
      <header>
        <p className="mono-label">Engineering Publications</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Technical Writing
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/65">
          First-principles technical breakdowns on autonomous multi-agent DAG architectures,
          allocation-free spatial hashing in C++, real-time Navier-Stokes solvers, concurrent database locking, and bitboard game trees.
        </p>
      </header>

      <div className="mt-12 space-y-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="glass-card hover-lift group block rounded-xl p-6 transition-all"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex flex-wrap items-center gap-2 font-mono text-ink/50">
                <span>{formatDate(post.date)}</span>
                <span>·</span>
                <span className="inline-flex items-center gap-1">
                  <Clock size={12} />
                  {post.minutes} min read
                </span>
              </div>
              <span className="font-mono text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1">
                Read article <ArrowUpRight size={13} />
              </span>
            </div>

            <h2 className="mt-2 text-xl font-bold tracking-tight text-ink group-hover:text-accent transition-colors">
              {post.title}
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-ink/70">
              {post.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5 pt-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-line/8 bg-muted/60 px-2 py-0.5 font-mono text-[10px] text-ink/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
