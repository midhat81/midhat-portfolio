"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto">

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-blue-500 font-medium mb-3"
      >
        Senior Full Stack Engineer
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-bold tracking-tight"
      >
        Muhammad Midhat
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-xl mt-4 text-gray-700 dark:text-gray-300"
      >
        AI Systems • Backend Architecture • Distributed Systems
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl"
      >
        I build scalable backend systems, AI-powered applications,
        and real-time architectures using Node.js, Python, and modern tools.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8 flex gap-4"
      >
        <a className="px-5 py-2 bg-black text-white rounded-xl hover:scale-105 transition">
          View Projects
        </a>

        <a href="https://github.com/midhat81" className="px-5 py-2 border rounded-xl hover:scale-105 transition">
          GitHub
        </a>
      </motion.div>

    </section>
  );
}