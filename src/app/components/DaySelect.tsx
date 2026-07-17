"use client"

import React, { useState } from "react"

interface DaySelectProps {
  onChange?: (day: number) => void
  defaultValue?: number
}

export default function DaySelect({
  onChange,
  defaultValue = 1,
}: DaySelectProps) {
  const [selectedDay, setSelectedDay] = useState<number>(defaultValue)

  const days = Array.from({ length: 31 }, (_, i) => i + 1)

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value, 10)

    setSelectedDay(value)
    onChange?.(value)
  }

  return (
    <div className="w-full">
      <div className="relative group">
        <select
          id="day-select"
          value={selectedDay}
          onChange={handleChange}
          className="
            h-12
            w-full
            appearance-none
            rounded-xl
            border
            border-white/15
            bg-white/10
            px-4
            pr-11
            text-sm
            font-medium
            text-white
            backdrop-blur-xl
            outline-none
            transition-all
            duration-300

            hover:bg-white/15
            hover:border-white/25

            focus:border-cyan-400
            focus:bg-white/15
            focus:ring-4
            focus:ring-cyan-500/20
          "
        >
          {days.map((day) => (
            <option key={day} value={day} className="bg-slate-900 text-white">
              {day}
            </option>
          ))}
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
          <svg
            className="
              h-4
              w-4
              text-cyan-300
              transition-transform
              duration-300
              group-hover:translate-y-0.5
            "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
