import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import stylexPlugin from "@stylexjs/rollup-plugin";
import styleX from "vite-plugin-stylex";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),

		styleX(),
	],

	esbuild: {
		supported: {
			"top-level-await": true,
		},
	},
});
