import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type ProjectDoc = {
  slug: string;
  title: string;
  subtitle: string;
  status: string;
  year: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  docs?: string;
  featured?: boolean;
  order?: number;
  content: string;
};

export type BlogDoc = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  minutes: number;
  content: string;
};

function readDir(dir: "projects" | "blog"): string[] {
  const full = path.join(process.cwd(), "content", dir);
  if (!fs.existsSync(full)) return [];
  return fs.readdirSync(full).filter((f) => f.endsWith(".mdx"));
}

export function getProjectDocs(): ProjectDoc[] {
  return readDir("projects")
    .map((file) => {
      const raw = fs.readFileSync(path.join(process.cwd(), "content", "projects", file), "utf8");
      const { data, content } = matter(raw);
      return {
        slug: file.replace(/\.mdx$/, ""),
        ...(data as Omit<ProjectDoc, "slug" | "content">),
        content
      };
    })
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function getProjectDoc(slug: string): ProjectDoc | undefined {
  const full = path.join(process.cwd(), "content", "projects", `${slug}.mdx`);
  if (!fs.existsSync(full)) return undefined;
  const raw = fs.readFileSync(full, "utf8");
  const { data, content } = matter(raw);
  return { slug, ...(data as Omit<ProjectDoc, "slug" | "content">), content };
}

export function getBlogDocs(): BlogDoc[] {
  return readDir("blog")
    .map((file) => {
      const raw = fs.readFileSync(path.join(process.cwd(), "content", "blog", file), "utf8");
      const { data, content } = matter(raw);
      return {
        slug: file.replace(/\.mdx$/, ""),
        ...(data as Omit<BlogDoc, "slug" | "content">),
        content
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogDoc(slug: string): BlogDoc | undefined {
  const full = path.join(process.cwd(), "content", "blog", `${slug}.mdx`);
  if (!fs.existsSync(full)) return undefined;
  const raw = fs.readFileSync(full, "utf8");
  const { data, content } = matter(raw);
  return { slug, ...(data as Omit<BlogDoc, "slug" | "content">), content };
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}
