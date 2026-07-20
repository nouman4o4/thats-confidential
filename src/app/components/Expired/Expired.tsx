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
        className="relative mx-auto w-full max-w-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur lg:rounded-[40px] md:p-14"
      >
        {/* Icon */}

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/5">
          <Clock3 className="h-12 w-12 text-rose-300" />
        </div>

        {/* Heading */}

        <h1 className="mt-10 text-center text-4xl font-black md:text-6xl">
          You Missed It...
        </h1>

        <div className="mx-auto mt-6 h-px w-40 bg-gradient-to-r from-transparent via-rose-300 to-transparent" />

        {/* Message */}

        <div className="mt-10 space-y-7 text-center text-lg leading-9 text-zinc-300 md:text-xl">
          <p>There was once a little surprise here.</p>

          <p>
            It wasn't made for everyone...
            <br />
            It was created for
            <span className="font-semibold text-rose-300">
              {" "}
              one special person
            </span>
            , with excitement, hours of work, and a hope that it would be opened
            on
            <span className="font-semibold text-rose-300">
              {" "}
              when the moment was just right.
            </span>
          </p>

          <p>
            It stayed here quietly until
            <span className="font-semibold text-rose-300">
              {" "}
              20th July,
            </span>{" "}
            patiently waiting for that one visitor.
          </p>

          <p>
            But...
            <br />
            that moment never came.
          </p>

          <p>
            Some moments are only beautiful because they happen at the right
            time.
            <br />
            This was one of them.
          </p>

          <p className="font-medium italic text-rose-300">
            "Some gifts lose their magic when they're opened too late."
          </p>

          <p className="pt-4 text-base leading-8 text-zinc-500">
            This little corner of the internet has now been archived.
            <br />
            The celebration is over, and only the administrator can access it
            now.
          </p>
        </div>

        {/* Bottom */}

        <div className="mt-14 flex items-center justify-center gap-3 text-zinc-500">
          <Lock className="h-5 w-5" />
          <span className="text-sm uppercase tracking-[0.25em]">
            ACCESS CLOSED
          </span>
        </div>
      </motion.div>
    </main>
  )
}
