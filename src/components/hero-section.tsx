"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-slate-900 to-black">
      {/* Background racing pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-full h-1 bg-white transform -skew-y-12"></div>
        <div className="absolute top-1/2 left-0 w-full h-1 bg-white transform -skew-y-12"></div>
        <div className="absolute top-3/4 left-0 w-full h-1 bg-white transform -skew-y-12"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Zap className="w-12 h-12 text-emerald-400 mr-4" />
          <h1 className="text-6xl md:text-8xl font-serif font-black text-white tracking-tight">F1 RACING</h1>
        </div>

        <h2 className="text-2xl md:text-4xl font-sans font-semibold text-emerald-400 mb-8">
          Feel the Rush of Formula 1
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Dive into the world of speed, stats, and the stars of the track. Experience the adrenaline of Formula 1
          racing.
        </p>

        <Button
          size="lg"
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 text-lg hover-lift"
          data-testid="explore-button"
        >
          Explore the Grid
          <ChevronRight className="ml-2 w-5 h-5" />
        </Button>
      </div>

      {/* Racing car animation */}
      <div className="absolute bottom-20 left-0 w-full overflow-hidden">
        <div className="race-animation">
          <div className="w-16 h-8 bg-emerald-500 rounded-lg shadow-lg"></div>
        </div>
      </div>
    </section>
  )
}
