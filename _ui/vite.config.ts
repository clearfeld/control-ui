import { resolve } from "node:path";
import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
import react from '@vitejs/plugin-react';
// import stylexPlugin from "@stylexjs/rollup-plugin";
import dts from "vite-plugin-dts";
import { esmExternalRequirePlugin } from 'rolldown/plugins';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		dts({
			tsconfigPath: "./tsconfig.app.json",
		}),

		react(),

		esmExternalRequirePlugin({
			external: [
				"react", "react-dom", "@stylexjs/stylex"
			],
		}),
	],

	// esbuild: {
	// 	legalComments: "none",
	// },


	build: {
		target: "esnext",

		// ssr: false,

		lib: {
			entry: resolve(import.meta.dirname, "./lib/index.tsx"),
			formats: ["es"],
			fileName: "index",
		},

		rollupOptions: {
			// external: ["react", "react-dom", "@stylexjs/stylex"],
			output: {
				dir: 'dist',
				format: 'esm',

				// 	entryFileNames: "index.js",

				// 	globals: {
				// 		react: "react",
				// 		reactDOM: "react-dom",
				// 		"@stylexjs/stylex": "@stylexjs/stylex",
				// 	},
			},
		},
	},
});
