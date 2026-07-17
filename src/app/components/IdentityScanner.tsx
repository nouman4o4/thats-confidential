"use client"

import { AnimatePresence, motion } from "framer-motion"
import {
  CheckCircle2,
  LoaderCircle,
  ScanSearch,
  ShieldAlert,
  ShieldCheck,
  XCircle,
} from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
type StepStatus = "pending" | "loading" | "success" | "failed"

interface IdentityScannerProps {
  open: boolean
  status: "connecting" | "scanning" | "success" | "failed"
  currentStep: number
  stepStatus: StepStatus[]
}

const steps = [
  "Establishing secure connection...",
  "Scanning identity...",
  "Verifying celebration month...",
]

export default function IdentityScanner({
  open,
  status,
  currentStep,
  stepStatus,
}: IdentityScannerProps) {
  const router = useRouter()
  useEffect(() => {
    if (status !== "success") return

    const setCookie = async () => {
      const res = await fetch("/api/auth/verify", {
        method: "POST",
      })

      if (!res.ok) {
        console.error("Failed to set authentication cookie")
        return
      }

      router.push("/surprise")
    }

    setCookie()
  }, [status, router])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/80 backdrop-blur-xl px-5"
        >
          {/* Background Glow */}

          <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[160px]" />

          {/* Card */}

          <motion.div
            initial={{
              scale: 0.9,
              opacity: 0,
              y: 25,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.45,
            }}
            className="
              relative
              w-full
              max-w-lg
              overflow-hidden
              rounded-none
              md:rounded-[30px]
              border
              border-white/10
              bg-white/10
              p-8
              shadow-[0_20px_80px_rgba(0,0,0,.45)]
              backdrop-blur-3xl
            "
          >
            {/* Decorative Border */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            {/* Icon */}
            <div className="flex justify-center">
              {status === "success" ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="rounded-full bg-cyan-500/20 p-5"
                >
                  <ShieldCheck className="h-14 w-14 text-cyan-300" />
                </motion.div>
              ) : status === "failed" ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="rounded-full bg-red-500/20 p-5"
                >
                  <ShieldAlert className="h-14 w-14 text-red-400" />
                </motion.div>
              ) : (
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="rounded-full bg-cyan-500/15 p-5"
                >
                  <ScanSearch className="h-14 w-14 text-cyan-300" />
                </motion.div>
              )}
            </div>
            {/* Heading */}
            <div className="mt-7 text-center">
              <h2 className="text-3xl font-bold tracking-wide text-white">
                {status === "connecting" && "Connecting"}
                {status === "scanning" && "Identity Scanner"}
                {status === "success" && "Identity Confirmed"}
                {status === "failed" && "Access Denied"}
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                {status === "success" &&
                  "Welcome back. Preparing your surprise..."}

                {status === "failed" && "Identity could not be verified."}

                {(status === "connecting" || status === "scanning") &&
                  "Please wait while our system verifies your identity."}
              </p>
            </div>
            {/* Progress */}
            {(status === "connecting" || status === "scanning") && (
              <div className="mt-10 space-y-4">
                {steps.map((step, index) => {
                  const active = currentStep === index
                  const completed = currentStep > index

                  return (
                    <motion.div
                      key={step}
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.08,
                      }}
                      className="flex items-center gap-4"
                    >
                      {stepStatus[index] === "success" ? (
                        <CheckCircle2 className="h-5 w-5 text-green-400" />
                      ) : stepStatus[index] === "failed" ? (
                        <XCircle className="h-5 w-5 text-red-400" />
                      ) : stepStatus[index] === "loading" ? (
                        <LoaderCircle className="h-5 w-5 animate-spin text-cyan-300" />
                      ) : (
                        <div className="h-5 w-5 rounded-full border border-white/20" />
                      )}

                      <span
                        className={`text-sm transition-all ${
                          stepStatus[index] === "success"
                            ? "text-green-300"
                            : stepStatus[index] === "failed"
                              ? "text-red-300"
                              : stepStatus[index] === "loading"
                                ? "text-white"
                                : "text-slate-500"
                        }`}
                      >
                        {step}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            )}{" "}
            {/* Success */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-10 rounded-none md:rounded-2xl border border-cyan-400/30 bg-cyan-500/10 p-6 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                  }}
                  className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500/20"
                >
                  <CheckCircle2 className="h-12 w-12 text-cyan-300" />
                </motion.div>

                <h3 className="text-xl font-semibold text-cyan-300">
                  Identity Confirmed
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Welcome{" "}
                  <span className="font-semibold text-cyan-200 uppercase">
                    Farzana 🥰
                  </span>
                  <br />
                  Preparing your birthday experience...
                </p>

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 2,
                  }}
                  className="mx-auto mt-7 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500"
                />
              </motion.div>
            )}
            {/* Failed */}
            {status === "failed" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-10 rounded  md:rounded-2xl border border-red-500/30 bg-red-500/10 p-6 text-center"
              >
                <motion.div
                  initial={{ rotate: -15, scale: 0.5 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 160,
                  }}
                  className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-red-500/20"
                >
                  <ShieldAlert className="h-12 w-12 text-red-400" />
                </motion.div>

                <h3 className="text-xl font-semibold text-red-400">
                  Access Denied
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  We couldn't verify your identity.
                  <br />
                  This place wasn't built for you.
                </p>

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 2,
                  }}
                  className="mx-auto mt-7 h-1 rounded-full bg-gradient-to-r from-red-500 via-red-400 to-red-600"
                />
              </motion.div>
            )}
            {/* Footer */}
            <div className="mt-10 border-t border-white/10 pt-5 text-center">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                Secure Vault Protocol
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
