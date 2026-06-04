import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { sentryVitePlugin } from "@sentry/vite-plugin";
import pkg from "./package.json";
import path from "path";

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      sentryVitePlugin({
        authToken: process.env.SENTRY_AUTH_TOKEN,
        org: "dev-bcn",
        project: "devbcn",
      }),
    ],
    resolve: {
      alias: {
        // Path aliases matching those in tsconfig.json
        "@components": path.resolve(__dirname, "./src/components"),
        "@config": path.resolve(__dirname, "./src/config"),
        "@constants": path.resolve(__dirname, "./src/constants"),
        "@services": path.resolve(__dirname, "./src/services"),
        "@hooks": path.resolve(__dirname, "./src/hooks"),
        "@/assets": path.resolve(__dirname, "./src/assets"),
        "@styles": path.resolve(__dirname, "./src/styles"),
        "@views": path.resolve(__dirname, "./src/views"),
        "@utils": path.resolve(__dirname, "./src/utils"),
        "@data": path.resolve(__dirname, "./src/data"),
        "@/types": path.resolve(__dirname, "./src/types"),
        "lucide-react": "lucide-react",
      },
    },
    define: {
      "process.env": {
        NODE_ENV: JSON.stringify(mode),
        npm_package_version: JSON.stringify(pkg.version),
      },
    },
    build: {
      outDir: "build",
      sourcemap: true,
    },
    server: {
      port: 3000, // Match CRA's default port
    },
    base: "/",
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["./src/setupTests.ts"],
      css: true,
      coverage: {
        provider: "v8",
        reporter: ["text", "json", "html", "lcov"],
      },
    },
    optimizeDeps: {
      exclude: ["lucide-react"],
    },
  };
});
