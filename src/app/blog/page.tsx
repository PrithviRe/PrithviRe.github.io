export default function Blog() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center animate-in fade-in duration-500">
      <div className="p-4 rounded-2xl border border-border bg-card shadow-sm inline-flex mb-6">
        <span className="text-2xl">🚧</span>
      </div>
      <h1 className="text-3xl font-bold text-primary mb-4">Blog Coming Soon</h1>
      <p className="text-secondary max-w-md">
        I'm currently writing down my thoughts on building scalable systems, system architecture, and backend optimizations. Check back later!
      </p>
    </div>
  );
}
