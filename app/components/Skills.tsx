"use client";

const skills = [
  // Backend
  "Python",
  "FastAPI",
  "Django",
  "Node.js",
  "Express",
  "TypeScript",

  // Frontend
  "React",
  "Next.js",
  "Tailwind CSS",

  // Databases
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",

  // Architecture
  "System Design",
  "Microservices",
  "Distributed Systems",
  "REST APIs",
  "WebSockets",

  // DevOps
  "Docker",
  "Linux",
  "CI/CD",
  "GitHub Actions",

  // AI / ML
  "LLMs",
  "RAG Pipelines",
  "Ollama",
  "AI Integrations",
  "Machine Learning"
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">

      {/* Title */}
      <h2 className="text-3xl font-bold mb-10 tracking-tight">
        Skills & Technologies
      </h2>

      {/* Glass container */}
      <div className="
        flex flex-wrap gap-3
        p-6 rounded-2xl
        bg-white/60 dark:bg-white/5
        backdrop-blur-xl
        border border-white/20 dark:border-white/10
        shadow-sm
      ">

        {skills.map((skill, i) => (
          <span
            key={i}
            className="
              px-3 py-1 text-sm
              rounded-full
              bg-white/70 dark:bg-white/10
              border border-white/20 dark:border-white/10
              backdrop-blur
              hover:scale-105 hover:shadow-md
              transition
            "
          >
            {skill}
          </span>
        ))}

      </div>

    </section>
  );
}