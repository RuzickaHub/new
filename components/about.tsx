"use client"

import { Sparkles, Target, Zap } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function About() {
  const features = [
    {
      icon: Sparkles,
      title: "Innovation First",
      description: "We push boundaries and explore new technologies to deliver cutting-edge solutions.",
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "Every project is focused on achieving measurable outcomes and exceeding expectations.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Rapid development cycles without compromising on quality or attention to detail.",
    },
  ]

  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal<HTMLDivElement>()
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div
            ref={titleRef}
            className={`space-y-6 transition-all duration-1000 ${
              titleVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium">
              About Us
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-tight">
              Crafting digital excellence since 2014
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a team of passionate designers, developers, and strategists dedicated to creating exceptional
              digital experiences. Our mission is to transform ideas into powerful solutions that drive growth and
              innovation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over a decade of experience, we've helped hundreds of businesses establish their digital presence and
              achieve their goals through thoughtful design and robust technology.
            </p>
          </div>

          <div
            ref={contentRef}
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              contentVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1 cursor-pointer group"
                style={{
                  transitionDelay: contentVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
