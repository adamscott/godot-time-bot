import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
export default defineConfig({
    base: "./",
    resolve: {
        alias: {
            "^": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    build: {
        sourcemap: true,
        lib: {
            entry: {
                main: fileURLToPath(new URL("src/index.mts", import.meta.url)),
                runbot: fileURLToPath(new URL("src/runbot.mts", import.meta.url)),
            },
            name: "GDExercise",
            formats: ["cjs", "es"],
            fileName: function (format, entryName) {
                return "godot-time-bot-".concat(entryName, ".").concat(format, ".js");
            },
        },
    },
});
