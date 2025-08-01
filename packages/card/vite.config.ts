import {
	// join,
	resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import stylexPlugin from "@stylexjs/rollup-plugin";
import dts from "vite-plugin-dts";

// import path from 'path';
// https://vitejs.dev/config/

const dep_excludes = [
	"@controlkit/theme",
]

export default defineConfig({
	plugins: [
		dts({
			tsconfigPath: "./tsconfig.app.json",
		}),

		react(),

		// styleX({
		// 	// unstable_moduleResolution: {
		// 	// 	type: 'commonJS', // or 'esModules' depending on your project
		// 	// 	rootDir: path.resolve(__dirname),// Adjust this to your theme directory
		// 	// },
		// }),
	],

	optimizeDeps: {
		exclude: [
			...dep_excludes
		]
	},

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
