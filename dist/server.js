const { createServer } = require("http")
const { parse } = require("url")
const next = require("next")

const dir = __dirname
const port = Number.parseInt(process.env.PORT || "3000", 10)
const hostname = process.env.HOSTNAME || "0.0.0.0"

process.chdir(dir)

const app = next({
  dev: false,
  dir,
  hostname,
  port,
})

const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    createServer(async (req, res) => {
      try {
        const parsedUrl = parse(req.url, true)
        await handle(req, res, parsedUrl)
      } catch (error) {
        console.error("Request error:", req.url, error)
        res.statusCode = 500
        res.end("Internal Server Error")
      }
    }).listen(port, hostname, () => {
      console.log(`> Next.js ready on http://${hostname}:${port}`)
    })
  })
  .catch((error) => {
    console.error("Failed to start server:", error)
    process.exit(1)
  })
