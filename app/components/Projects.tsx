export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 tracking-tight">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {/* AdGenie AI */}
        <div className="p-6 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition">
          <h3 className="text-xl font-semibold">
            AdGenie AI
          </h3>

          <p className="mt-2 text-gray-600 dark:text-gray-300">
            AI-powered video ad generation platform featuring automated script
            generation, voice synthesis, asynchronous video rendering, payment
            processing, and scalable worker architecture.
          </p>

          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <span className="px-2 py-1 rounded-full bg-black text-white">
              NestJS
            </span>
            <span className="px-2 py-1 rounded-full bg-black text-white">
              TypeScript
            </span>
            <span className="px-2 py-1 rounded-full bg-black text-white">
              React Native
            </span>
            <span className="px-2 py-1 rounded-full bg-black text-white">
              Redis
            </span>
          </div>

          <div className="mt-5 flex items-center justify-between">
            <a
              href="https://github.com/midhat81/Adgenie-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-xl bg-black text-white hover:scale-105 transition"
            >
              GitHub
            </a>

            <span className="text-xs text-gray-500 dark:text-gray-400">
              AI SaaS Platform
            </span>
          </div>
        </div>

        {/* TravelAgent AI */}
        <div className="p-6 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition">
          <h3 className="text-xl font-semibold">
            TravelAgent AI
          </h3>

          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Multi-agent travel platform with intent classification, specialist
            AI agents, offline RAG pipeline, local LLM integration, and
            real-time WebSocket communication.
          </p>

          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <span className="px-2 py-1 rounded-full bg-black text-white">
              Node.js
            </span>
            <span className="px-2 py-1 rounded-full bg-black text-white">
              TypeScript
            </span>
            <span className="px-2 py-1 rounded-full bg-black text-white">
              Ollama
            </span>
            <span className="px-2 py-1 rounded-full bg-black text-white">
              WebSockets
            </span>
          </div>

          <div className="mt-5 flex items-center justify-between">
            <a
              href="https://github.com/midhat81/TravelAgent-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-xl bg-black text-white hover:scale-105 transition"
            >
              GitHub
            </a>

            <span className="text-xs text-gray-500 dark:text-gray-400">
              Multi-Agent System
            </span>
          </div>
        </div>

        {/* HealthGrid AI */}
        <div className="p-6 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition">
          <h3 className="text-xl font-semibold">
            HealthGrid AI
          </h3>

          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Real-time healthcare intelligence platform featuring ambulance
            dispatch automation, hospital capacity monitoring, patient flow
            tracking, and live analytics dashboards.
          </p>

          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <span className="px-2 py-1 rounded-full bg-black text-white">
              React
            </span>
            <span className="px-2 py-1 rounded-full bg-black text-white">
              TypeScript
            </span>
            <span className="px-2 py-1 rounded-full bg-black text-white">
              Leaflet
            </span>
            <span className="px-2 py-1 rounded-full bg-black text-white">
              WebSockets
            </span>
          </div>

          <div className="mt-5 flex items-center justify-between">
            <a
              href="https://github.com/midhat81/HealthGrid-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-xl bg-black text-white hover:scale-105 transition"
            >
              GitHub
            </a>

            <span className="text-xs text-gray-500 dark:text-gray-400">
              Real-Time Platform
            </span>
          </div>
        </div>

        {/* AlphaPulse AI */}
        <div className="p-6 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition">
          <h3 className="text-xl font-semibold">
            AlphaPulse AI
          </h3>

          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Stock intelligence platform combining machine learning predictions,
            real-time market streaming, portfolio analytics, and AI-powered
            financial insights.
          </p>

          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <span className="px-2 py-1 rounded-full bg-black text-white">
              Rust
            </span>
            <span className="px-2 py-1 rounded-full bg-black text-white">
              Python
            </span>
            <span className="px-2 py-1 rounded-full bg-black text-white">
              Redis
            </span>
            <span className="px-2 py-1 rounded-full bg-black text-white">
              Next.js
            </span>
          </div>

          <div className="mt-5 flex items-center justify-between">
            <a
              href="https://github.com/midhat81/alphapulse-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-xl bg-black text-white hover:scale-105 transition"
            >
              GitHub
            </a>

            <span className="text-xs text-gray-500 dark:text-gray-400">
              ML Analytics System
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}