import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/anniversary/", // add the base as repo name as "/yourRepoName/"
  plugins: [react()],
});
