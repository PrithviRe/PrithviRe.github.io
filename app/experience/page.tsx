import type { Metadata } from "next";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Experience",
  description: "Work experience, internships, and engineering timeline."
};

const timelineData = [
  {
    year: "2026",
    highlight: "Systems Programming, Agentic AI & Enterprise Internship",
    events: [
      {
        title: "Deloitte USI · AI & Data Science Intern",
        time: "Jun 2026 – Jul 2026",
        desc: "Researched enterprise knowledge graph architectures (Neo4j, Snowflake). Developed benchmark-driven LLM routing pipelines and integrated MLflow for experiment tracking."
      },
      {
        title: "Conductor: Autonomous Multi-Agent Platform",
        time: "Nov 2026 – Present",
        desc: "8 specialized agent roles, DAG task planning (Kahn's algorithm), iterative Critic feedback loops (52% → 88% success rate), and AST execution sandbox."
      },
      {
        title: "Real-Time OpenGL Graphics Suite",
        time: "Nov 2026",
        desc: "Boids flocking simulation (7,000+ agents via spatial hashing), Mini Ray Marcher (SDFs & CSG), Tiny Fluid Simulator (Jos Stam Stable Fluids), Procedural Terrain Generator, and 100K+ Particle Simulator."
      },
      {
        title: "Network Operations & Security Platform (NOSP)",
        time: "Jul 2026 – Oct 2026",
        desc: "Full-stack network diagnostics, async packet capture engine via Scapy, and 6 active threat detection modules."
      },
      {
        title: "Miniature Electronic Stock Exchange",
        time: "Jul 2026 – Oct 2026",
        desc: "Concurrent matching engine with price-time priority, ACID execution in PostgreSQL, and Redis order book caching."
      },
      {
        title: "Stockshark Chess Engine (C++20)",
        time: "Jul 2026 – Nov 2026",
        desc: "Bitboard move generator, Alpha-Beta search with PVS, Quiescence, Null-Move Pruning, and Zobrist transposition tables."
      }
    ]
  },
  {
    year: "2025",
    highlight: "Competitions, Embedded Systems & AI Prototypes",
    events: [
      {
        title: "AIR 333 at Pentathon 2025",
        time: "2025",
        desc: "Ranked 333 nationwide in India's prestigious national cybersecurity competition organized by NCIIPC."
      },
      {
        title: "Won Code-N-Conquer CTF",
        time: "2025",
        desc: "Led 3-member team to victory in college-wide capture-the-flag tournament."
      },
      {
        title: "Google Solutions Challenge & Agentic AI Hackathon",
        time: "2025",
        desc: "Served as Team Lead for Solutions Challenge and developed agent-based prototypes."
      },
      {
        title: "STM32 IoT Weather Station",
        time: "Jul 2025 – Oct 2025",
        desc: "Embedded C firmware on STM32 B-L476E board, I2C sensor data display, and ThingSpeak cloud telemetry."
      },
      {
        title: "AI Portfolio Analyzer",
        time: "Jan 2025 – Mar 2025",
        desc: "Cross-platform Flutter application with Flask backend, Zerodha API integration, and Gemini AI portfolio insights."
      }
    ]
  },
  {
    year: "2024",
    highlight: "Foundations & Academic Journey",
    events: [
      {
        title: "Commenced B.Tech in Electronics and Computer Engineering",
        time: "Jul 2024",
        desc: "Enrolled at Vellore Institute of Technology, Chennai. Maintaining an 8.64 CGPA."
      },
      {
        title: "Google Gen AI Study Jam",
        time: "2024",
        desc: "Deep-dived into foundational generative models and cloud AI services."
      }
    ]
  }
];

export default function ExperiencePage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 pb-24 pt-12 sm:px-8 sm:pt-16">
      <header>
        <p className="mono-label">Professional Background</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Experience &amp; Timeline
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/65">
          Internships, systems milestones, competitive programming accomplishments, and community leadership.
        </p>
      </header>

      {/* Deloitte Case Study Section */}
      <section className="mt-12 rounded-2xl border border-line/10 bg-card p-6 sm:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line/8 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <Briefcase size={20} className="text-accent" />
              <h2 className="text-2xl font-bold tracking-tight text-ink">Deloitte USI</h2>
            </div>
            <p className="mt-1 font-mono text-xs font-semibold text-accent">
              AI &amp; Data Science Intern
            </p>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-ink/50">
            <Calendar size={14} />
            <span>Jun 2026 – Jul 2026</span>
            <span>·</span>
            <span className="inline-flex items-center gap-1">
              <MapPin size={13} /> Gurugram / Hyderabad
            </span>
          </div>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          <div className="rounded-lg border border-line/8 bg-muted/40 p-4">
            <h3 className="mono-label text-[11px] text-accent font-semibold">1. Knowledge Graphs</h3>
            <p className="mt-2 text-xs leading-relaxed text-ink/75">
              Researched enterprise knowledge graph architectures and evaluated graph database ecosystems,
              including Neo4j and Snowflake integrations for complex enterprise client requirements.
            </p>
          </div>

          <div className="rounded-lg border border-line/8 bg-muted/40 p-4">
            <h3 className="mono-label text-[11px] text-accent font-semibold">2. LLM Benchmark Pipeline</h3>
            <p className="mt-2 text-xs leading-relaxed text-ink/75">
              Analyzed state-of-the-art LLM benchmarks to compare models across quality, inference latency,
              and operational cost. Built an automated LLM routing pipeline matching requests to optimal models.
            </p>
          </div>

          <div className="rounded-lg border border-line/8 bg-muted/40 p-4">
            <h3 className="mono-label text-[11px] text-accent font-semibold">3. MLflow Tracking</h3>
            <p className="mt-2 text-xs leading-relaxed text-ink/75">
              Configured MLflow for systematic experiment tracking, model registry, and lifecycle management
              within the AI engineering pipeline to ensure reproducible evaluations.
            </p>
          </div>
        </div>
      </section>

      {/* Chronological Timeline */}
      <section className="mt-16">
        <div className="mb-8">
          <p className="mono-label">Trajectory</p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-ink">Engineering Chronology</h2>
        </div>

        <div className="space-y-12">
          {timelineData.map((yearGroup) => (
            <div key={yearGroup.year} className="relative pl-6 sm:pl-8 border-l-2 border-line/10">
              {/* Year dot */}
              <div className="absolute -left-[9px] top-0 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-paper" />

              <div className="flex flex-wrap items-baseline gap-3">
                <span className="font-mono text-2xl font-extrabold text-ink">{yearGroup.year}</span>
                <span className="mono-label text-xs text-accent font-semibold">{yearGroup.highlight}</span>
              </div>

              <div className="mt-6 space-y-5">
                {yearGroup.events.map((ev) => (
                  <div
                    key={ev.title}
                    className="rounded-xl border border-line/8 bg-card p-4 transition-colors hover:border-line/20"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-sm font-semibold text-ink sm:text-base">{ev.title}</h3>
                      <span className="font-mono text-[11px] text-ink/45">{ev.time}</span>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink/65">{ev.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership & Activities */}
      <section className="mt-16 border-t border-line/10 pt-10">
        <div className="mb-6">
          <p className="mono-label">Involvement</p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-ink">Campus Communities &amp; Leadership</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              role: "Technical Member · IEEE Computer Society",
              detail: "Contributed to the Solve-and-Hack competitive coding platform, authoring algorithmic problems and testing automated judge test cases."
            },
            {
              role: "Technical Member · Microsoft Innovations Club",
              detail: "Served on the Evaluation Committee for Hack-A-Throne; Core Committee for Fortress of Shadows, the flagship CTF at TechnoVIT 2025."
            },
            {
              role: "Student Coordinator · CYSCOM",
              detail: "Coordinated cybersecurity student initiatives, hands-on workshops, CTF problem authoring, and red-teaming mentorship."
            },
            {
              role: "Technical Member · Linux Users Group (LUG)",
              detail: "Promoted Linux adoption, participated in kernel and CLI tool discussions, and supported open-source development sessions."
            }
          ].map((item) => (
            <div key={item.role} className="rounded-xl border border-line/10 bg-card p-5">
              <h3 className="text-sm font-semibold text-ink">{item.role}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-ink/60">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
