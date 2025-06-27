import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { sentryVitePlugin } from "@sentry/vite-plugin";
import pkg from "./package.json";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      sentryVitePlugin({
        authToken: process.env.SENTRY_AUTH_TOKEN,
        org: "dev-bcn",
        project: "devbcn",
      }),

      VitePWA({
        registerType: "autoUpdate",
        includeAssets: [
          "favicon.ico",
          "apple-touch-icon.png",
          "maskable_icon_x192.png",
        ],
        manifest: {
          name: "DevBcn",
          short_name: "DevBcn",
          description: "DevBcn - The developer conference in Barcelona",
          theme_color: "#ffffff",
          icons: [
            {
              src: "logo192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "logo512.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
        },
      }),
    ],
    resolve: {
      alias: {
        // Path aliases matching those in tsconfig.json
        "@components": path.resolve(__dirname, "./src/components"),
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
