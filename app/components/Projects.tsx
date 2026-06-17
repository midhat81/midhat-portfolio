"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  };

  const projects = [
    {
      title: "AdGenie AI",
      desc: "AI-powered video ad generation SaaS with automated script generation, voice synthesis, async rendering, payment processing, and scalable worker architecture.",
      tech: ["NestJS", "TypeScript", "Redis", "BullMQ"],
      link: "https://github.com/midhat81/Adgenie-ai",
      tag: "AI SaaS Platform"
    },
    {
      title: "TravelAgent AI",
      desc: "Multi-agent AI travel system with RAG pipelines, WebSocket-based orchestration, and local LLM integration for intelligent travel planning.",
      tech: ["Node.js", "TypeScript", "WebSockets", "Ollama"],
      link: "https://github.com/midhat81/TravelAgent-AI",
      tag: "Multi-Agent AI System"
    },
    {
      title: "FutureHouse AI",
      desc: "AI-powered home visualization platform generating 7 photorealistic architectural views based on user preferences. Includes floor plan builder, virtual tours, cost estimator, and design comparison tools.",
      tech: ["React", "TypeScript", "Vite", "Supabase", "AI"],
      link: "https://github.com/midhat81/Future-House",
      live: "https://future-house-ai.vercel.app",
      tag: "AI Visualization Platform"
    },
    {
      title: "Rythmiq",
      desc: "Proactive AI life assistant that analyzes weather, sleep, and energy data to generate personalized daily recommendations and smart activity plans with a premium mobile UI.",
      tech: ["React Native", "Expo", "TypeScript", "Node.js", "AI"],
      link: "https://github.com/midhat81/Rythmiq",
      live: "https://rythmiq-tau.vercel.app",
      tag: "AI Mobile Assistant"
    },
    {
      title: "HealthGrid AI",
      desc: "Real-time healthcare intelligence system for ambulance dispatch, hospital capacity tracking, patient flow monitoring, and live analytics dashboards.",
      tech: ["React", "TypeScript", "WebSockets", "Leaflet"],
      link: "https://github.com/midhat81/HealthGrid-AI",
      tag: "Real-Time System"
    },
    {
      title: "AlphaPulse AI",
      desc: "ML-powered stock intelligence system with real-time market streaming, predictive analytics, and portfolio insights.",
      tech: ["Python", "Rust", "Redis", "Next.js"],
      link: "https://github.com/midhat81/alphapulse-ai",
      tag: "ML Analytics System"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 tracking-tight">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {projects.map((project, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ scale: 1.03 }}
            className="p-6 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-sm hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-xl font-semibold">
              {project.title}
            </h3>

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

              <div className="flex gap-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-black text-white text-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.03]"
                >
                  GitHub
                </a>

                {"live" in project && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 text-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.03]"
                  >
                    Live
                  </a>
                )}
              </div>

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