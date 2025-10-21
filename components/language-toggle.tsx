"use client"

import { useState, useEffect } from "react"

export function LanguageToggle() {
  const [language, setLanguage] = useState<"en" | "cs">("en")

  useEffect(() => {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem("language") as "en" | "cs" | null
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "cs" : "en"
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
    // In a real app, this would trigger i18n language change
  }

  return (
    <button
      onClick={toggleLanguage}
      className="relative w-10 h-10 rounded-full bg-muted hover:bg-accent transition-all duration-300 flex items-center justify-center group overflow-hidden"
      aria-label={`Switch to ${language === "en" ? "Czech" : "English"}`}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <span
          className={`absolute text-xs font-bold text-foreground transition-all duration-300 ${
            language === "en" ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-0 rotate-180"
          }`}
        >
          EN
        </span>
        <span
          className={`absolute text-xs font-bold text-foreground transition-all duration-300 ${
            language === "cs" ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-0 -rotate-180"
          }`}
        >
          CS
        </span>
      </div>
      <span className="absolute inset-0 rounded-full ring-2 ring-transparent group-hover:ring-primary/20 group-focus-visible:ring-primary transition-all duration-300" />
    </button>
  )
}
