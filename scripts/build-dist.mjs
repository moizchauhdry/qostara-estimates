import { spawn } from "node:child_process"
import { access, copyFile, mkdir, readdir, rm, stat } from "node:fs/promises"
import { constants } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const nextDir = path.join(root, ".next")
const distDir = path.join(root, "dist")
const distNext = path.join(distDir, ".next")

const SKIP_DIRS = new Set(["cache", "dev", "diagnostics", "types", "turbopack"])

const ALLOWLIST = new Set([
  "BUILD_ID",
  "build",
  "server",
  "static",
  "build-manifest.json",
  "app-path-routes-manifest.json",
  "fallback-build-manifest.json",
  "export-marker.json",
  "images-manifest.json",
  "prerender-manifest.json",
  "routes-manifest.json",
  "required-server-files.js",
  "required-server-files.json",
  "package.json",
])

function run(command) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, {
      cwd: root,
      shell: true,
      stdio: "inherit",
      env: { ...process.env, NODE_ENV: "production" },
    })
    child.on("error", reject)
    child.on("close", (code) => {
      if (code === 0) resolve()
      else reject(new Error(`Command failed (${code}): ${command}`))
    })
  })
}

async function exists(target) {
  try {
    await access(target, constants.F_OK)
    return true
  } catch {
    return false
  }
}

async function copyFiltered(src, dest) {
  const info = await stat(src)
  if (info.isDirectory()) {
    if (SKIP_DIRS.has(path.basename(src))) return
    await mkdir(dest, { recursive: true })
    const entries = await readdir(src)
    for (const entry of entries) {
      if (entry.endsWith(".map")) continue
      await copyFiltered(path.join(src, entry), path.join(dest, entry))
    }
    return
  }

  if (src.endsWith(".map")) return
  await mkdir(path.dirname(dest), { recursive: true })
  await copyFile(src, dest)
}

async function assemble() {
  await rm(distDir, { recursive: true, force: true })
  await mkdir(distNext, { recursive: true })

  if (!(await exists(nextDir))) {
    throw new Error("Missing .next after production build")
  }

  const entries = await readdir(nextDir)
  for (const entry of entries) {
    if (SKIP_DIRS.has(entry) || entry.endsWith(".map")) continue

    const src = path.join(nextDir, entry)
    const dest = path.join(distNext, entry)
    const info = await stat(src)

    if (ALLOWLIST.has(entry)) {
      await copyFiltered(src, dest)
      continue
    }

    // Extra production manifests Next may emit at the .next root.
    if (info.isFile() && (entry.endsWith(".json") || entry.endsWith(".js"))) {
      await copyFile(src, dest)
    }
  }

  const publicDir = path.join(root, "public")
  if (await exists(publicDir)) {
    await copyFiltered(publicDir, path.join(distDir, "public"))
  }

  const serverJs = path.join(root, "server.js")
  if (!(await exists(serverJs))) {
    throw new Error("Missing server.js")
  }
  await copyFile(serverJs, path.join(distDir, "server.js"))

  for (const forbidden of ["dev", "cache"]) {
    if (await exists(path.join(distNext, forbidden))) {
      throw new Error(`dist/.next/${forbidden} must not exist`)
    }
  }
}

async function main() {
  console.log("▸ next build (production)")
  await run("npx next build")
  console.log("▸ assembling minimal dist/")
  await assemble()
  console.log("▸ dist/ ready")
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
