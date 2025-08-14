#!/usr/bin/env node

const { notify, NOTIFICATION_TYPES } = require("./notify")
const { execSync } = require("child_process")

async function runPostDeployChecks() {
  console.log("🚀 Executando verificações pós-deploy...")

  const checks = [
    {
      name: "Health Check",
      url: "https://f1-racing-hub.vercel.app",
      test: async (url) => {
        const response = await fetch(url)
        return response.status === 200
      },
    },
    {
      name: "Performance Check",
      url: "https://f1-racing-hub.vercel.app",
      test: async (url) => {
        const start = Date.now()
        const response = await fetch(url)
        const duration = Date.now() - start
        return response.status === 200 && duration < 2000 // < 2s
      },
    },
    {
      name: "Security Headers Check",
      url: "https://f1-racing-hub.vercel.app",
      test: async (url) => {
        const response = await fetch(url)
        const headers = response.headers
        return (
          headers.get("x-content-type-options") === "nosniff" &&
          headers.get("x-frame-options") === "DENY" &&
          headers.get("x-xss-protection") === "1; mode=block"
        )
      },
    },
  ]

  let allPassed = true
  const results = []

  for (const check of checks) {
    try {
      console.log(`Executando: ${check.name}...`)
      const passed = await check.test(check.url)

      if (passed) {
        console.log(`✅ ${check.name} - PASSOU`)
        results.push({ name: check.name, status: "PASSOU" })
      } else {
        console.log(`❌ ${check.name} - FALHOU`)
        results.push({ name: check.name, status: "FALHOU" })
        allPassed = false
      }
    } catch (error) {
      console.log(`❌ ${check.name} - ERRO: ${error.message}`)
      results.push({ name: check.name, status: "ERRO", error: error.message })
      allPassed = false
    }
  }

  // Relatório final
  console.log("\n📊 Relatório de Verificações Pós-Deploy:")
  results.forEach((result) => {
    console.log(`  ${result.status === "PASSOU" ? "✅" : "❌"} ${result.name}: ${result.status}`)
    if (result.error) {
      console.log(`    Erro: ${result.error}`)
    }
  })

  if (allPassed) {
    notify(NOTIFICATION_TYPES.SUCCESS, "Todas as verificações pós-deploy passaram!", {
      url: "https://f1-racing-hub.vercel.app",
      checks: results.length,
    })
    console.log("\n🎉 Deploy validado com sucesso!")
  } else {
    notify(NOTIFICATION_TYPES.FAILURE, "Algumas verificações pós-deploy falharam!", {
      url: "https://f1-racing-hub.vercel.app",
      failedChecks: results.filter((r) => r.status !== "PASSOU").length,
    })
    console.log("\n⚠️ Deploy com problemas detectados!")
    process.exit(1)
  }
}

// Executar verificações
runPostDeployChecks().catch((error) => {
  console.error("Erro nas verificações pós-deploy:", error)
  notify(NOTIFICATION_TYPES.FAILURE, "Erro crítico nas verificações pós-deploy!", {
    error: error.message,
  })
  process.exit(1)
})
