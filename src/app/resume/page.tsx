export default function Resume() {
  return (
    <div className="flex flex-col max-w-[800px] mx-auto mt-10 p-4 sm:p-8 bg-card rounded-xl border border-border shadow-sm animate-in fade-in duration-500">
      {/* Header */}
      <h1 className="text-3xl font-bold text-primary">Prithvi Pramit</h1>
      <p className="text-secondary mt-1">Backend Engineer & Builder</p>
      <div className="flex flex-wrap gap-4 mt-3 text-sm text-secondary">
        <span>pprithvi2006@gmail.com</span>
        <span className="hidden sm:inline">•</span>
        <a href="https://github.com/PrithviRe" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
        <span className="hidden sm:inline">•</span>
        <a href="https://linkedin.com/in/prithvi-pramit" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
        <span className="hidden sm:inline">•</span>
        <a href="https://leetcode.com/u/prithvire" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LeetCode</a>
        <span className="hidden sm:inline">•</span>
        <a href="https://codeforces.com/profile/prithvire" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Codeforces</a>
      </div>

      <hr className="my-8 border-border" />

      {/* Education & Achievements */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-primary mb-6">Education & Achievements</h2>
        
        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
            <h3 className="text-lg font-medium text-primary">Vellore Institute of Technology, Chennai</h3>
            <span className="text-sm text-secondary">2024 - 2028</span>
          </div>
          <p className="text-sm font-medium text-primary mb-2">B.Tech in Electronics and Computer Engineering (GPA: 8.74 / 10.0)</p>
          <ul className="list-disc list-outside ml-4 text-sm text-secondary space-y-2">
            <li><strong className="text-primary font-medium">Honors & Awards:</strong> AIR 333 at Pentathon 2025 orchestrated by NCIIPC, Won Code-N-Conquer CTF (College-wide) leading a 3-member team.</li>
            <li><strong className="text-primary font-medium">Hackathons:</strong> Google Solutions Challenge 2025 (Team Lead), Google Agentic AI Hackathon 2025 (Participant), Google Gen AI Study Jam 2024.</li>
          </ul>
        </div>
      </section>

      <hr className="my-8 border-border" />

      {/* Skills */}
      <section>
        <h2 className="text-xl font-semibold text-primary mb-4">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 text-sm text-secondary">
          <div>
            <strong className="text-primary font-medium">Languages:</strong> C, C++, Java, Python
          </div>
          <div>
            <strong className="text-primary font-medium">Embedded:</strong> STM32, Embedded C, Arduino
          </div>
          <div>
            <strong className="text-primary font-medium">Frameworks:</strong> Flutter, Flask, Gin
          </div>
          <div>
            <strong className="text-primary font-medium">Libraries:</strong> Pandas, NumPy, Requests, YFinance
          </div>
          <div className="sm:col-span-2">
            <strong className="text-primary font-medium">Tools:</strong> Git, Docker, Linux, Google Cloud Platform, Firebase
          </div>
        </div>
      </section>
    </div>
  );
}
