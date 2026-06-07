"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto">

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
        Full Stack Engineer • Backend Systems • AI Applications
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed"
      >
        Full Stack Engineer with 7+ years of experience building scalable web
        applications, distributed systems, AI-powered platforms, and real-time
        architectures using React, Next.js, FastAPI, Django, Node.js, and modern AI tooling.
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
          href="https://www.linkedin.com/in/muhammadmidhat81"
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