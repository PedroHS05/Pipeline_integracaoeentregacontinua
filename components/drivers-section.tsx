import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Target } from "lucide-react"

export function DriversSection() {
  const drivers = [
    {
      name: "Max Verstappen",
      team: "Red Bull Racing",
      country: "🇳🇱",
      wins: 53,
      podiums: 99,
      fastestLaps: 29,
      image: "/f1-driver-portrait.png",
      teamColor: "bg-blue-600",
    },
    {
      name: "Lewis Hamilton",
      team: "Mercedes",
      country: "🇬🇧",
      wins: 103,
      podiums: 197,
      fastestLaps: 67,
      image: "/lewis-hamilton-mercedes-portrait.png",
      teamColor: "bg-gray-800",
    },
    {
      name: "Charles Leclerc",
      team: "Ferrari",
      country: "🇲🇨",
      wins: 5,
      podiums: 29,
      fastestLaps: 9,
      image: "/charles-leclerc-ferrari.png",
      teamColor: "bg-red-600",
    },
    {
      name: "Lando Norris",
      team: "McLaren",
      country: "🇬🇧",
      wins: 1,
      podiums: 13,
      fastestLaps: 7,
      image: "/lando-norris-portrait.png",
      teamColor: "bg-orange-500",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif font-black text-4xl md:text-5xl text-gray-900 mb-4">Meet the Champions</h2>
          <p className="font-sans text-xl text-gray-600 max-w-2xl mx-auto">
            Os pilotos mais rápidos do mundo competindo pela glória
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {drivers.map((driver, index) => (
            <Card key={index} className="hover-lift border-0 shadow-xl overflow-hidden bg-white">
              <div className="relative">
                <img src={driver.image || "/placeholder.svg"} alt={driver.name} className="w-full h-64 object-cover" />
                <div className={`absolute top-4 left-4 w-4 h-4 rounded-full ${driver.teamColor}`}></div>
                <Badge className="absolute top-4 right-4 bg-white text-gray-900 font-semibold">{driver.country}</Badge>
              </div>

              <CardContent className="p-6">
                <h3 className="font-serif font-bold text-xl text-gray-900 mb-1">{driver.name}</h3>
                <p className="font-sans text-gray-600 mb-4">{driver.team}</p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Trophy className="h-4 w-4 text-yellow-600" />
                      <span className="font-sans text-sm text-gray-600">Vitórias</span>
                    </div>
                    <span className="font-serif font-bold text-gray-900">{driver.wins}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-purple-600" />
                      <span className="font-sans text-sm text-gray-600">Pódios</span>
                    </div>
                    <span className="font-serif font-bold text-gray-900">{driver.podiums}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-emerald-600" />
                      <span className="font-sans text-sm text-gray-600">Voltas Rápidas</span>
                    </div>
                    <span className="font-serif font-bold text-gray-900">{driver.fastestLaps}</span>
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
