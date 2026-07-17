"use client"

import React, { useMemo, useState } from "react"

interface YearSelectProps {
  onChange?: (year: number) => void
  minAge?: number
  maxAge?: number
  defaultOffset?: number
}

export default function YearSelect({
  onChange,
  minAge = 18,
  maxAge = 35,
  defaultOffset = 20,
}: YearSelectProps) {
  const currentYear = new Date().getFullYear()

  const years = useMemo(() => {
    const startYear = currentYear - minAge
    const endYear = currentYear - maxAge

    const list: number[] = []

    for (let year = startYear; year >= endYear; year--) {
      list.push(year)
    }

    return list
  }, [currentYear, minAge, maxAge])

  const fallbackDefault = currentYear - defaultOffset

  const initialValue = years.includes(fallbackDefault)
    ? fallbackDefault
    : years[0]

  const [selectedYear, setSelectedYear] = useState<number>(initialValue)

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(event.target.value)

    setSelectedYear(value)
    onChange?.(value)
  }

  return (
    <div className="w-full">
      <div className="group relative">
        <select
          id="year-select"
          value={selectedYear}
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
          {years.map((year) => (
            <option key={year} value={year} className="bg-slate-900 text-white">
              {year}
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
