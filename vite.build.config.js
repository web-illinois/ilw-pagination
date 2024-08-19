import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist",
        lib: {
            name: "ilw-pagination",
            entry: "ilw-pagination.js",
            fileName: "ilw-pagination",
            formats: ["es", "cjs", "umd"],
        },
        rollupOptions: {
            output: {
                assetFileNames: (chunkInfo) => {
                    if (chunkInfo.name === "style.css") return "ilw-pagination.css";
                },
            },
        },
    },
    server: {
        hmr: false,
    },
});
