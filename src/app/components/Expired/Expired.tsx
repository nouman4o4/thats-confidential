"use client"

import { motion } from "framer-motion"
import { Lock, Clock3 } from "lucide-react"
import Image from "next/image"

export default function ExpiredPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0f1117] lg:px-6 text-white">
      {/* Background */}

      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3b0d1c40,transparent_45%)]" />

      <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-900/20 blur-[180px]" /> */}
      <div className="absolute inset-0">
        <Image
          src="/dark-bg.jpg"
          width={600}
          height={400}
          alt="bg"
          className="h-full object-cover"
        />
      </div>
      {/* Floating Glow */}

      {/* <motion.div
        animate={{
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="absolute h-80 w-80 rounded-full bg-rose-500/10 blur-[120px]"
      /> */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto w-full max-w-3xl lg:rounded-[40px] border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur md:p-14"
      >
        {/* Icon */}

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/5">
          <Clock3 className="h-12 w-12 text-rose-300" />
        </div>

        {/* Heading */}

        <h1 className="mt-10 text-center text-4xl font-black md:text-6xl">
          You're Late...
        </h1>

        <div className="mx-auto mt-6 h-px w-40 bg-gradient-to-r from-transparent via-rose-300 to-transparent" />

        {/* Message */}

        <div className="mt-10 space-y-7 text-center text-lg leading-9 text-zinc-300 md:text-xl">
          <p>This website wasn't meant to stay here forever.</p>

          <p>
            It was a small birthday surprise... created especially for
            <span className="font-semibold text-rose-300"> 18th July.</span>
          </p>

          <p>
            It quietly waited until
            <span className="font-semibold text-rose-300"> 20th July, </span>
            hoping its only visitor would open it.
          </p>

          <p>But... that moment never came.</p>

          <p>
            So just like birthdays, this little surprise has now become
            <span className="italic text-rose-300"> a memory.</span>
          </p>

          <p className="pt-4 text-base text-zinc-500">
            This page has now been archived.
            <br />
            Only the administrator can access it.
          </p>
        </div>

        {/* Bottom */}

        <div className="mt-14 flex items-center justify-center gap-3 text-zinc-500">
          <Lock className="h-5 w-5" />
          <span className="text-sm tracking-[0.25em] uppercase">
            ACCESS CLOSED
          </span>
        </div>
      </motion.div>
    </main>
  )
}
