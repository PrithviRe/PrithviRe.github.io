import type { Metadata } from "next";
import { getProjectDocs } from "@/lib/content";
import { ProjectsList } from "@/components/projects-list";

export const metadata: Metadata = {
  title: "Projects",
  description: "Systems, graphics engines, AI agent platforms, and distributed trading case studies."
};

export default function ProjectsPage() {
  const docs = getProjectDocs();

  return (
    <main className="mx-auto w-full max-w-4xl px-5 pb-24 pt-12 sm:px-8 sm:pt-16">
      <header className="mb-10">
        <p className="mono-label">Portfolio</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Projects &amp; Case Studies
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/65">
          Each project is documented as a deep-dive case study covering architecture, algorithmic decisions,
          tradeoffs, benchmarks, and lessons learned.
        </p>
      </header>

      <ProjectsList projects={docs} />
    </main>
  );
}
