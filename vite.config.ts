import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { plugin as mdPlugin, Mode } from "vite-plugin-markdown";

export default defineConfig({
  base: "/blog/",
  plugins: [react(), mdPlugin({ mode: [Mode.FRONTMATTER, Mode.HTML] })],
});
