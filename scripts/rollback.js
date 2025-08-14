#!/usr/bin/env node

const { execSync } = require("child_process")

function rollback() {
  try {
    console.log("🔄 Rolling back to previous deployment...")

    // Get list of deployments
    const deployments = execSync("vercel ls --json", { encoding: "utf8" })
    const deploymentList = JSON.parse(deployments)

    if (deploymentList.length < 2) {
      throw new Error("No previous deployment found to rollback to")
    }

    // Get the second most recent deployment (previous one)
    const previousDeployment = deploymentList[1]

    console.log(`Rolling back to deployment: ${previousDeployment.url}`)

    // Promote the previous deployment
    execSync(`vercel promote ${previousDeployment.url} --yes`, { stdio: "inherit" })

    console.log("✅ Rollback completed successfully!")
    console.log(`🌐 Active URL: ${previousDeployment.url}`)
  } catch (error) {
    console.error(`❌ Rollback failed: ${error.message}`)
    process.exit(1)
  }
}

// Run rollback
rollback()
