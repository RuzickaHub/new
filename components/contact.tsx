"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Handle form submission
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@studio.com",
      href: "mailto:hello@studio.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#",
    },
  ]

  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal<HTMLDivElement>()
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div
            ref={leftRef}
            className={`space-y-8 transition-all duration-1000 ${
              leftVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Contact
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
                Let's start a conversation
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you as soon
                as possible.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 p-5 rounded-xl hover:bg-secondary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1 border border-transparent hover:border-accent/20"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <info.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{info.label}</div>
                    <div className="font-medium group-hover:text-accent transition-colors">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div
            ref={rightRef}
            className={`p-8 lg:p-10 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-1000 hover:shadow-2xl hover:shadow-accent/10 ${
              rightVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <div className="relative">
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className={`transition-all duration-300 ${
                      focusedField === "name" ? "ring-2 ring-accent/50 border-accent" : ""
                    }`}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className={`transition-all duration-300 ${
                      focusedField === "email" ? "ring-2 ring-accent/50 border-accent" : ""
                    }`}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <div className="relative">
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className={`transition-all duration-300 resize-none ${
                      focusedField === "message" ? "ring-2 ring-accent/50 border-accent" : ""
                    }`}
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full group hover:shadow-lg hover:shadow-accent/20 transition-all hover:scale-105"
              >
                Send Message
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
