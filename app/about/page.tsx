import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Award, Trophy, Heart, Shield, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Who I am, what I build, skills, and background."
};

const skillGroups = [
  {
    category: "Languages",
    items: ["C++ (C++17/C++20)", "C", "Python", "Java", "SQL", "GLSL"]
  },
  {
    category: "Systems & Graphics",
    items: [
      "OpenGL 3.3 Core Profile",
      "GLFW",
      "GLAD",
      "GLM",
      "Bitboards",
      "Multi-threading",
      "Memory Optimization",
      "Linux Systems"
    ]
  },
  {
    category: "AI & Data Science",
    items: [
      "LLMs & Prompt Architecture",
      "Agentic AI",
      "LangGraph",
      "Ollama (Local Models)",
      "ChromaDB",
      "Sentence-Transformers",
      "RAG Pipelines",
      "MLflow",
      "Neo4j",
      "Pandas / NumPy / SciPy"
    ]
  },
  {
    category: "Backend & Distributed",
    items: [
      "FastAPI",
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "RabbitMQ",
      "Docker",
      "REST APIs",
      "asyncio",
      "Scapy"
    ]
  },
  {
    category: "Developer Tools",
    items: ["Git", "CMake", "Ninja", "Linux", "Docker", "GCP", "Azure", "GDB", "Valgrind"]
  }
];

const achievements = [
  {
    title: "AIR 333 · Pentathon 2025",
    org: "National Critical Information Infrastructure Protection Centre (NCIIPC)",
    desc: "Ranked 333 nationwide in India's premier cybersecurity hackathon."
  },
  {
    title: "Winner · Code-N-Conquer CTF",
    org: "College-Wide Cyber Competition",
    desc: "Led a 3-member team to 1st place in the capture-the-flag tournament."
  },
  {
    title: "Team Lead · Google Solutions Challenge 2025",
    org: "Google Developer Student Clubs",
    desc: "Led team development solving community challenges with Google technology."
  },
  {
    title: "Participant · Google Agentic AI Hackathon 2025",
    org: "Google",
    desc: "Architected agentic AI prototypes leveraging state-of-the-art tooling."
  },
  {
    title: "Google Gen AI Study Jam 2024",
    org: "Google Cloud",
    desc: "Completed foundation tracks in generative AI and cloud infrastructure."
  }
];

const campusActivities = [
  {
    role: "Technical Member · IEEE Computer Society",
    details: "Contributed to Solve-and-Hack, a competitive coding platform for data structures and algorithms."
  },
  {
    role: "Technical Member · Microsoft Innovations Club",
    details: "Evaluation Committee for Hack-A-Throne; Core Committee for Fortress of Shadows CTF at TechnoVIT 2025."
  },
  {
    role: "Student Coordinator · CYSCOM (Cybersecurity Student Community)",
    details: "Organized red-teaming workshops, challenge authoring, and student technical mentorship."
  },
  {
    role: "Technical Member · Linux Users Group (LUG)",
    details: "Active contributor to open-source systems discussions, kernel utilities, and Linux advocacy."
  }
];

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 pb-24 pt-12 sm:px-8 sm:pt-16">
      <header>
        <p className="mono-label">Profile</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Prithvi Pramit
        </h1>
        <p className="mt-2 text-lg text-accent font-medium">
          Systems &amp; Graphics · AI &amp; Multi-Agent Systems · Backend Engineering
        </p>
      </header>

      {/* Bio */}
      <section className="mt-8 space-y-4 leading-relaxed text-ink/75">
        <p>
          I&apos;m a 20-year-old undergraduate engineer in my 3rd year (pre-final year) pursuing a
          Bachelor of Technology in <strong className="text-ink">Electronics and Computer Engineering</strong> at{" "}
          <strong className="text-ink">Vellore Institute of Technology, Chennai</strong> (2024–2028),
          maintaining a <strong className="text-ink">CGPA of 8.64</strong>.
        </p>
        <p>
          I have a passion for building technically rigorous software: from Craig Reynolds boids simulations and
          Navier-Stokes fluid dynamics in C++/OpenGL to supervisor-controlled multi-agent intelligence platforms with LangGraph,
          and high-concurrency electronic stock exchanges with ACID guarantees in Java and PostgreSQL.
        </p>
        <p>
          My engineering approach is driven by first principles: understand the math, design allocation-free hot loops,
          isolate critical failure domains, and measure before guessing.
        </p>
      </section>

      {/* Competitive Programming & Rating Highlights */}
      <section className="mt-12 rounded-xl border border-line/10 bg-card p-6">
        <div className="flex items-center gap-2">
          <Trophy size={18} className="text-accent" />
          <h2 className="text-lg font-bold tracking-tight text-ink">Competitive Programming &amp; Chess</h2>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-lg border border-line/8 bg-muted/50 p-3.5">
            <span className="mono-label text-[10px]">Codeforces</span>
            <p className="mt-1 text-lg font-bold text-accent">Expert</p>
            <a
              href={site.codeforces}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-ink/50 hover:underline"
            >
              @prithvire ↗
            </a>
          </div>
          <div className="rounded-lg border border-line/8 bg-muted/50 p-3.5">
            <span className="mono-label text-[10px]">LeetCode</span>
            <p className="mt-1 text-lg font-bold text-ink">250+ Days</p>
            <a
              href={site.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-ink/50 hover:underline"
            >
              Streak profile ↗
            </a>
          </div>
          <div className="rounded-lg border border-line/8 bg-muted/50 p-3.5">
            <span className="mono-label text-[10px]">CodeChef</span>
            <p className="mt-1 text-lg font-bold text-ink">Competitive</p>
            <a
              href={site.codechef}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-ink/50 hover:underline"
            >
              @prithvire ↗
            </a>
          </div>
          <div className="rounded-lg border border-line/8 bg-muted/50 p-3.5">
            <span className="mono-label text-[10px]">Chess.com</span>
            <p className="mt-1 text-lg font-bold text-ink">1600 ELO</p>
            <span className="mt-1 inline-block text-xs text-ink/50">Rapid Rating</span>
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="mt-14">
        <div className="flex items-center gap-2">
          <Cpu size={18} className="text-accent" />
          <h2 className="text-xl font-bold tracking-tight text-ink">Technical Skillset</h2>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.category} className="rounded-xl border border-line/10 bg-card p-5">
              <h3 className="mono-label text-accent font-semibold">{group.category}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-line/8 bg-muted px-2 py-1 font-mono text-xs text-ink/75"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="mt-14">
        <div className="flex items-center gap-2">
          <Award size={18} className="text-accent" />
          <h2 className="text-xl font-bold tracking-tight text-ink">Certifications</h2>
        </div>
        <div className="mt-4 rounded-xl border border-line/10 bg-card p-5">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-ink">
                Azure AI Apps and Agents Developer Associate (AI-103)
              </h3>
              <p className="mt-1 text-xs text-ink/60">
                Microsoft Certified · Validation in designing, building, and deploying agentic workflows and AI applications on cloud infrastructure.
              </p>
            </div>
            <span className="mono-label text-[10px] text-accent font-semibold">Certified</span>
          </div>
        </div>
      </section>

      {/* Awards & Achievements */}
      <section className="mt-14">
        <div className="flex items-center gap-2">
          <Trophy size={18} className="text-accent" />
          <h2 className="text-xl font-bold tracking-tight text-ink">Awards &amp; Competitions</h2>
        </div>
        <div className="mt-4 space-y-3">
          {achievements.map((item) => (
            <div key={item.title} className="rounded-xl border border-line/10 bg-card p-4 transition-colors hover:border-line/20">
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <h3 className="font-semibold text-ink text-sm sm:text-base">{item.title}</h3>
                <span className="mono-label text-[10px] text-ink/50">{item.org}</span>
              </div>
              <p className="mt-1 text-xs text-ink/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Extracurriculars & Leadership */}
      <section className="mt-14">
        <div className="flex items-center gap-2">
          <Shield size={18} className="text-accent" />
          <h2 className="text-xl font-bold tracking-tight text-ink">Leadership &amp; Campus Communities</h2>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {campusActivities.map((act) => (
            <div key={act.role} className="rounded-xl border border-line/10 bg-card p-4">
              <h3 className="text-sm font-semibold text-ink">{act.role}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-ink/60">{act.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interests */}
      <section className="mt-14">
        <div className="flex items-center gap-2">
          <Heart size={18} className="text-rose-500" />
          <h2 className="text-xl font-bold tracking-tight text-ink">Personal Interests</h2>
        </div>
        <div className="mt-3 rounded-xl border border-line/10 bg-card p-5">
          <p className="text-sm leading-relaxed text-ink/70">
            Going down obscure internet rabbit holes, reading niche engineering blogs, competitive chess (1600 Rapid),
            badminton, table tennis, and deep-diving into subjects outside my usual wheelhouse like cognitive architectures and cellular automata.
          </p>
        </div>
      </section>

      {/* Profiles & Connect */}
      <section className="mt-14 border-t border-line/10 pt-8">
        <h2 className="text-xl font-bold tracking-tight text-ink">Connect &amp; Profiles</h2>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
          {[
            { label: "GitHub", href: site.github },
            { label: "LinkedIn", href: site.linkedin },
            { label: "Codeforces", href: site.codeforces },
            { label: "LeetCode", href: site.leetcode },
            { label: "CodeChef", href: site.codechef },
            { label: "HackerRank", href: site.hackerrank },
            { label: "Email (Primary)", href: `mailto:${site.email}` },
            { label: "Email (Personal)", href: `mailto:${site.secondaryEmail}` }
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-sm font-medium text-accent hover:underline"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
