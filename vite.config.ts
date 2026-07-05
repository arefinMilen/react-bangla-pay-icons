import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";
import { fileURLToPath, URL } from "node:url";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [dts({ include: ["src"] })],
  build: {
    lib: {
      entry: resolve(projectRoot, "src/index.ts"),
      name: "ReactBanglaPayIcons",
      formats: ["es", "umd"],
      fileName: (format) => `index.${format === "es" ? "es.js" : "umd.js"}`,
    },
        rollupOptions: {
      external: [
        "react", 
        "react-dom", 
        "react/jsx-runtime", 
        "react/jsx-dev-runtime"
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "JSX",
          "react/jsx-dev-runtime": "JSXDev",
        },
      },
    },

  },
});
