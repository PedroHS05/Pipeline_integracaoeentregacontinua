#!/usr/bin/env node

const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")

const ENVIRONMENTS = {
  staging: {
    branch: "develop",
    url: "https://f1-racing-hub-staging.vercel.app",
    alias: "staging",
  },
  production: {
    branch: "main",
    url: "https://f1-racing-hub.vercel.app",
    alias: "production",
  },
}

function getCurrentBranch() {
  try {
    return execSync("git rev-parse --abbrev-ref HEAD", { encoding: "utf8" }).trim()
  } catch (error) {
    console.error("Error getting current branch:", error.message)
    process.exit(1)
  }
}

function getEnvironment() {
  const currentBranch = getCurrentBranch()

  for (const [env, config] of Object.entries(ENVIRONMENTS)) {
    if (config.branch === currentBranch) {
      return { name: env, ...config }
    }
  }

  throw new Error(`No environment configured for branch: ${currentBranch}`)
}

function runHealthCheck(url) {
  console.log(`🔍 Running health check for ${url}...`)

  try {
    const response = execSync(`curl -f -s -o /dev/null -w "%{http_code}" ${url}`, { encoding: "utf8" })

    if (response.trim() === "200") {
      console.log("✅ Health check passed!")
      return true
    } else {
      console.log(`❌ Health check failed with status: ${response}`)
      return false
    }
  } catch (error) {
    console.log(`❌ Health check failed: ${error.message}`)
    return false
  }
}

function deploy() {
  try {
    const env = getEnvironment()
    console.log(`🚀 Deploying to ${env.name} environment...`)

    // Build the application
    console.log("📦 Building application...")
    execSync("npm run build", { stdio: "inherit" })

    // Deploy to Vercel
    console.log("🌐 Deploying to Vercel...")
    const deployCommand = env.name === "production" ? "vercel --prod --confirm" : "vercel --confirm"

    execSync(deployCommand, { stdio: "inherit" })

    // Wait a moment for deployment to be ready
    console.log("⏳ Waiting for deployment to be ready...")
    setTimeout(() => {
      // Run health check
      const healthCheckPassed = runHealthCheck(env.url)

      if (healthCheckPassed) {
        console.log(`✅ Deployment to ${env.name} completed successfully!`)
        console.log(`🌐 URL: ${env.url}`)
      } else {
        console.log(`❌ Deployment completed but health check failed for ${env.name}`)
        process.exit(1)
      }
    }, 10000)
  } catch (error) {
    console.error(`❌ Deployment failed: ${error.message}`)
    process.exit(1)
  }
}

// Run deployment
deploy()
