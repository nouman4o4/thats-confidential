"use client"

import { motion } from "framer-motion"
import { ChevronDown, Sparkles } from "lucide-react"

export default function BirthdayPage() {
  return (
    <main className="relative overflow-x-hidden bg-gradient-to-b from-[#fff5f8] via-[#ffe6ee] to-[#ffd6e5] text-[#6d214f]">
      {/* ================= Background ================= */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[35rem] w-[35rem] -translate-x-1/2 rounded-full bg-pink-300/30 blur-[170px]" />

        <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-rose-300/20 blur-[130px]" />

        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-fuchsia-300/20 blur-[180px]" />
      </div>

      {/* Floating Sparkles */}

      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 4 + i * 0.2,
            delay: i * 0.2,
          }}
          className="absolute"
          style={{
            top: `${10 + Math.random() * 80}%`,
            left: `${Math.random() * 100}%`,
          }}
        >
          <Sparkles className="h-4 w-4 text-pink-300" />
        </motion.div>
      ))}

      {/* ================= HERO ================= */}

      <section className="relative flex min-h-dvh flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-6 text-sm font-semibold uppercase tracking-[0.55em] text-pink-500"
        >
          Happy Birthday
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-black leading-none md:text-8xl"
        >
          Farzana
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 140 }}
          transition={{ delay: 0.6 }}
          className="mt-8 h-1 rounded-full bg-gradient-to-r from-pink-400 to-rose-500"
        />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-10 max-w-2xl text-lg leading-9 text-[#7a3d62] md:text-xl"
        >
          Today isn't just another day.
          <br />
          It's the celebration of someone who deserves happiness, beautiful
          moments, and countless reasons to smile.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [0, 12, 0],
          }}
          transition={{
            delay: 1.8,
            repeat: Infinity,
            duration: 1.8,
          }}
          className="absolute bottom-12 flex flex-col items-center gap-3"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-pink-500">
            Scroll
          </p>

          <ChevronDown className="h-7 w-7 text-pink-500" />
        </motion.div>
      </section>

      {/* ================= WISHES ================= */}

      <section className="relative mx-auto flex min-h-dvh max-w-6xl items-center px-6 py-24">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Stay Happy ❤️",
              desc: "May your smile always stay brighter than today.",
            },
            {
              title: "Keep Shining ✨",
              desc: "Never stop believing in yourself. You're stronger than you know.",
            },
            {
              title: "Enjoy Every Moment 🌸",
              desc: "May this year bring peace, success, laughter and beautiful memories.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-pink-200 bg-white/60 p-8 shadow-xl backdrop-blur-xl"
            >
              <h3 className="text-2xl font-bold">{item.title}</h3>

              <p className="mt-5 leading-8 text-[#7a3d62]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= LETTER PREVIEW ================= */}

      <section className="relative flex min-h-dvh items-center justify-center px-6 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl rounded-[40px] bg-white/70 p-10 shadow-2xl backdrop-blur-xl md:p-16"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-pink-500">
            A Little Note
          </p>

          <h2 className="mt-5 text-4xl font-black">Before you continue...</h2>

          <p className="mt-8 text-lg leading-9 text-[#7a3d62]">
            I wanted this birthday to feel a little different. Not just another
            message... but something you could open, explore, and hopefully
            remember.
            <br />
            <br />
            Keep scrolling. The best part is still waiting below.
          </p>
        </motion.div>
      </section>
    </main>
  )
}
