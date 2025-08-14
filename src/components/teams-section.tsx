"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Calendar } from "lucide-react"

const teams = [
  {
    name: "Red Bull Racing",
    country: "Austria",
    founded: 2005,
    championships: 6,
    drivers: ["Max Verstappen", "Sergio Pérez"],
    color: "bg-blue-600",
    logo: "/images/redbull-logo.png",
    car: "/red-bull-f1-side.png",
  },
  {
    name: "Mercedes-AMG",
    country: "Germany",
    founded: 2010,
    championships: 8,
    drivers: ["Lewis Hamilton", "George Russell"],
    color: "bg-gray-800",
    logo: "/mercedes-amg-f1-logo.png",
    car: "/placeholder-6f9mp.png",
  },
  {
    name: "Scuderia Ferrari",
    country: "Italy",
    founded: 1950,
    championships: 16,
    drivers: ["Charles Leclerc", "Carlos Sainz Jr."],
    color: "bg-red-600",
    logo: "/ferrari-f1-logo.png",
    car: "/placeholder-cyk07.png",
  },
  {
    name: "McLaren",
    country: "United Kingdom",
    founded: 1966,
    championships: 8,
    drivers: ["Lando Norris", "Oscar Piastri"],
    color: "bg-orange-500",
    logo: "/mclaren-f1-logo.png",
    car: "/placeholder.svg?height=200&width=400",
  },
]

export function TeamsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-gray-100" data-testid="teams-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Constructor Teams</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The legendary teams that engineer speed and compete for championship glory
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {teams.map((team, index) => (
            <Card key={index} className="hover-lift border-0 shadow-xl bg-white overflow-hidden">
              <div className={`h-3 ${team.color}`}></div>
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <img
                        src={team.logo || "/placeholder.svg"}
                        alt={`${team.name} logo`}
                        className="h-12 w-auto mr-4"
                      />
                      <div>
                        <h3 className="text-2xl font-serif font-bold text-gray-900">{team.name}</h3>
                        <p className="text-gray-600">{team.country}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Trophy className="w-5 h-5 text-yellow-600 mr-1" />
                          <span className="text-2xl font-bold text-gray-900">{team.championships}</span>
                        </div>
                        <p className="text-sm text-gray-600">Championships</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Calendar className="w-5 h-5 text-emerald-600 mr-1" />
                          <span className="text-2xl font-bold text-gray-900">{team.founded}</span>
                        </div>
                        <p className="text-sm text-gray-600">Founded</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Users className="w-5 h-5 text-blue-600 mr-1" />
                          <span className="text-2xl font-bold text-gray-900">2</span>
                        </div>
                        <p className="text-sm text-gray-600">Drivers</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Current Drivers:</h4>
                      <div className="flex flex-wrap gap-2">
                        {team.drivers.map((driver, driverIndex) => (
                          <Badge key={driverIndex} variant="outline" className="text-sm">
                            {driver}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <img
                    src={team.car || "/placeholder.svg"}
                    alt={`${team.name} F1 car`}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
