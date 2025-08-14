import { HeroSection } from "@/src/components/hero-section"
import { DriversSection } from "@/src/components/drivers-section"
import { TeamsSection } from "@/src/components/teams-section"
import { RacesSection } from "@/src/components/races-section"
import { StatsSection } from "@/src/components/stats-section"

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
