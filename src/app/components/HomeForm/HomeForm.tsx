"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import toast from "react-hot-toast"
import DaySelect from "../DaySelect"
import MonthSelect from "../MonthSelect"
import YearSelect from "../YearSelect"
import IdentityScanner from "../IdentityScanner"

type Status = "connecting" | "scanning" | "success" | "failed"

type StepStatus = "pending" | "loading" | "success" | "failed"

export default function HomeForm() {
  const router = useRouter()

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const [dob, setDob] = useState({
    day: 1,
    month: 0,
    seccondMonth: 0,
    year: 2008,
  })

  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState<Status>("connecting")
  const [currentStep, setCurrentStep] = useState(0)

  const [stepStatus, setStepStatus] = useState<StepStatus[]>([
    "pending",
    "pending",
    "pending",
  ])

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))

  const startDemo = async () => {
    const verificatonSuccess =
      firstName.trim().toLowerCase() === "farzana" &&
      lastName.trim().toLocaleLowerCase() === "islam" &&
      dob.day === 18 &&
      dob.month === 5 &&
      dob.seccondMonth === 6 &&
      dob.year === 2002

    setOpen(true)
    setStatus("connecting")
    setCurrentStep(0)

    setStepStatus(["loading", "pending", "pending"])

    const response = await fetch("/api/visitor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        enteredDay: dob.day,
        enteredMonth: dob.month,
        enteredSecondMonth: dob.seccondMonth,
        enteredYear: dob.year,

        passedAuthentication: verificatonSuccess,
      }),
    })
    if (!response.ok) {
      console.log("something went wrong")
      console.log(response)
    }
    const jsonData = await response.json()
    console.log(jsonData)

    await sleep(1200)

    setStatus("scanning")

    // Step 1
    setCurrentStep(1)
    setStepStatus(["success", "loading", "pending"])

    await sleep(1200)

    // Step 2
    setCurrentStep(2)
    setStepStatus([
      "success",
      verificatonSuccess ? "success" : "failed",
      "loading",
    ])

    await sleep(1200)

    // Step 3
    setCurrentStep(3)
    setStepStatus([
      "success",
      verificatonSuccess ? "success" : "failed",
      verificatonSuccess ? "success" : "failed",
    ])

    await sleep(1200)

    if (verificatonSuccess) {
      setStatus("success")
    } else {
      setStatus("failed")
    }

    await sleep(4000)

    setOpen(false)
    setFirstName("")
    setLastName("")
    setDob({
      day: 1,
      month: 0,
      seccondMonth: 0,
      year: 2008,
    })
    setStepStatus(["pending", "pending", "pending"])
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!firstName || !lastName) {
      toast.error("Please enter your name.")
      return
    }

    startDemo()
  }

  return (
    <main className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-5 py-10 sm:px-6 md:py-14">
      {/* Background */}
      <Image
        src="/main-bg.jpg"
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/75" />

      {/* Blue Glow */}
      <div className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[150px]" />

      {/* Extra Blur */}
      <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-blue-600/20 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 w-full max-w-3xl"
      >
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-10 text-center"
        >
          <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-[10px] sm:text-xs text-xs font-medium uppercase tracking-[.35em] text-cyan-300 backdrop-blur-xl">
            Private Entrance
          </span>

          <h1 className="mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-[.12em] md:tracking-[.22em] text-white ">
            The Mystery Door
          </h1>

          <div className="mx-auto mt-5 h-px w-28 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          <p className="mx-auto mt-6 max-w-xl text-sm sm:text-base md:text-lg leading-8 text-slate-300">
            There is only one person this place was made for.
            <br />
            If you are that person...
            <span className="block mt-2 text-cyan-300">
              answer a few questions and step inside.
            </span>
          </p>
        </motion.div>

        {/* Glass Card */}

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="
          rounded-2xl md:rounded-4xl
          border
          border-white/15
          bg-white/10
          p-5 sm:p-6 md:p-8
          shadow-[0_25px_80px_rgba(0,0,0,.45)]
          backdrop-blur-2xl
          "
        >
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />

            <p className="text-xs uppercase tracking-[.35em] text-cyan-300">
              Identity Verification
            </p>

            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* First Name */}

            <div>
              <label className="mb-2 block text-xs sm:text-sm font-medium text-slate-300">
                Your First Name
              </label>

              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                className="
                h-12 sm:h-13
                w-full
                rounded-xl
                border
                border-white/15
                bg-white/10
                px-4
                text-white
                placeholder:text-slate-400
                backdrop-blur-xl
                outline-none
                transition-all
                duration-300
                focus:border-cyan-400
                focus:bg-white/15
                focus:ring-4
                focus:ring-cyan-500/20
                "
              />
            </div>

            {/* Last Name */}

            <div>
              <label className="mb-2 block text-xs sm:text-sm font-medium text-slate-300">
                Your Last Name
              </label>

              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                className="
              h-12 sm:h-13
                w-full
                rounded-xl
                border
                border-white/15
                bg-white/10
                px-4
                text-white
                placeholder:text-slate-400
                backdrop-blur-xl
                outline-none
                transition-all
                duration-300
                focus:border-cyan-400
                focus:bg-white/15
                focus:ring-4
                focus:ring-cyan-500/20
                "
              />
            </div>

            {/* Day */}

            <div>
              <label className="mb-2 block text-xs sm:text-sm font-medium text-slate-300">
                Birth Day
              </label>

              <DaySelect
                onChange={(d) =>
                  setDob((prev) => ({
                    ...prev,
                    day: d,
                  }))
                }
              />
            </div>

            {/* Month */}

            <div>
              <label className="mb-2 block text-xs sm:text-smfont-medium text-slate-300">
                Birthday Month
              </label>

              <MonthSelect
                id="birthday-month"
                defaultValue={0}
                onChange={(m) =>
                  setDob((prev) => ({
                    ...prev,
                    month: m,
                  }))
                }
              />
            </div>

            {/* Second Celebration Month */}

            <div>
              <label className="mb-2 block text-xs sm:text-sm font-medium text-slate-300">
                Second Celebration 😉
              </label>

              <MonthSelect
                id="second-month"
                defaultValue={0}
                onChange={(m) =>
                  setDob((prev) => ({
                    ...prev,
                    seccondMonth: m,
                  }))
                }
              />
            </div>

            {/* Year */}

            <div>
              <label className="mb-2 block text-xs sm:text-sm font-medium text-slate-300">
                Birth Year
              </label>

              <YearSelect
                onChange={(y) =>
                  setDob((prev) => ({
                    ...prev,
                    year: y,
                  }))
                }
              />
            </div>
          </div>

          {/* Divider */}

          <div className="my-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />

            <span className="text-xs uppercase tracking-[.35em] text-slate-400">
              Ready?
            </span>

            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Submit */}

          <button
            type="submit"
            className="
            group
            relative
            flex
    h-12 sm:h-14
            w-full
            items-center
            justify-center
            overflow-hidden
            rounded-2xl
            bg-gradient-to-r
            from-cyan-500
            via-sky-500
            to-blue-600
            text-sm sm:text-base
            font-semibold
            tracking-wide
            text-white
            shadow-[0_15px_40px_rgba(14,165,233,.35)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-[0_20px_60px_rgba(14,165,233,.45)]
            active:translate-y-0
            active:scale-[0.98]
            "
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <span className="relative flex items-center gap-3">
              Unlock The Door
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </button>

          <p className="mt-8 text-center text-sm leading-7 text-slate-400">
            This place wasn't built for everyone.
          </p>
        </motion.form>

        {/* Bottom Glow */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mx-auto mt-8 h-px w-40 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        />
      </motion.div>
      <IdentityScanner
        stepStatus={stepStatus}
        open={open}
        status={status}
        currentStep={currentStep}
      />
    </main>
  )
}
