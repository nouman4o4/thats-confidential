"use client"

import { useWindowSize } from "@uidotdev/usehooks"
import { motion } from "framer-motion"
import { Sparkles, Gift } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import ReactConfetti from "react-confetti"

export default function GiftPage() {
  const [musicOn, setMusicOn] = useState(false)
  const { width, height } = useWindowSize()

  useEffect(() => {
    // 1. Create the instance (Watch out for the typo in 'mucis.mp3'!)
    const music = new Audio("/audio/birthday.mp3")
    music.loop = true
    music.volume = 0.4

    // 2. Play the track
    // music
    //   .play()
    //   .then(() => setMusicOn(true))
    //   .catch((err) => {
    //     console.log("Autoplay blocked by browser:", err)
    //     setMusicOn(false)
    //   })

    // 3. CRITICAL CLEANUP: Stops music when component dies
    return () => {
      music.pause()
    }
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 z-9999">
        <ReactConfetti
          width={width ?? 0}
          height={height ?? 0}
          recycle={true}
          numberOfPieces={150}
          gravity={0.018}
          tweenDuration={3000}
        />
      </div>
      <div className="fixed inset-0">
        <Image
          src="/birthday-bg.jpg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-pink-200/30 blur-[180px]" />

      <div className="absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-rose-300/30 blur-[180px]" />

      <div className="absolute left-1/3 bottom-20 h-72 w-72 rounded-full bg-fuchsia-300/20 blur-[150px]" />
      {/* Floating Sparkles */}

      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-15, 15, -15],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + Math.random() * 4,
            delay: Math.random() * 3,
          }}
          className="absolute"
          style={{
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
          }}
        >
          <Sparkles className="h-4 w-4 text-white/70" />
        </motion.div>
      ))}

      <section className="relative border-b-4 border-gray-300/50 mx-auto flex min-h-dvh max-w-5xl flex-col items-center justify-center px-6 py-20">
        {/* Title */}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm uppercase tracking-[0.45em] text-pink-100"
        >
          Meri jaan
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-center text-5xl font-black leading-tight md:text-7xl"
        >
          Happy Birthday
          <br />
          <span className="text-pink-500">Farzana</span> ❤️
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 max-w-2xl text-center text-lg leading-8 text-white/90"
        >
          Wherever you go, you radiate positivity and warmth. Your day should be
          beautiful and bright—just like you. Happy birthday and cheers to many
          more adventures!
        </motion.p>

        {/* Scroll Indicator */}

        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.6,
          }}
          className="mt-20 flex flex-col items-center gap-3"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-white/70">
            Scroll
          </p>

          <div className="h-10 w-6 rounded-full border-2 border-white/50 p-1">
            <motion.div
              animate={{
                y: [0, 14, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="h-2 w-2 rounded-full bg-white"
            />
          </div>
        </motion.div>
      </section>

      {/* Gift */}

      <section className="relative border-b-4 border-gray-300/50 mx-auto flex min-h-dvh w-full max-w-7xl items-center px-6 py-24">
        {/* Background Blur */}

        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-300/20 blur-[180px]" />

        <div className="relative grid w-full items-center gap-16 lg:grid-cols-[420px_1fr]">
          {/* Image */}

          <div className="relative mx-auto">
            <div className="absolute inset-0 rounded-[40px] bg-pink-400/30 blur-3xl" />

            <Image
              src="/birthdaygirl.jpg"
              alt="birthdayGirl"
              width={420}
              height={620}
              className="relative aspect-[4/6] w-[280px] rounded-[40px] object-cover shadow-[0_25px_80px_rgba(255,120,170,.35)] md:w-[340px] lg:w-[420px]"
            />

            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/30 bg-white/25 px-5 py-2 text-sm font-medium text-white backdrop-blur-xl">
              🌸 Birthday Girl 🌸
            </div>
          </div>

          {/* Content */}

          <div className="relative">
            <span className="mb-5 inline-flex rounded-full border border-pink-300 bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
              💌 A Little Message
            </span>

            <h2 className="mt-4 text-4xl font-black leading-tight text-pink-700 md:text-6xl">
              Hello,
              <br />
              Farzana ❤️
            </h2>

            <div className="relative mt-10 rounded-[35px] border border-white/40 bg-white/55 p-8 shadow-2xl backdrop-blur-xl md:p-10">
              {/* Decorative Quote */}

              <span className="absolute left-6 top-3 text-7xl font-serif text-pink-200">
                “
              </span>

              <p className="relative pt-6 text-lg leading-9 text-zinc-700 md:text-xl">
                Kesi ho tum?
                <br />
                Kitne din ho gaye hamare beech koi baat hi nahi hui...
                <br />
                <br />
                Tum soch rahi hogi,
                <span className="font-semibold text-pink-600">
                  {" "}
                  "ab ye kya drama hai?"
                </span>
                <br />
                Itne din koi khabar nahi... aur achanak ye surprise.
                <br />
                <br />
                Sach kahun... mujhe khud bhi nahi pata.
                <br />
                Shayad tumse itne din door rehne ki wajah se...
                <span className="font-semibold text-pink-600">
                  {" "}
                  mera pyaar aur bhi badh gaya.
                </span>
                ❤️
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* memory */}
      <section className="relative border-b-4 border-gray-300/50 mx-auto flex min-h-dvh w-full max-w-7xl items-center px-6 py-24">
        {/* Background Glow */}

        <div className="absolute right-0 top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 rounded-full bg-rose-300/20 blur-[170px]" />

        <div className="relative grid w-full items-center gap-16 lg:grid-cols-[1fr_420px]">
          {/* Content */}

          <div>
            <span className="inline-flex rounded-full border border-rose-300 bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-700">
              📸 A Beautiful Memory
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-rose-700 md:text-6xl">
              Do You Remember...
              <br />
              Those Days? 🌸
            </h2>

            <div className="relative mt-10 rounded-[30px] border border-white/50 bg-white/60 p-8 shadow-2xl backdrop-blur-xl md:p-10">
              <span className="absolute left-6 top-3 text-7xl font-serif text-rose-200">
                “
              </span>

              <p className="relative pt-6 text-lg leading-9 text-zinc-700 md:text-xl">
                Yaad hai?
                <br />
                Kitne hafton tak tum mujhse naraz rehti thi...
                <br />
                <br />
                Ghussa hoke reply bhi nahi karti thi.
                <br />
                Sach kahun toh us waqt kaafi dard hota tha...
                <span className="text-2xl"> 😄</span>
                <br />
                <br />
                Baad mein khud realise hota tha ke...
                <span className="font-semibold text-rose-600">
                  {" "}
                  galti meri hi hoti thi.
                </span>
                <br />
                <br />
                Lekin jo bhi tha... hamare beech jo bhi waqt guzra, woh bohot
                khoobsurat tha.
                <br />
                <br />
                <span className="font-semibold text-rose-600">
                  Aur sach kahun...
                  <br />
                  I'm still missing those days.
                </span>
                ❤️
              </p>
            </div>
          </div>

          {/* Image */}

          <div className="relative mx-auto">
            {/* Glow */}

            <div className="absolute inset-0 rounded-[40px] bg-rose-400/30 blur-3xl" />

            <Image
              src="/memory.jpeg"
              alt="memory"
              width={420}
              height={620}
              className="relative aspect-[8/6] w-[280px] rounded-[30px] border-4 border-white object-cover shadow-[0_30px_90px_rgba(255,120,170,.4)] transition duration-500 hover:rotate-2 hover:scale-[1.02] md:w-[340px] lg:w-[420px]"
            />

            {/* Floating Tag */}

            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/40 bg-white/30 px-6 py-2 text-sm font-medium text-white backdrop-blur-xl">
              💖 One Of My Favorite Memories
            </div>

            {/* Tape Effect */}

            <div className="absolute -left-5 top-6 h-5 w-10 rotate-[-18deg] rounded bg-white/70 backdrop-blur-sm" />

            <div className="absolute -right-5 bottom-12 h-5 w-10 rotate-[15deg] rounded bg-white/70 backdrop-blur-sm" />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-32">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-100/10 to-pink-200/10" />

        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-300/20 blur-[180px]" />

        <div className="relative mx-auto max-w-4xl">
          <div className="rounded-[20px] border border-white/40 bg-white/60 p-8 shadow-[0_25px_80px_rgba(255,120,170,.15)] backdrop-blur-2xl md:p-14">
            <span className="inline-flex rounded-full border border-pink-300 bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
              ❤️ One Last Thing...
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-pink-700 md:text-5xl">
              Before You Leave...
            </h2>

            <div className="mt-10 space-y-7 text-lg leading-9 text-zinc-700 md:text-xl">
              <p>
                Shayad waqt ne ham dono ko alag raaston par laa kar khara kar
                diya. Zindagi bhi ajeeb hai... kab kis se milaye aur kab door
                kar de, kisi ko nahi pata.
              </p>

              <p>
                Lekin ek baat aaj bhi waise hi hai...
                <span className="font-semibold text-pink-600">
                  {" "}
                  Main tumhe bohot miss karta hoon.
                </span>
                Kabhi kisi gaane mein, kabhi kisi yaad mein, aur kabhi bina kisi
                wajah ke tum achanak yaad aa jaati ho.
              </p>

              <p>
                Aur pata nahi kyun... Dil ke kisi kone mein aaj bhi ek chhota sa
                ehsaas rehta hai ke
                <span className="font-semibold text-pink-600">
                  {" "}
                  shayad tum bhi kabhi na kabhi mujhe miss karti hogi.
                </span>
                Shayad main ghalat hoon... ya shayad nahi. Bas ye ek ehsaas hai
                jo kabhi gaya hi nahi.
              </p>

              <p>
                Mujhe tumse kisi jawab ki umeed nahi... Na kisi shikayat ka
                hisaab chahiye... Bas itna chahta tha ke is khaas din par tumhe
                ye bata doon ke
                <span className="font-semibold text-pink-600">
                  {" "}
                  tum meri zindagi ka ek bohot khoobsurat hissa rahi ho...
                </span>
                aur shayad hamesha rahogi.
              </p>

              <div className="pt-8">
                <p className="text-center text-2xl font-bold text-pink-700">
                  Happy Birthday, Farzana ❤️
                </p>

                <p className="mt-2 text-center text-zinc-500">
                  — With lots of prayers & best wishes,
                  <br />
                  <span className="block text-right font-semibold text-pink-600">
                    Nomi
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="relative border-b-4 border-gray-300/50 flex min-h-dvh flex-col items-center justify-center px-6">
        <motion.div
          animate={{
            y: [-10, 10, -10],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full bg-white/40 blur-3xl" />

          <div className="relative flex h-44 w-44 items-center justify-center rounded-[40px] bg-gradient-to-br from-pink-500 via-rose-500 to-fuchsia-600 shadow-[0_35px_100px_rgba(255,70,150,.5)]">
            <Gift className="h-20 w-20 text-white" />
          </div>
        </motion.div>

        <h2 className="mt-14 text-center text-3xl font-bold">
          This Gift Is Yours
        </h2>

        <p className="mt-6 max-w-xl text-center text-lg leading-8 text-white/90">
          Inside this little gift are memories, emotions, and a few things I
          wanted to say on your special day.
        </p>

        <button className="mt-14 rounded-2xl bg-white px-10 py-4 text-lg font-semibold text-pink-600 shadow-xl transition hover:scale-105 active:scale-95">
          Open My Gift 🎁
        </button>
      </section> */}
      <section className="relative overflow-hidden px-6 py-32">
        {/* Background Glow */}

        <div className="absolute inset-0 bg-gradient-to-b from-pink-100/20 via-pink-200/20 to-pink-300/30" />

        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-300/30 blur-[180px]" />

        <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
          {/* Flower */}

          <div className="mb-8 text-6xl md:text-7xl">🌸</div>

          {/* Heading */}

          <h2 className="text-4xl font-black text-white md:text-6xl">
            Happy Birthday
          </h2>

          <p className="mt-3 text-xl font-semibold text-pink-100 md:text-2xl">
            Farzana ❤️
          </p>

          {/* Cake */}

          <div className="relative mt-12">
            <div className="absolute inset-0 rounded-full bg-pink-300/40 blur-3xl" />

            <Image
              src="/cake.png" // Replace with your cake image
              alt="Birthday Cake"
              width={350}
              height={350}
              className="relative w-64 drop-shadow-[0_25px_50px_rgba(255,255,255,.25)] md:w-80"
            />
          </div>

          {/* Message */}

          <p className="mt-12 max-w-2xl text-lg leading-9 text-white/90 md:text-xl">
            May your life always be filled with happiness, beautiful moments,
            and endless reasons to smile.
            <br />
            <br />
            Enjoy your day, eat lots of cake, and never stop being the amazing
            person you are. 🎂✨
          </p>

          {/* Divider */}

          <div className="my-14 h-px w-40 bg-gradient-to-r from-transparent via-white to-transparent" />

          {/* Final Line */}

          <p className="text-xl italic text-pink-100 md:text-2xl">
            "Some people leave memories...
            <br />
            You became one."
          </p>

          {/* Signature */}

          <div className="mt-16">
            <p className="text-sm uppercase tracking-[0.5em] text-pink-200">
              Made With Love
            </p>

            <p className="mt-3 text-3xl font-bold text-white">— Nomi 🤍</p>
          </div>
        </div>
      </section>
    </main>
  )
}
