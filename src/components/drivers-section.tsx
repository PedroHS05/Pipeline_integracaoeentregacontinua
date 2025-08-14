"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Flag } from "lucide-react"

const drivers = [
  {
    name: "Max Verstappen",
    team: "Red Bull Racing",
    number: 1,
    nationality: "Netherlands",
    championships: 3,
    wins: 54,
    image: "/max-verstappen-portrait.png",
    teamColor: "bg-blue-600",
  },
  {
    name: "Lewis Hamilton",
    team: "Mercedes",
    number: 44,
    nationality: "United Kingdom",
    championships: 7,
    wins: 103,
    image: "/lewis-hamilton-portrait.png",
    teamColor: "bg-gray-800",
  },
  {
    name: "Charles Leclerc",
    team: "Ferrari",
    number: 16,
    nationality: "Monaco",
    championships: 0,
    wins: 5,
    image: "/charles-leclerc-portrait.png",
    teamColor: "bg-red-600",
  },
  {
    name: "Lando Norris",
    team: "McLaren",
    number: 4,
    nationality: "United Kingdom",
    championships: 0,
    wins: 1,
    image: "/lando-norris-portrait.png",
    teamColor: "bg-orange-500",
  },
]

export function DriversSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black" data-testid="drivers-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Elite Drivers</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Meet the fearless pilots who push the limits of speed and precision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {drivers.map((driver, index) => (
            <Card
              key={index}
              className="hover-lift border-0 shadow-2xl bg-gradient-to-b from-gray-800 to-gray-900 overflow-hidden"
            >
              <div className={`h-2 ${driver.teamColor}`}></div>
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={driver.image || "/placeholder.svg"}
                    alt={`${driver.name} - F1 Driver`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="text-lg font-bold px-3 py-1">
                      #{driver.number}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-white mb-2">{driver.name}</h3>
                  <p className="text-emerald-400 font-semibold mb-1">{driver.team}</p>
                  <p className="text-gray-400 text-sm mb-4">{driver.nationality}</p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Trophy className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="text-2xl font-bold text-white">{driver.championships}</span>
                      </div>
                      <p className="text-xs text-gray-400">Championships</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Flag className="w-4 h-4 text-emerald-500 mr-1" />
                        <span className="text-2xl font-bold text-white">{driver.wins}</span>
                      </div>
                      <p className="text-xs text-gray-400">Race Wins</p>
                    </div>
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
