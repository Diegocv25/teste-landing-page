"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function Logo({ className = "" }: { className?: string }) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const bgColor = mounted && resolvedTheme === "dark" ? "#1e293b" : "#f8fafc"
  const strokeColor = "#f97316"

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <rect width="32" height="32" rx="8" fill={bgColor} className="transition-colors duration-300" />
        <path
          d="M8 12L16 8L24 12V20L16 24L8 20V12Z"
          stroke={strokeColor}
          strokeWidth="2"
          fill="none"
        />
        <path d="M16 8V24" stroke={strokeColor} strokeWidth="2" />
        <path d="M8 12L24 20" stroke={strokeColor} strokeWidth="2" />
        <path d="M24 12L8 20" stroke={strokeColor} strokeWidth="2" />
        <circle cx="16" cy="16" r="3" fill={strokeColor} />
      </svg>
      <span className="text-xl font-bold tracking-tight text-foreground">
        Nexus <span className="text-accent">Automações</span>
      </span>
    </div>
  )
}
