"use client"

import { Code, Palette, Rocket, Search, Smartphone, Globe } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function Services() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and best practices.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love to interact with.",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Improve your visibility and rank higher in search engine results.",
    },
    {
      icon: Rocket,
      title: "Digital Strategy",
      description: "Comprehensive planning to achieve your business objectives online.",
    },
    {
      icon: Globe,
      title: "Brand Identity",
      description: "Create a memorable brand that resonates with your target audience.",
    },
  ]

  return (
    <section id="services" className="py-20 lg:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
            Everything you need to succeed online
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From concept to launch, we provide comprehensive services to bring your digital vision to life.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index }: { service: any; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.2,
  })

  return (
    <div
      ref={ref}
      className={`group p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2 cursor-pointer ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
        <service.icon className="w-7 h-7 text-accent" />
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
    </div>
  )
}
