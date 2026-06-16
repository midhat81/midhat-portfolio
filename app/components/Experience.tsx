"use client";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">

      <h2 className="text-3xl font-bold mb-10 tracking-tight">
        Experience
      </h2>

      <div className="space-y-8">

        {[
          {
            title: "Founding Engineer — Yovu Travel",
            date: "Jan 2026 – Present",
            desc: "Built 0→1 AI travel platform, onboarding systems, dashboards, and AI workflows."
          },
          {
            title: "Full Stack / Backend Engineer (Freelance)",
            date: "2022 – Present",
            desc: "Built CRM/ERP systems, APIs, webhooks, real-time systems, and backend pipelines."
          },
          {
            title: "ML Engineer — Inoviks Soft Solutions",
            date: "2019 – 2024",
            desc: "Built OCR, chatbot, and CV pipelines with production-grade ML APIs."
          },
          {
            title: "C# Developer — Early Career",
            date: "2016 – 2018",
            desc: "Desktop apps and backend business systems."
          }
        ].map((exp, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-gray-500 text-sm">{exp.date}</p>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              {exp.desc}
            </p>
          </div>
        ))}

      </div>

      {/* SKILLS */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>

        <div className="flex flex-wrap gap-2 text-xs">

          {[
            "React","Next.js","TypeScript","Python","FastAPI","Django","Node.js","Express",
            "NestJS","PostgreSQL","Redis","Supabase","Prisma",
            "LLMs","RAG","OpenAI","Claude","Gemini","OCR",
            "WebSockets","Microservices","Event-Driven","REST APIs","Webhooks",
            "Docker","GitHub Actions","Vercel",
            "UI/UX Design","Design Systems","Responsive UI","Figma-to-Code"
          ].map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-black text-white transition hover:scale-105 hover:opacity-90"
            >
              {skill}
            </span>
          ))}

        </div>
      </div>

    </section>
  );
}