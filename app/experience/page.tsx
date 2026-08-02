import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description: "Deloitte USI internship and engineering timeline."
};

const timeline = [
  {
    year: "2024",
    items: ["Started B.Tech · ECE, VIT Chennai"]
  },
  {
    year: "2025",
    items: ["Deloitte USI · AI & Data Science Intern", "Portfolio Analyzer", "STM32 Weather Station"]
  },
  {
    year: "2026",
    items: ["Chess Engine", "Network Security Platform", "Electronic Stock Exchange Simulator"]
  }
];

export default function ExperiencePage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 pb-24 pt-12 sm:px-8 sm:pt-16">
      <header>
        <p className="mono-label">Work</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">Experience</h1>
        <p className="mt-4 max-w-prose text-lg leading-relaxed text-ink/60">
          One internship so far, written the way I think about engineering work — the problem,
          the research, the implementation, and what came out of it.
        </p>
      </header>

      {/* Deloitte case study */}
      <section className="mt-12">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">Deloitte USI</h2>
          <span className="mono-label">Jun – Jul 2025 · Gurugram, India</span>
        </div>
        <p className="mt-1 font-mono text-xs text-ink/50">AI &amp; Data Science Intern</p>

        <div className="mt-8 space-y-8">
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              Research
            </h3>
            <p className="mt-2 leading-relaxed text-ink/70">
              Researched enterprise knowledge graph architectures and graph database ecosystems —
              including Neo4j and Snowflake — for scalable AI applications. Evaluated
              state-of-the-art foundation models across quality, inference latency, and
              operational cost to guide model selection.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              Implementation
            </h3>
            <p className="mt-2 leading-relaxed text-ink/70">
              Designed and implemented a benchmark-driven LLM routing pipeline, and integrated
              MLflow for experiment tracking and model versioning across the AI development
              workflow.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              Outcome
            </h3>
            <p className="mt-2 leading-relaxed text-ink/70">
              Model selection became a measured decision rather than a habit: each request is
              routed to the model whose benchmarked quality, latency, and cost profile best fit
              it — with every experiment tracked and reproducible.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight text-ink">Timeline</h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          {timeline.map((entry) => (
            <div key={entry.year} className="border-l border-line/10 pl-5">
              <p className="font-mono text-sm font-semibold text-ink">{entry.year}</p>
              <ul className="mt-3 space-y-2">
                {entry.items.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-ink/60">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight text-ink">Leadership & community</h2>
        <div className="mt-6 space-y-5">
          {[
            {
              role: "Technical Member · IEEE Computer Society",
              detail: "Contributed to the Solve-and-Hack Platform, a DSA-focused competitive coding platform."
            },
            {
              role: "Technical Member · Microsoft Innovations Club",
              detail: "Evaluation committee for Hack-A-Throne; organizing committee for Fortress of Shadows, the flagship CTF at TechnoVIT 2025."
            },
            {
              role: "Student Coordinator · CYSCOM",
              detail: "Coordinated cybersecurity events and workshops; CTF creation, red-teaming challenges, and peer mentoring."
            }
          ].map((item) => (
            <div key={item.role} className="border-b border-line/8 pb-5">
              <h3 className="font-medium text-ink">{item.role}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink/55">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
