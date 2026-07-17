export default function Footer() {
  return (
    <footer className="relative z-20 w-full border-t border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-6 text-center sm:flex-row sm:text-left">
        {/* Left */}

        <div className="flex items-center gap-2 text-sm text-slate-400">
          <span>Crafted with</span>

          <span className="animate-pulse text-red-400">❤️</span>

          <span>by</span>

          <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text font-semibold text-transparent">
            Your Nomi
          </span>
        </div>

        {/* Center */}

        <div className="hidden h-5 w-px bg-white/10 sm:block" />

        {/* Right */}

        <div className="space-y-1 text-center sm:text-right">
          <p className="text-xs tracking-[0.3em] uppercase text-slate-500">
            Private Experience
          </p>

          <p className="text-sm text-slate-400">
            Made for one special visitor ✨
          </p>
        </div>
      </div>
    </footer>
  )
}
