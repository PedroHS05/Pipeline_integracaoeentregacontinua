"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Flag } from "lucide-react"

const upcomingRaces = [
  {
    name: "Monaco Grand Prix",
    location: "Monte Carlo, Monaco",
    date: "2024-05-26",
    time: "15:00 CET",
    round: 8,
    status: "upcoming",
    image: "/placeholder.svg?height=200&width=350",
    flag: "🇲🇨",
  },
  {
    name: "Canadian Grand Prix",
    location: "Montreal, Canada",
    date: "2024-06-09",
    time: "14:00 EDT",
    round: 9,
    status: "upcoming",
    image: "/placeholder.svg?height=200&width=350",
    flag: "🇨🇦",
  },
  {
    name: "Spanish Grand Prix",
    location: "Barcelona, Spain",
    date: "2024-06-23",
    time: "15:00 CEST",
    round: 10,
    status: "upcoming",
    image: "/placeholder.svg?height=200&width=350",
    flag: "🇪🇸",
  },
  {
    name: "Austrian Grand Prix",
    location: "Spielberg, Austria",
    date: "2024-06-30",
    time: "15:00 CEST",
    round: 11,
    status: "upcoming",
    image: "/placeholder.svg?height=200&width=350",
    flag: "🇦🇹",
  },
]

const recentResults = [
  {
    name: "Miami Grand Prix",
    winner: "Max Verstappen",
    team: "Red Bull Racing",
    date: "2024-05-05",
    round: 6,
  },
  {
    name: "Emilia Romagna Grand Prix",
    winner: "Max Verstappen",
    team: "Red Bull Racing",
    date: "2024-05-19",
    round: 7,
  },
]

export function RacesSection() {
  return (
    <section className="py-20 px-4 bg-white" data-testid="races-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Race Calendar</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Follow the championship battle across iconic circuits worldwide
          </p>
        </div>

        {/* Upcoming Races */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-serif font-bold text-gray-900">Upcoming Races</h3>
            <Button variant="outline" className="hidden md:flex bg-transparent">
              View Full Calendar
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingRaces.map((race, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src={race.image || "/placeholder.svg"}
                    alt={`${race.name} circuit`}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-emerald-500 text-white">
                      Round {race.round}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 text-2xl">{race.flag}</div>
                </div>

                <CardContent className="p-6">
                  <h4 className="text-lg font-serif font-bold text-gray-900 mb-2">{race.name}</h4>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {race.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(race.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {race.time}
                    </div>
                  </div>

                  <Button size="sm" className="w-full bg-emerald-500 hover:bg-emerald-600">
                    Race Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Results */}
        <div>
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8">Recent Results</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentResults.map((result, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-serif font-bold text-gray-900">{result.name}</h4>
                      <p className="text-sm text-gray-600">
                        Round {result.round} • {new Date(result.date).toLocaleDateString()}
                      </p>
                    </div>
                    <Badge variant="outline">Completed</Badge>
                  </div>

                  <div className="flex items-center">
                    <Flag className="w-5 h-5 text-yellow-500 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900">{result.winner}</p>
                      <p className="text-sm text-emerald-600">{result.team}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
