export function Screenshot({
  src,
  alt,
  caption,
  label
}: {
  src?: string;
  alt?: string;
  caption?: string;
  label?: string;
}) {
  return (
    <figure className="not-prose my-8">
      <div className="overflow-hidden rounded-xl border border-line/10 bg-card shadow-lift">
        <div className="flex items-center gap-2 border-b border-line/8 bg-muted px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-line/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-line/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-line/10" />
          <span className="ml-2 truncate font-mono text-[11px] text-ink/45">
            {label ?? "app.screenshot"}
          </span>
        </div>
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt ?? label ?? ""} className="w-full object-cover" />
        ) : (
          <div className="flex h-72 flex-col gap-3 bg-[repeating-linear-gradient(0deg,rgba(10,10,10,0.03)_0px,rgba(10,10,10,0.03)_1px,transparent_1px,transparent_28px)] p-6 dark:bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.04)_0px,rgba(255,255,255,0.04)_1px,transparent_1px,transparent_28px)] sm:h-80">
            <div className="flex items-center gap-2">
              <span className="h-3 w-24 rounded bg-line/10" />
              <span className="h-3 w-16 rounded bg-accent/20" />
            </div>
            <div className="mt-3 flex gap-3">
              <div className="h-40 flex-1 rounded-md border border-line/8 bg-card/80 p-3">
                <span className="block h-2.5 w-20 rounded bg-line/10" />
                <span className="mt-2 block h-2.5 w-32 rounded bg-line/5" />
                <span className="mt-2 block h-2.5 w-24 rounded bg-line/5" />
                <span className="mt-4 block h-12 w-full rounded bg-accent/10" />
              </div>
              <div className="hidden w-40 flex-col gap-2 sm:flex">
                <span className="h-8 rounded border border-line/8 bg-card/70" />
                <span className="h-8 rounded border border-line/8 bg-card/70" />
                <span className="h-8 rounded border border-line/8 bg-card/70" />
              </div>
            </div>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-center font-mono text-xs text-ink/45">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
