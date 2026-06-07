export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">

      <h2 className="text-3xl font-bold mb-10 tracking-tight">
        Experience
      </h2>

      <div className="space-y-8">

        {/* Current Role */}
        <div className="p-6 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-sm hover:shadow-xl transition">
          <h3 className="text-xl font-semibold">
            Founding Engineer — Yovu Travel
          </h3>
          <p className="text-gray-500">
            Jan 2026 – Present | Remote
          </p>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            First engineering hire building a 0→1 AI travel platform.
            Responsible for supplier onboarding systems, partner dashboards,
            AI-driven workflows, and full-stack architecture using React,
            Next.js, and TypeScript.
          </p>
        </div>

        {/* Freelance */}
        <div className="p-6 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-sm hover:shadow-xl transition">
          <h3 className="text-xl font-semibold">
            Full Stack / Backend Engineer (Freelance)
          </h3>
          <p className="text-gray-500">
            2022 – Present | Remote
          </p>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            Built production-grade APIs using FastAPI, Django, and Node.js.
            Developed CRM/ERP systems, webhook integrations, real-time services,
            and backend automation pipelines.
          </p>
        </div>

        {/* ML Engineer */}
        <div className="p-6 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-sm hover:shadow-xl transition">
          <h3 className="text-xl font-semibold">
            Machine Learning Engineer — Inoviks Soft Solutions
          </h3>
          <p className="text-gray-500">
            2019 – 2024
          </p>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            Built AI pipelines for OCR, chatbots, and computer vision systems.
            Exposed ML models via REST APIs and optimized inference performance
            for production systems.
          </p>
        </div>

        {/* Early Career */}
        <div className="p-6 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-sm hover:shadow-xl transition">
          <h3 className="text-xl font-semibold">
            C# Developer — Early Career
          </h3>
          <p className="text-gray-500">
            2016 – 2018
          </p>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            Built desktop applications with backend business logic,
            data validation systems, and enterprise software tools.
          </p>
        </div>

      </div>
    </section>
  );
}