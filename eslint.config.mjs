import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "dist/**",
    "server.js",
    "scripts/build-dist.mjs",
    "scripts/cpanel-deploy.sh",
    "scripts/pre-push-main-build.sh",
    "scripts/validate-dist-branch.sh",
  ]),
]);

export default eslintConfig;
