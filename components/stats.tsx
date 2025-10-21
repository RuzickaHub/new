"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { useEffect, useState } from "react"

export function Stats() {
  const stats = [
    { value: 500, suffix: "+", label: "Projects Completed", company: "Worldwide" },
    { value: 98, suffix: "%", label: "Client Satisfaction", company: "Rating" },
    { value: 50, suffix: "+", label: "Team Members", company: "Experts" },
    { value: 10, suffix: "+", label: "Years Experience", company: "Industry" },
  ]

  return (
    <section className="py-20 lg:py-32 border-y border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({ stat, index }: { stat: any; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.5 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = stat.value / steps
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      if (currentStep <= steps) {
        setCount(Math.min(Math.floor(increment * currentStep), stat.value))
      } else {
        clearInterval(timer)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isVisible, stat.value])

  return (
    <div
      ref={ref}
      className={`text-center lg:text-left space-y-2 border-l-0 lg:border-l border-border pl-0 lg:pl-8 first:border-l-0 first:pl-0 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="text-4xl lg:text-5xl font-bold text-accent tabular-nums">
        {count}
        {stat.suffix}
      </div>
      <div className="text-base font-medium text-foreground">{stat.label}</div>
      <div className="text-sm text-muted-foreground">{stat.company}</div>
    </div>
  )
}
