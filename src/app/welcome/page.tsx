"use client"

import { motion } from "framer-motion"
import { Gift, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"

export default function WelcomePage() {
  const router = useRouter()

  return (
    <main className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-[#050816] px-6">
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0ea5e955,transparent_45%)]" />

      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[170px]" />

      {/* Floating Orbs */}

      <motion.div
        animate={{
          y: [-15, 15, -15],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
        }}
        className="absolute left-1/4 top-32 h-5 w-5 rounded-full bg-cyan-300 shadow-[0_0_30px_#67e8f9]"
      />

      <motion.div
        animate={{
          y: [20, -20, 20],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="absolute right-1/4 bottom-28 h-4 w-4 rounded-full bg-sky-400 shadow-[0_0_30px_#38bdf8]"
      />

      {/* Card */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="relative w-full max-w-3xl rounded-[36px] border border-white/10 bg-white/10 p-8 md:p-14 backdrop-blur-3xl"
      >
        {/* Sparkle */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "linear",
          }}
          className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-cyan-500/20"
        >
          <Sparkles className="h-12 w-12 text-cyan-300" />
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
          }}
          className="mt-8 text-center text-4xl font-black uppercase tracking-[.18em] text-white md:text-6xl"
        >
          Welcome
        </motion.h1>

        <motion.div
          initial={{
            width: 0,
          }}
          animate={{
            width: 120,
          }}
          transition={{
            delay: 0.5,
          }}
          className="mx-auto mt-6 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        />

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
          }}
          className="mx-auto mt-8 max-w-xl text-center text-base leading-8 text-slate-300 md:text-lg"
        >
          Congratulations...
          <br />
          You are officially the only person who managed to unlock this
          mysterious door.
          <br />
          <br />
          Beyond this point lies something made especially for you.
        </motion.p>

        {/* CTA */}

        <motion.button
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.97,
          }}
          onClick={() => router.push("/surprise")}
          className="group relative mx-auto mt-14 flex h-16 w-full max-w-sm items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-lg font-semibold text-white shadow-[0_20px_50px_rgba(14,165,233,.35)]"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

          <span className="relative flex items-center gap-3">
            <Gift className="h-6 w-6" />
            Open Your Surprise
          </span>
        </motion.button>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.2,
          }}
          className="mt-10 text-center text-xs uppercase tracking-[.35em] text-slate-500"
        >
          A Memory Awaits...
        </motion.p>
      </motion.div>
    </main>
  )
}
