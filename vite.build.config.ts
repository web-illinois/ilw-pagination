import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist/cdn",
        lib: {
            name: "ilw-pagination",
            entry: "ilw-pagination.ts",
            fileName: "ilw-pagination",
            formats: ["es"],
        },
        rollupOptions: {
            output: {
                assetFileNames: (chunkInfo) => {
                    if (chunkInfo.name === "style.css") return "ilw-pagination.css";
                    return "[name][extname]";
                },
            },
        },
    },
    server: {
        hmr: false,
    },
});
