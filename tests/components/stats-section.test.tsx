import { render, screen } from "@testing-library/react"
import { StatsSection } from "@/src/components/stats-section"

describe("StatsSection", () => {
  it("renders the section heading", () => {
    render(<StatsSection />)

    const heading = screen.getByText("By the Numbers")
    expect(heading).toBeInTheDocument()
  })

  it("renders all statistics cards", () => {
    render(<StatsSection />)

    expect(screen.getByText("23")).toBeInTheDocument()
    expect(screen.getByText("20")).toBeInTheDocument()
    expect(screen.getByText("10")).toBeInTheDocument()
    expect(screen.getByText("370+")).toBeInTheDocument()
  })

  it("renders stat labels correctly", () => {
    render(<StatsSection />)

    expect(screen.getByText("Races per Season")).toBeInTheDocument()
    expect(screen.getByText("Drivers")).toBeInTheDocument()
    expect(screen.getByText("Teams")).toBeInTheDocument()
    expect(screen.getByText("KM/H")).toBeInTheDocument()
  })

  it("has proper test id for section", () => {
    render(<StatsSection />)

    const section = screen.getByTestId("stats-section")
    expect(section).toBeInTheDocument()
  })
})
