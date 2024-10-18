import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { codecovVitePlugin } from "@codecov/vite-plugin";


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: "8080",
  },
  plugins: [
    react(),
    codecovVitePlugin({
      enableBundleAnalysis: process.env.CODECOV_TOKEN !== undefined,
      bundleName: "prepa-competences-site",
      uploadToken: process.env.CODECOV_TOKEN,
    })
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "lib",
        replacement: resolve(fileURLToPath(new URL(".", import.meta.url)), "lib"),
      },
    ],
  },
  base: "/prepa-competences-site/",
  build: {
    outDir: "dist",
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
});
