import { Button } from "@/components/ui/button"
import { Trophy, Zap, Timer } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800">
      {/* Background F1 car image */}
      <div className="absolute inset-0 opacity-20">
        <img src="/f1-racing-motion.png" alt="F1 Car Background" className="w-full h-full object-cover" />
      </div>

      {/* Animated racing stripes */}
      <div className="absolute inset-0 opacity-10">
        <div className="race-animation absolute top-1/4 w-2 h-32 bg-white transform rotate-12"></div>
        <div
          className="race-animation absolute top-1/2 w-2 h-24 bg-white transform rotate-12"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="race-animation absolute top-3/4 w-2 h-20 bg-white transform rotate-12"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-serif font-black text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight">
          Feel the Rush of
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
            Formula 1
          </span>
        </h1>

        <p className="font-sans text-xl md:text-2xl mb-8 text-emerald-100 max-w-2xl mx-auto leading-relaxed">
          Dive into the world of speed, stats, and the stars of the track
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold px-8 py-3 text-lg">
            <Trophy className="mr-2 h-5 w-5" />
            Ver Pilotos
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-emerald-700 font-semibold px-8 py-3 text-lg bg-transparent"
          >
            <Zap className="mr-2 h-5 w-5" />
            Próximas Corridas
          </Button>
        </div>

        {/* Speed indicators */}
        <div className="flex justify-center items-center gap-8 text-emerald-200">
          <div className="flex items-center gap-2">
            <Timer className="h-5 w-5" />
            <span className="font-mono text-lg">0-100km/h em 2.6s</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-emerald-400"></div>
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            <span className="font-mono text-lg">Velocidade máxima: 372km/h</span>
          </div>
        </div>
      </div>
    </section>
  )
}
