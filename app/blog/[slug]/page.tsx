import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft } from "lucide-react";
import { getBlogDoc, getBlogDocs, formatDate } from "@/lib/content";
import { mdxComponents } from "@/lib/mdx-components";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = getBlogDoc(slug);
  if (!doc) return { title: "Post not found" };
  return {
    title: doc.title,
    description: doc.description,
    openGraph: { title: doc.title, description: doc.description, type: "article" }
  };
}

export function generateStaticParams() {
  return getBlogDocs().map((doc) => ({ slug: doc.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const doc = getBlogDoc(slug);
  if (!doc) notFound();

  return (
    <main className="mx-auto w-full max-w-4xl px-5 pb-24 pt-10 sm:px-8 sm:pt-14">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 font-mono text-xs text-ink/45 transition-colors hover:text-ink"
      >
        <ArrowLeft size={14} /> All posts
      </Link>

      <header className="mt-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-ink/45">
          <span>{formatDate(doc.date)}</span>
          <span>·</span>
          <span>{doc.minutes} min read</span>
          <span>·</span>
          <span className="text-accent">{doc.tags.join(" · ")}</span>
        </div>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          {doc.title}
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-ink/65">{doc.description}</p>
      </header>

      <div className="my-8 border-t border-line/8" />

      <div className="doc">
        <MDXRemote source={doc.content} components={mdxComponents} />
      </div>
    </main>
  );
}
