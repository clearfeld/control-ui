import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
	plugins: [
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

		rolldownOptions: {
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
