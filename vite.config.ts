import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";
import Icons from "unplugin-icons/vite";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader(), Icons({ compiler: "vue3" })],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
