import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import { getProjectDoc, getProjectDocs } from "@/lib/content";
import { mdxComponents } from "@/lib/mdx-components";
import { Button } from "@/components/ui/button";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = getProjectDoc(slug);
  if (!doc) return { title: "Project not found" };
  return {
    title: doc.title,
    description: doc.subtitle,
    openGraph: { title: doc.title, description: doc.subtitle, type: "website" }
  };
}

export function generateStaticParams() {
  return getProjectDocs().map((doc) => ({ slug: doc.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const doc = getProjectDoc(slug);
  if (!doc) notFound();

  const docs = getProjectDocs();
  const index = docs.findIndex((d) => d.slug === doc.slug);
  const prev = docs[index - 1];
  const next = docs[index + 1];

  return (
    <main className="mx-auto w-full max-w-3xl px-5 pb-24 pt-10 sm:px-8 sm:pt-14">
      {/* Back link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 font-mono text-xs text-ink/45 transition-colors hover:text-ink"
      >
        <ArrowLeft size={14} /> All projects
      </Link>

      {/* Header */}
      <header className="mt-8">
        <p className="mono-label">
          {doc.status} · {doc.year}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          {doc.title}
        </h1>
        <p className="mt-3 text-lg text-ink/60">{doc.subtitle}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {doc.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-line/10 bg-muted px-2 py-1 font-mono text-[11px] text-ink/70"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          {doc.github && (
            <Button asChild>
              <a href={doc.github} target="_blank" rel="noopener noreferrer">
                <Github size={15} /> GitHub
              </a>
            </Button>
          )}
          {doc.demo && (
            <Button asChild variant="outline">
              <a href={doc.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={15} /> Live Demo
              </a>
            </Button>
          )}
          {doc.docs && (
            <Button asChild variant="outline">
              <a href={doc.docs} target="_blank" rel="noopener noreferrer">
                Documentation
              </a>
            </Button>
          )}
        </div>
      </header>

      <div className="my-10 border-t border-line/8" />

      {/* Body */}
      <div className="doc">
        <MDXRemote source={doc.content} components={mdxComponents} />
      </div>

      {/* Prev / next */}
      <nav className="mt-16 grid gap-3 border-t border-line/8 pt-8 sm:grid-cols-2">
        {prev ? (
          <Link
            href={`/projects/${prev.slug}`}
            className="group rounded-lg border border-line/10 p-4 transition-colors hover:border-line/25 hover:bg-muted"
          >
            <span className="mono-label">Previous</span>
            <span className="mt-1 flex items-center gap-1.5 font-medium text-ink">
              <ArrowLeft size={14} /> {prev.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            href={`/projects/${next.slug}`}
            className="group rounded-lg border border-line/10 p-4 text-right transition-colors hover:border-line/25 hover:bg-muted"
          >
            <span className="mono-label">Next</span>
            <span className="mt-1 flex items-center justify-end gap-1.5 font-medium text-ink">
              {next.title} <ArrowRight size={14} />
            </span>
          </Link>
        )}
      </nav>
    </main>
  );
}
