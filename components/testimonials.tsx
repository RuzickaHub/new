"use client"

import { Star } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content:
        "Working with this team was an absolute pleasure. They delivered beyond our expectations and the results speak for themselves.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Founder, GrowthLabs",
      content:
        "The attention to detail and commitment to quality is unmatched. Our new platform has transformed how we do business.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, Innovate Co",
      content:
        "From strategy to execution, every step was handled professionally. The team truly understands modern digital experiences.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 animate-gradient" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
            What our clients say
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial, index }: { testimonial: any; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.2,
  })

  return (
    <div
      ref={ref}
      className={`p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2 cursor-pointer group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div className="flex gap-1 mb-6">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 fill-accent text-accent transition-transform duration-300 group-hover:scale-110"
            style={{ transitionDelay: `${i * 50}ms` }}
          />
        ))}
      </div>
      <p className="text-lg leading-relaxed mb-6 text-balance">{testimonial.content}</p>
      <div className="space-y-1">
        <div className="font-semibold group-hover:text-accent transition-colors">{testimonial.name}</div>
        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
      </div>
    </div>
  )
}
