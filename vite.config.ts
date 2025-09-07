import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "spa-fallback",
      configurePreviewServer(server) {
        server.middlewares.use((req, _res, next) => {
          const acceptHeader = req.headers.accept || "";

          // Bỏ qua request dành cho file tĩnh hoặc API
          if (
            req.url?.startsWith("/api") ||
            req.url?.includes(".") ||
            !acceptHeader.includes("text/html")
          ) {
            return next();
          }

          // Ghi đè request trả về index.html
          req.url = "/index.html";
          next();
        });
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/Components"),
      "@lib": path.resolve(__dirname, "./src/lib"),
    },
  },
  base: "/",
  server: {
    port: 5173,
    fs: {
      strict: false,
    },
  },
  preview: {
    port: 4173,
    open: true,
  },
});
