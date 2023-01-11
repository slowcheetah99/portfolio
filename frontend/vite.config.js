import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/uploads": "http://localhost:1337",
    },
  },
  plugins: [react()],
});
