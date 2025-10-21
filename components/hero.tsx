"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useParallax } from "@/hooks/use-parallax"

export function Hero() {
  const parallaxOffset = useParallax(0.3)

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-30" />

      <div
        className="absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-3xl animate-pulse-slow gpu-accelerated"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          background: "radial-gradient(circle, var(--gradient-1) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse-slow gpu-accelerated"
        style={{
          transform: `translateY(${parallaxOffset * 0.5}px)`,
          animationDelay: "2s",
          background: "radial-gradient(circle, var(--gradient-2) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse-slow gpu-accelerated opacity-20"
        style={{
          animationDelay: "4s",
          background: "radial-gradient(circle, var(--gradient-3) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-foreground/90 mb-4 hover:bg-white/10 transition-all duration-300 hover-lift">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            New: Infinite possibilities
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-balance leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Build exceptional
            <br />
            <span className="gradient-text font-serif">digital experiences</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Transform your vision into reality with cutting-edge design and development solutions that drive results.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Button
              size="lg"
              className="rounded-full text-base px-8 group hover-lift bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/20"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full text-base px-8 glass hover:bg-white/10 hover-lift bg-transparent"
            >
              View Our Work
            </Button>
          </div>

          <div className="pt-12 animate-in fade-in duration-1000 delay-500">
            <p className="text-sm text-muted-foreground mb-6">Trusted by industry leaders</p>
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 opacity-60">
              {["Google", "Microsoft", "Amazon", "Meta", "Apple", "Netflix"].map((company, index) => (
                <div
                  key={company}
                  className="text-xl lg:text-2xl font-semibold hover:opacity-100 hover:text-accent transition-all duration-300 cursor-pointer hover-lift"
                  style={{
                    animationDelay: `${600 + index * 100}ms`,
                  }}
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hover:opacity-100 transition-opacity">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        </div>
      </div>
    </section>
  )
}
