import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
  server: {
    // Enable MSW in development
    configureServer({ app }) {
      const { worker } = require("./src/mocks/server.js");
      worker.start();
    },
  },
});