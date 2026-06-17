"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto overflow-hidden">

      {/* 🌈 Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-[-100px] w-[400px] h-[400px] bg-blue-400/30 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-purple-400/30 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] bg-cyan-300/20 blur-3xl rounded-full animate-pulse"></div>
      </div>

      {/* Top Badge */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-blue-500 font-medium mb-3"
      >
        Founding Engineer @ Yovu Travel
      </motion.p>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-7xl font-bold tracking-tight"
      >
        Muhammad Midhat
      </motion.h1>

      {/* Role */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-xl md:text-2xl mt-4 text-gray-700 dark:text-gray-300"
      >
        Senior Full Stack Engineer • AI Systems Engineer • Backend Architect
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed"
      >
        I design and build production-grade web applications, AI-powered systems,
        and scalable backend architectures using React, Next.js, Python, FastAPI,
        Django, Node.js, and modern LLM-based AI workflows.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8 flex flex-wrap gap-4"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-black text-white rounded-xl hover:scale-105 transition"
        >
          View Projects
        </a>

        <a
          href="https://github.com/midhat81"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border rounded-xl hover:scale-105 transition"
        >
          GitHub
        </a>

        <a
          href="www.linkedin.com/in/muhammadmidhat81"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border rounded-xl hover:scale-105 transition"
        >
          LinkedIn
        </a>
      </motion.div>

    </section>
  );
}