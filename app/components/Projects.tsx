"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 tracking-tight">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {[
          {
            title: "AdGenie AI",
            desc: "AI-powered video ad generation SaaS with async rendering, voice synthesis, payments, and scalable worker system.",
            tech: ["NestJS", "TypeScript", "Redis", "BullMQ"],
            link: "https://github.com/midhat81/Adgenie-ai",
            tag: "AI SaaS Platform"
          },
          {
            title: "TravelAgent AI",
            desc: "Multi-agent AI travel system with RAG pipeline, WebSockets, and local LLM integration.",
            tech: ["Node.js", "TypeScript", "WebSockets", "Ollama"],
            link: "https://github.com/midhat81/TravelAgent-AI",
            tag: "Multi-Agent AI"
          },
          {
            title: "FutureHouse AI",
            desc: "AI system that generates photorealistic home designs with multiple architectural views.",
            tech: ["React", "TypeScript", "Cloudflare AI", "Supabase"],
            link: "https://github.com/midhat81/Future-House",
            tag: "AI Visualization"
          },
          {
            title: "Rythmiq",
            desc: "AI personal assistant that generates daily recommendations based on sleep, weather, and energy.",
            tech: ["React Native", "Expo", "TypeScript", "AI"],
            link: "https://github.com/midhat81/Rythmiq",
            tag: "Mobile AI App"
          },
          {
            title: "HealthGrid AI",
            desc: "Real-time healthcare system for ambulance dispatch and hospital monitoring.",
            tech: ["React", "TypeScript", "WebSockets", "Leaflet"],
            link: "https://github.com/midhat81/HealthGrid-AI",
            tag: "Real-Time System"
          },
          {
            title: "AlphaPulse AI",
            desc: "Stock intelligence system with ML predictions and real-time financial analytics.",
            tech: ["Python", "Rust", "Redis", "Next.js"],
            link: "https://github.com/midhat81/alphapulse-ai",
            tag: "ML System"
          }
        ].map((project, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-sm hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>

            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {project.desc}
            </p>

            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-black text-white transition hover:scale-105"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-black text-white text-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.03] active:scale-[0.98]"
              >
                GitHub
              </a>

              <span className="text-xs text-gray-500">
                {project.tag}
              </span>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}