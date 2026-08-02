import type { Metadata } from "next";
import Link from "next/link";
import { getBlogDocs, formatDate } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical writing on engines, systems, and performance."
};

export default function BlogPage() {
  const posts = getBlogDocs();

  return (
    <main className="mx-auto w-full max-w-3xl px-5 pb-24 pt-12 sm:px-8 sm:pt-16">
      <header>
        <p className="mono-label">Technical writing</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">Blog</h1>
        <p className="mt-4 max-w-prose text-lg leading-relaxed text-ink/60">
          Deep dives on the problems I actually hit — search algorithms, bit-level
          representation, and packet capture. Written to be indexed by Google and read by
          engineers.
        </p>
      </header>

      <div className="mt-12 space-y-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group -mx-3 flex flex-col gap-1 rounded-lg px-3 py-4 transition-colors hover:bg-muted"
          >
            <div className="flex items-center gap-3">
              <h2 className="text-lg font-medium tracking-tight text-ink group-hover:text-accent">
                {post.title}
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-ink/45">
              <span>{formatDate(post.date)}</span>
              <span>·</span>
              <span>{post.minutes} min read</span>
              <span>·</span>
              <span>{post.tags.join(" · ")}</span>
            </div>
            <p className="mt-1 max-w-2xl text-sm leading-relaxed text-ink/55">{post.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
