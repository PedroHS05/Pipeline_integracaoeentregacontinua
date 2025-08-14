"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Users, Flag, Clock } from "lucide-react"

const stats = [
  {
    icon: Trophy,
    value: "23",
    label: "Races per Season",
    description: "Grand Prix events worldwide",
  },
  {
    icon: Users,
    value: "20",
    label: "Drivers",
    description: "Elite racing professionals",
  },
  {
    icon: Flag,
    value: "10",
    label: "Teams",
    description: "Constructor championships",
  },
  {
    icon: Clock,
    value: "370+",
    label: "KM/H",
    description: "Maximum speed achieved",
  },
]

export function StatsSection() {
  return (
    <section className="py-20 px-4 bg-white" data-testid="stats-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">By the Numbers</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The incredible statistics that define Formula 1 racing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover-lift border-0 shadow-lg bg-gradient-to-br from-gray-50 to-white">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
                  <stat.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <div className="text-4xl font-serif font-black text-gray-900 mb-2">{stat.value}</div>
                <div className="text-lg font-sans font-semibold text-emerald-600 mb-2">{stat.label}</div>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
