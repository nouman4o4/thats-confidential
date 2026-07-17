"use client"

import React, { useState } from "react"

interface MonthSelectProps {
  onChange?: (monthIndex: number) => void
  defaultValue?: number
  id: string
}

export default function MonthSelect({
  onChange,
  defaultValue,
  id,
}: MonthSelectProps) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const currentMonthIndex = defaultValue ?? new Date().getMonth()

  const [selectedMonth, setSelectedMonth] = useState<number>(currentMonthIndex)

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value, 10)

    setSelectedMonth(value)
    onChange?.(value)
  }

  return (
    <div className="w-full">
      <div className="group relative">
        <select
          id={id}
          value={selectedMonth}
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

            hover:border-white/25
            hover:bg-white/15

            focus:border-cyan-400
            focus:bg-white/15
            focus:ring-4
            focus:ring-cyan-500/20
          "
        >
          {months.map((month, index) => (
            <option
              key={month}
              value={index}
              className="bg-slate-900 text-white"
            >
              {month}
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
