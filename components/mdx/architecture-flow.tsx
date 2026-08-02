"use client";

interface Node {
  label: string;
  detail?: string;
}

export function ArchitectureFlow({ nodes }: { nodes: Node[] }) {
  return (
    <div className="not-prose my-8 rounded-xl border border-line/10 bg-muted/60 p-5 sm:p-6">
      <p className="mono-label mb-4">Data flow</p>
      <div className="flex flex-col items-stretch">
        {nodes.map((node, i) => (
          <div key={node.label}>
            <div className="rounded-lg border border-line/10 bg-card px-4 py-3 shadow-card">
              <p className="font-mono text-sm font-semibold text-ink">{node.label}</p>
              {node.detail && (
                <p className="mt-0.5 font-mono text-xs text-ink/50">{node.detail}</p>
              )}
            </div>
            {i < nodes.length - 1 && (
              <div className="flex h-8 flex-col items-center justify-center" aria-hidden>
                <span className="h-8 w-px bg-line/15" />
                <span className="-mt-[31px] animate-pulse text-[10px] leading-8 text-accent">
                  ▼
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
