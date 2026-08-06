import { resolve } from "path";
import { readFileSync } from "fs";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
// import stylexPlugin from "@stylexjs/rollup-plugin";
import dts from "vite-plugin-dts";

function emitColorPickerCss(): Plugin {
	return {
		name: "emit-color-picker-css",
		generateBundle() {
			this.emitFile({
				type: "asset",
				fileName: "color-picker.css",
				source: readFileSync(resolve(__dirname, "./lib/colorpicker.css"), "utf8"),
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

	esbuild: {
		legalComments: "none",
	},

	build: {
		target: "esnext",

		ssr: true,

		lib: {
			entry: resolve(__dirname, "./lib/index.tsx"),
			formats: ["es"],
		},

		rollupOptions: {
			external: ["react", "react-dom", "@stylexjs/stylex"],
			output: {
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
