"use client"

import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { ArrowUpRight } from "lucide-react"

export function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "/modern-ecommerce-website.png",
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Design",
      image: "/mobile-banking-app.png",
    },
    {
      title: "SaaS Dashboard",
      category: "UI/UX Design",
      image: "/saas-dashboard-analytics.jpg",
    },
    {
      title: "Brand Identity",
      category: "Branding",
      image: "/brand-identity-design.png",
    },
    {
      title: "Marketing Website",
      category: "Web Development",
      image: "/modern-marketing-website.png",
    },
    {
      title: "Fitness App",
      category: "Mobile Development",
      image: "/fitness-tracking-app-interface.png",
    },
  ]

  return (
    <section id="portfolio" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" />
      <div
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
            Our latest work
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore some of our recent projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <PortfolioCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PortfolioCard({ project, index }: { project: any; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.2,
  })

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-accent/10 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
            <ArrowUpRight className="w-8 h-8 text-accent-foreground" />
          </div>
        </div>
      </div>
      <div className="p-6 space-y-2 relative">
        <div className="text-sm text-accent font-medium">{project.category}</div>
        <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">{project.title}</h3>
      </div>
    </div>
  )
}
