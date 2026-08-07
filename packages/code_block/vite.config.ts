import { resolve } from "path";
import { readFileSync } from "fs";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

function emitColorPickerCss(): Plugin {
	return {
		name: "emit-color-picker-css",
		generateBundle() {
			this.emitFile({
				type: "asset",
				fileName: "code-block.css",
				source: readFileSync(resolve(import.meta.dirname, "./lib/index.css"), "utf8"),
			});
		},
	};
}

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		emitColorPickerCss(),

		dts({
			tsconfigPath: "./tsconfig.app.json",
		}),

		react(),
	],

	build: {
		target: "esnext",

		ssr: true,

		lib: {
			entry: resolve(import.meta.dirname, "./lib/index.tsx"),
			formats: ["es"],
		},

		rollupOptions: {
			external: ["react", "react-dom", "@stylexjs/stylex"],
			output: {
				comments: {
					legal: false,
				},

				entryFileNames: "index.js",

				globals: {
					react: "react",
					reactDOM: "react-dom",
					"@stylexjs/stylex": "@stylexjs/stylex",
				},
			},
		},
	},
});
