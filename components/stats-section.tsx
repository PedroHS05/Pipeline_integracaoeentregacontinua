import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Calendar, Trophy } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: Trophy,
      value: "23",
      label: "Corridas por Temporada",
      color: "text-emerald-600",
    },
    {
      icon: Users,
      value: "20",
      label: "Pilotos Ativos",
      color: "text-purple-600",
    },
    {
      icon: Calendar,
      value: "10",
      label: "Equipes Competindo",
      color: "text-orange-600",
    },
    {
      icon: TrendingUp,
      value: "372",
      label: "Velocidade Máxima (km/h)",
      color: "text-red-600",
    },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif font-black text-4xl md:text-5xl text-gray-900 mb-4">F1 em Números</h2>
          <p className="font-sans text-xl text-gray-600 max-w-2xl mx-auto">
            Estatísticas que mostram a grandeza da Fórmula 1
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="hover-lift border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-6 text-center">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4 ${stat.color}`}
                >
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="font-serif font-black text-3xl text-gray-900 mb-2">{stat.value}</div>
                <div className="font-sans text-gray-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
