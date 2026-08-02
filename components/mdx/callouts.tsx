export function Challenge({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose my-6 rounded-lg border border-red-200 bg-red-50/60 p-5 dark:border-red-500/30 dark:bg-red-500/10">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-red-700 dark:text-red-400">
        Challenge
      </p>
      <div className="mt-2 text-[15px] leading-relaxed text-ink/75 [&>p]:my-0">{children}</div>
    </div>
  );
}

export function Solution({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose my-6 rounded-lg border border-green-200 bg-green-50/60 p-5 dark:border-green-500/30 dark:bg-green-500/10">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-green-700 dark:text-green-400">
        Solution
      </p>
      <div className="mt-2 text-[15px] leading-relaxed text-ink/75 [&>p]:my-0">{children}</div>
    </div>
  );
}

export function Callout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="not-prose my-6 rounded-lg border border-accent/20 bg-accent-50/60 p-5 dark:border-accent/40 dark:bg-accent-500/10">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-accent">
        {title}
      </p>
      <div className="mt-2 text-[15px] leading-relaxed text-ink/75 [&>p]:my-0">{children}</div>
    </div>
  );
}
