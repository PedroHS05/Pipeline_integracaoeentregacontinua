#!/usr/bin/env node

const https = require("https")
const { execSync } = require("child_process")

const NOTIFICATION_TYPES = {
  SUCCESS: "success",
  FAILURE: "failure",
  WARNING: "warning",
  INFO: "info",
}

const COLORS = {
  success: "#36a64f",
  failure: "#ff0000",
  warning: "#ffaa00",
  info: "#0099cc",
}

const EMOJIS = {
  success: "✅",
  failure: "❌",
  warning: "⚠️",
  info: "ℹ️",
}

function getCurrentBranch() {
  try {
    return execSync("git rev-parse --abbrev-ref HEAD", { encoding: "utf8" }).trim()
  } catch (error) {
    return "unknown"
  }
}

function getCurrentCommit() {
  try {
    return execSync("git rev-parse --short HEAD", { encoding: "utf8" }).trim()
  } catch (error) {
    return "unknown"
  }
}

function getCommitAuthor() {
  try {
    return execSync("git log -1 --pretty=format:'%an'", { encoding: "utf8" }).trim()
  } catch (error) {
    return "unknown"
  }
}

function sendSlackNotification(type, message, details = {}) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL

  if (!webhookUrl) {
    console.log("SLACK_WEBHOOK_URL não configurado, pulando notificação Slack")
    return
  }

  const payload = {
    text: `${EMOJIS[type]} F1 Racing Hub - ${message}`,
    attachments: [
      {
        color: COLORS[type],
        fields: [
          {
            title: "Branch",
            value: details.branch || getCurrentBranch(),
            short: true,
          },
          {
            title: "Commit",
            value: details.commit || getCurrentCommit(),
            short: true,
          },
          {
            title: "Autor",
            value: details.author || getCommitAuthor(),
            short: true,
          },
          {
            title: "Timestamp",
            value: new Date().toISOString(),
            short: true,
          },
        ],
      },
    ],
  }

  if (details.url) {
    payload.attachments[0].fields.push({
      title: "URL",
      value: details.url,
      short: false,
    })
  }

  if (details.logs) {
    payload.attachments[0].fields.push({
      title: "Logs",
      value: details.logs,
      short: false,
    })
  }

  const postData = JSON.stringify(payload)

  const url = new URL(webhookUrl)
  const options = {
    hostname: url.hostname,
    port: url.port || 443,
    path: url.pathname,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(postData),
    },
  }

  const req = https.request(options, (res) => {
    console.log(`Slack notification sent: ${res.statusCode}`)
  })

  req.on("error", (error) => {
    console.error("Erro ao enviar notificação Slack:", error)
  })

  req.write(postData)
  req.end()
}

function sendEmailNotification(type, message, details = {}) {
  // Implementação básica de email (requer configuração SMTP)
  console.log(`📧 Email Notification: ${EMOJIS[type]} ${message}`)
  console.log("Detalhes:", JSON.stringify(details, null, 2))

  // Aqui você pode integrar com serviços como SendGrid, Mailgun, etc.
  // Exemplo com curl para webhook de email:
  /*
  const emailWebhook = process.env.EMAIL_WEBHOOK_URL
  if (emailWebhook) {
    execSync(`curl -X POST ${emailWebhook} -H "Content-Type: application/json" -d '${JSON.stringify({
      type,
      message,
      details
    })}'`)
  }
  */
}

function notify(type, message, options = {}) {
  console.log(`${EMOJIS[type]} ${message}`)

  const details = {
    branch: getCurrentBranch(),
    commit: getCurrentCommit(),
    author: getCommitAuthor(),
    ...options,
  }

  // Enviar notificações
  if (options.slack !== false) {
    sendSlackNotification(type, message, details)
  }

  if (options.email !== false) {
    sendEmailNotification(type, message, details)
  }

  // Log estruturado para CI/CD
  console.log(
    JSON.stringify({
      timestamp: new Date().toISOString(),
      type,
      message,
      details,
    }),
  )
}

// Exportar funções para uso em outros scripts
module.exports = {
  notify,
  NOTIFICATION_TYPES,
}

// CLI usage
if (require.main === module) {
  const [, , type, message, ...args] = process.argv

  if (!type || !message) {
    console.error("Uso: node notify.js <type> <message> [options]")
    console.error("Tipos: success, failure, warning, info")
    process.exit(1)
  }

  const options = {}
  args.forEach((arg) => {
    const [key, value] = arg.split("=")
    options[key.replace("--", "")] = value || true
  })

  notify(type, message, options)
}
