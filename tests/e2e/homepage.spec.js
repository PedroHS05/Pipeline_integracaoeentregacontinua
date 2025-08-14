const { test, expect } = require("@playwright/test")

test.describe("Homepage", () => {
  test("should load and display main content", async ({ page }) => {
    await page.goto("/")

    // Check if the main heading is visible
    await expect(page.getByText("F1 RACING")).toBeVisible()

    // Check if the hero section is present
    await expect(page.getByText("Feel the Rush of Formula 1")).toBeVisible()

    // Check if the explore button is clickable
    const exploreButton = page.getByTestId("explore-button")
    await expect(exploreButton).toBeVisible()
    await expect(exploreButton).toBeEnabled()
  })

  test("should display statistics section", async ({ page }) => {
    await page.goto("/")

    // Check if stats section is visible
    await expect(page.getByTestId("stats-section")).toBeVisible()

    // Check if all stat numbers are displayed
    await expect(page.getByText("23")).toBeVisible()
    await expect(page.getByText("20")).toBeVisible()
    await expect(page.getByText("10")).toBeVisible()
    await expect(page.getByText("370+")).toBeVisible()
  })

  test("should be responsive on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto("/")

    // Check if content is still visible on mobile
    await expect(page.getByText("F1 RACING")).toBeVisible()
    await expect(page.getByTestId("explore-button")).toBeVisible()
  })

  test("should have proper accessibility", async ({ page }) => {
    await page.goto("/")

    // Check for proper heading structure
    const h1 = page.locator("h1")
    await expect(h1).toHaveCount(1)

    // Check for alt text on images
    const images = page.locator("img")
    const imageCount = await images.count()

    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i)
      await expect(img).toHaveAttribute("alt")
    }
  })
})
