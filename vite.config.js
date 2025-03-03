import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { sentryVitePlugin } from "@sentry/vite-plugin";

export default defineConfig({
  base: "/apple-site/", // 👈 Replace with your repo name

  plugins: [
    react(),
    sentryVitePlugin({
      org: "southwave-llc",
      project: "javascript-react",
      include: "./dist", // Upload sourcemaps from the dist folder
      authToken: process.env.SENTRY_AUTH_TOKEN, // Ensure it's set in CI/CD
      release: process.env.npm_package_version, // Use package.json version
      urlPrefix: "~/",
    }),
  ],

  build: {
    sourcemap: true, // Needed for Sentry error tracking
  },
});
