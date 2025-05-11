import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    resolve: {
      alias: {
        // If you have any path aliases in your tsconfig.json, you should define them here too
        // For example: '@components': resolve(__dirname, './src/components')
      },
    },
    define: {
      // Create a shim for the process.env object
      "process.env": {
        // Map REACT_APP_ environment variables to VITE_ ones
        REACT_APP_GOOGLE_ANALYTICS_API_KEY: JSON.stringify(
          env.VITE_GOOGLE_ANALYTICS_API_KEY ||
            env.REACT_APP_GOOGLE_ANALYTICS_API_KEY ||
            "G-0BG1LNPT11",
        ),
        REACT_APP_MAP_API_KEY: JSON.stringify(
          env.VITE_MAP_API_KEY || env.REACT_APP_MAP_API_KEY || "",
        ),
        // Add standard environment variables
        NODE_ENV: JSON.stringify(mode),
        npm_package_version: JSON.stringify(pkg.version),
      },
    },
    build: {
      outDir: "build", // Match CRA's output directory
    },
    server: {
      port: 3000, // Match CRA's default port
    },
    base: "/", // Set the base path for your application
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["./src/setupTests.ts"],
      css: true,
      coverage: {
        provider: "v8",
        reporter: ["text", "json", "html"],
      },
    },
  };
});
