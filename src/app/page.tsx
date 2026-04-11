import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 mt-20 sm:mt-32 animate-in fade-in duration-500">
      <div className="max-w-[600px] flex flex-col gap-6">
        <h1 className="text-5xl font-bold leading-tight">
          Hey, I'm <span className="text-accent">Prithvi</span>
        </h1>
        <p className="text-lg text-secondary leading-relaxed">
          I build scalable systems, tools, and experiences. <br />
          Focused on backend engineering and performance.
        </p>
        
        <div className="flex flex-wrap items-center gap-4 mt-6">
          <Link 
            href="/projects" 
            className="px-6 py-3 bg-accent text-white rounded-[10px] font-medium transition-all duration-200 hover:scale-[1.02] hover:brightness-110 shadow-sm"
          >
            View Projects
          </Link>
          <Link 
            href="/resume" 
            className="px-6 py-3 border-[1px] border-border text-primary bg-transparent rounded-[10px] font-medium transition-all duration-200 hover:bg-card hover:scale-[1.02]"
          >
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
}
