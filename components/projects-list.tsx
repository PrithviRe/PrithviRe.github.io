"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import type { ProjectDoc } from "@/lib/content";

const CATEGORIES = [
  "All",
  "Systems & Graphics",
  "AI & Agents",
  "Backend & Distributed",
  "Embedded & IoT"
] as const;

type Category = (typeof CATEGORIES)[number];

function getCategoryForProject(doc: ProjectDoc): Category {
  const techLower = doc.tech.map((t) => t.toLowerCase());
  const titleLower = doc.title.toLowerCase();

  if (
    techLower.some((t) => ["opengl", "glsl", "bitboards", "c++", "c++17", "c++20", "cmake"].includes(t)) ||
    titleLower.includes("boids") ||
    titleLower.includes("marcher") ||
    titleLower.includes("fluid") ||
    titleLower.includes("terrain") ||
    titleLower.includes("particle") ||
    titleLower.includes("chess")
  ) {
    return "Systems & Graphics";
  }

  if (
    techLower.some((t) => ["langgraph", "ollama", "chromadb", "gemini", "ai"].includes(t)) ||
    titleLower.includes("conductor") ||
    titleLower.includes("portfolio analyzer")
  ) {
    return "AI & Agents";
  }

  if (
    techLower.some((t) => ["spring boot", "kafka", "redis", "fastapi", "scapy", "postgresql"].includes(t)) ||
    titleLower.includes("exchange") ||
    titleLower.includes("network")
  ) {
    return "Backend & Distributed";
  }

  if (
    techLower.some((t) => ["embedded c", "stm32", "iot", "i2c"].includes(t)) ||
    titleLower.includes("weather")
  ) {
    return "Embedded & IoT";
  }

  return "Systems & Graphics";
}

export function ProjectsList({ projects }: { projects: ProjectDoc[] }) {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => getCategoryForProject(p) === selectedCategory);

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-line/10 pb-4">
        {CATEGORIES.map((cat) => {
          const count = cat === "All"
            ? projects.length
            : projects.filter((p) => getCategoryForProject(p) === cat).length;

          const isSelected = selectedCategory === cat;

          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                isSelected
                  ? "bg-ink text-paper shadow-sm"
                  : "bg-muted/70 text-ink/65 hover:bg-muted hover:text-ink"
              }`}
            >
              <span>{cat}</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                isSelected ? "bg-paper/20 text-paper" : "bg-line/10 text-ink/50"
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid / List */}
      <div className="mt-8 space-y-4">
        {filteredProjects.map((doc, i) => (
          <div
            key={doc.slug}
            className="glass-card hover-lift group flex flex-col justify-between rounded-xl p-5 sm:p-6 transition-all"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-mono text-ink/35">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-ink/20">·</span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-line/10 bg-muted px-2 py-0.5 font-mono text-[10px] text-ink/65">
                    <span className={doc.status === "In Progress" ? "h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" : "h-1.5 w-1.5 rounded-full bg-emerald-500"} />
                    {doc.status}
                  </span>
                  <span className="font-mono text-ink/40">{doc.year}</span>
                </div>

                <h2 className="mt-2 text-xl font-bold tracking-tight text-ink group-hover:text-accent transition-colors">
                  <Link href={`/projects/${doc.slug}`}>
                    {doc.title}
                  </Link>
                  <span className="text-sm font-normal text-ink/50 ml-2 hidden sm:inline">
                    — {doc.subtitle}
                  </span>
                </h2>

                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-ink/70 max-w-2xl">
                  {doc.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {doc.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-line/8 bg-muted px-2 py-0.5 font-mono text-[10px] text-ink/65"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex shrink-0 items-center gap-3 sm:mt-0 sm:flex-col sm:items-end">
                <Link
                  href={`/projects/${doc.slug}`}
                  className="inline-flex items-center gap-1 rounded-lg border border-line/10 bg-card px-3 py-1.5 text-xs font-semibold text-accent shadow-sm transition-all hover:bg-accent hover:text-white"
                >
                  Case study <ArrowUpRight size={13} />
                </Link>

                {doc.github && (
                  <a
                    href={doc.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-ink/50 transition-colors hover:text-ink"
                    title="View GitHub Repository"
                  >
                    <Github size={14} />
                    <span className="font-mono text-[11px]">Repository</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
