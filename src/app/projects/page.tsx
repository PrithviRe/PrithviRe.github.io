import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "STM32 Weather Station",
      description: "Built an embedded weather monitoring system using the STM32 B-L476EIOT01A2 kit. Collected sensor data, displayed real-time readings on an I2C LCD, and visualized data on MathWorks ThingSpeak using IoT endpoints.",
      tags: ["Embedded C", "STM32", "IoT"],
      link: "https://github.com/PrithviRe/stm32-weather-station"
    },
    {
      title: "Portfolio Analyzer",
      description: "AI-powered portfolio analysis app using real-time stock data. Integrated Firebase auth, Zerodha APIs, and Gemini AI to generate Buy/Hold/Sell insights and personalized rebalancing suggestions.",
      tags: ["Flutter", "Flask", "Firebase", "AI"],
      link: "https://github.com/PrithviRe/Portfolio-Analyzer"
    },
    {
      title: "UniDocs",
      description: "Developed an all-in-one PDF, DOCX, and XLSX viewer/editor focusing on lightweight and efficient document handling.",
      tags: ["Systems", "File Processing"],
      link: "https://github.com/PrithviRe/UniDocs"
    },
    {
      title: "Tic-Tac-Toe AI",
      description: "Implemented an unbeatable Tic-Tac-Toe AI using the Minimax algorithm with optimal decision-making.",
      tags: ["Algorithms", "C++"],
      link: "https://github.com/PrithviRe/tic-tac-toe"
    }
  ];

  return (
    <div className="flex flex-col gap-10 mt-10 animate-in fade-in duration-500">
      <h1 className="text-4xl font-bold">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between p-6 rounded-2xl bg-card border-[1px] border-border hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-accent/10 transition-all duration-300 relative overflow-hidden"
          >
            {/* Subtle glow effect behind card in dark mode */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 transition-colors duration-500 z-0"></div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-medium text-primary mb-3">
                  {project.title}
                </h3>
                <ExternalLink size={20} className="text-secondary group-hover:text-accent transition-colors" />
              </div>
              <p className="text-secondary text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 relative z-10">
              {project.tags.map((tag, tagIdx) => (
                <span 
                  key={tagIdx} 
                  className="px-3 py-1 bg-background/50 border border-border text-xs rounded-full text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
