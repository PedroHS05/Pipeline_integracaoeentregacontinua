import { HeroSection } from "@/components/hero-section"
import { DriversSection } from "@/components/drivers-section"
import { TeamsSection } from "@/components/teams-section"
import { RacesSection } from "@/components/races-section"
import { StatsSection } from "@/components/stats-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <HeroSection />
      <StatsSection />
      <DriversSection />
      <TeamsSection />
      <RacesSection />
    </main>
  )
}
