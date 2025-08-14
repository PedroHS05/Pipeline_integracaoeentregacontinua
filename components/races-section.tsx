import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Flag } from "lucide-react"

export function RacesSection() {
  const upcomingRaces = [
    {
      name: "Grande Prêmio de São Paulo",
      location: "Interlagos, Brasil",
      flag: "🇧🇷",
      date: "2024-11-03",
      time: "14:00",
      laps: 71,
      distance: "305.909 km",
      image: "/interlagos-f1-aerial.png",
      status: "upcoming",
    },
    {
      name: "Grande Prêmio de Las Vegas",
      location: "Las Vegas, EUA",
      flag: "🇺🇸",
      date: "2024-11-23",
      time: "22:00",
      laps: 50,
      distance: "305.354 km",
      image: "/las-vegas-f1-night.png",
      status: "upcoming",
    },
    {
      name: "Grande Prêmio do Catar",
      location: "Lusail, Catar",
      flag: "🇶🇦",
      date: "2024-12-01",
      time: "17:00",
      laps: 57,
      distance: "308.611 km",
      image: "/placeholder.svg?height=200&width=400",
      status: "upcoming",
    },
    {
      name: "Grande Prêmio de Abu Dhabi",
      location: "Yas Marina, EAU",
      flag: "🇦🇪",
      date: "2024-12-08",
      time: "17:00",
      laps: 58,
      distance: "305.355 km",
      image: "/placeholder.svg?height=200&width=400",
      status: "season-finale",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-emerald-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif font-black text-4xl md:text-5xl text-gray-900 mb-4">Next on the Track</h2>
          <p className="font-sans text-xl text-gray-600 max-w-2xl mx-auto">
            As próximas corridas que definirão o campeonato mundial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcomingRaces.map((race, index) => (
            <Card key={index} className="hover-lift border-0 shadow-xl overflow-hidden bg-white">
              <div className="relative">
                <img src={race.image || "/placeholder.svg"} alt={race.name} className="w-full h-48 object-cover" />
                <div className="absolute top-4 left-4">
                  {race.status === "season-finale" ? (
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold">
                      🏁 Final da Temporada
                    </Badge>
                  ) : (
                    <Badge className="bg-emerald-600 text-white font-semibold">Próxima Corrida</Badge>
                  )}
                </div>
                <Badge className="absolute top-4 right-4 bg-white text-gray-900 font-semibold">{race.flag}</Badge>
              </div>

              <CardContent className="p-6">
                <h3 className="font-serif font-bold text-xl text-gray-900 mb-2">{race.name}</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-emerald-600" />
                    <span className="font-sans text-gray-600">{race.location}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    <span className="font-sans text-gray-600">
                      {new Date(race.date).toLocaleDateString("pt-BR", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-purple-600" />
                    <span className="font-sans text-gray-600">{race.time} (Horário local)</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Flag className="h-4 w-4 text-orange-600" />
                    <span className="font-sans text-gray-600">
                      {race.laps} voltas • {race.distance}
                    </span>
                  </div>
                </div>

                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
                  Ver Detalhes da Corrida
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-semibold px-8 bg-transparent"
          >
            Ver Calendário Completo
          </Button>
        </div>
      </div>
    </section>
  )
}
