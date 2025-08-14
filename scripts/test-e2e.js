#!/usr/bin/env node

const { execSync } = require("child_process")

function runE2ETests() {
  try {
    console.log("🧪 Running end-to-end tests...")

    // Start the application in test mode
    console.log("🚀 Starting application...")
    const server = execSync("npm run build && npm start &", { stdio: "pipe" })

    // Wait for server to be ready
    console.log("⏳ Waiting for server to be ready...")
    execSync("npx wait-on http://localhost:3000 --timeout 30000")

    // Run Playwright tests
    console.log("🎭 Running Playwright tests...")
    execSync("npx playwright test", { stdio: "inherit" })

    console.log("✅ All E2E tests passed!")
  } catch (error) {
    console.error(`❌ E2E tests failed: ${error.message}`)
    process.exit(1)
  } finally {
    // Kill the server
    try {
      execSync('pkill -f "next start"')
    } catch (e) {
      // Ignore errors when killing the process
    }
  }
}

// Run E2E tests
runE2ETests()
