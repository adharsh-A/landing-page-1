import react from "@vitejs/plugin-react-swc";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import compression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
  // Configure external dependencies that are loaded via CDN
  build: {
    rollupOptions: {
      external: ["react", "react-dom", "framer-motion", "lucide-react"],
    },
  },
  css: {
    postcss: "./postcss.config.js",
    // CSS modules configuration
    modules: {
      scopeBehaviour: "local",
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
    // Enable CSS source maps
    devSourcemap: true,
  },
  server: {
    port: 3000, // Server runs on port 3000
    open: true, // Opens browser automatically
    host: true, // Makes server accessible from network
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Set up alias for src directory
      "@components": path.resolve(__dirname, "./src/components"), // Alias for components
      "@assets": path.resolve(__dirname, "./src/assets"), // Alias for assets
    },
  },
  plugins: [
    react(),
    // Generate compressed versions of files
    compression({
      algorithm: "gzip",
      ext: ".gz",
    }),
    compression({
      algorithm: "brotliCompress",
      ext: ".br",
    }),
    // Visualize bundle size
    visualizer({
      filename: "./dist/stats.html",
      open: true,
    }),
  ],
});
