import { render, screen } from "@testing-library/react"
import { HeroSection } from "@/src/components/hero-section"

describe("HeroSection", () => {
  it("renders the main heading", () => {
    render(<HeroSection />)

    const heading = screen.getByText("F1 RACING")
    expect(heading).toBeInTheDocument()
  })

  it("renders the subtitle", () => {
    render(<HeroSection />)

    const subtitle = screen.getByText("Feel the Rush of Formula 1")
    expect(subtitle).toBeInTheDocument()
  })

  it("renders the explore button", () => {
    render(<HeroSection />)

    const button = screen.getByTestId("explore-button")
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent("Explore the Grid")
  })

  it("has proper accessibility attributes", () => {
    render(<HeroSection />)

    const button = screen.getByTestId("explore-button")
    expect(button).toHaveAttribute("type", "button")
  })
})
