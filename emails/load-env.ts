/**
 * Loads .env.local / .env for scripts run outside Next.js (e.g. emails/preview.ts).
 * Must be the first import so values are set before lib/site.ts reads them.
 */
for (const file of [".env.local", ".env"]) {
  try {
    process.loadEnvFile(file);
  } catch {
    // File missing — fall back to defaults.
  }
}
