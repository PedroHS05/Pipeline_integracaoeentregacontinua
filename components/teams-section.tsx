import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Car, Users, Trophy } from "lucide-react"

export function TeamsSection() {
  const teams = [
    {
      name: "Red Bull Racing",
      country: "Áustria",
      flag: "🇦🇹",
      championships: 6,
      drivers: ["Max Verstappen", "Sergio Pérez"],
      color: "bg-blue-600",
      image: "/red-bull-rb19-on-track.png",
      founded: 2005,
    },
    {
      name: "Mercedes-AMG",
      country: "Alemanha",
      flag: "🇩🇪",
      championships: 8,
      drivers: ["Lewis Hamilton", "George Russell"],
      color: "bg-gray-800",
      image: "/mercedes-w14-silver.png",
      founded: 2010,
    },
    {
      name: "Scuderia Ferrari",
      country: "Itália",
      flag: "🇮🇹",
      championships: 16,
      drivers: ["Charles Leclerc", "Carlos Sainz"],
      color: "bg-red-600",
      image: "/ferrari-sf23-on-track.png",
      founded: 1950,
    },
    {
      name: "McLaren",
      country: "Reino Unido",
      flag: "🇬🇧",
      championships: 8,
      drivers: ["Lando Norris", "Oscar Piastri"],
      color: "bg-orange-500",
      image: "/mclaren-f1-mcl60-orange-track.png",
      founded: 1966,
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif font-black text-4xl md:text-5xl mb-4">The Power Behind the Speed</h2>
          <p className="font-sans text-xl text-gray-300 max-w-2xl mx-auto">
            As equipes que constroem as máquinas mais rápidas do mundo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teams.map((team, index) => (
            <Card key={index} className="hover-lift border-0 shadow-2xl overflow-hidden bg-gray-800 text-white">
              <div className="relative">
                <img
                  src={team.image || "/placeholder.svg"}
                  alt={`${team.name} F1 Car`}
                  className="w-full h-48 object-cover"
                />
                <div className={`absolute top-4 left-4 w-6 h-6 rounded-full ${team.color}`}></div>
                <Badge className="absolute top-4 right-4 bg-white text-gray-900 font-semibold">
                  {team.flag} {team.country}
                </Badge>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif font-bold text-2xl">{team.name}</h3>
                  <span className="font-sans text-sm text-gray-400">Desde {team.founded}</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    <span className="font-sans text-gray-300">{team.championships} Campeonatos de Construtores</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-blue-400" />
                    <div className="font-sans text-gray-300">
                      <span className="block">Pilotos 2024:</span>
                      <span className="text-white font-semibold">{team.drivers.join(" • ")}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Car className="h-5 w-5 text-emerald-400" />
                    <span className="font-sans text-gray-300">Tecnologia de ponta em aerodinâmica</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
