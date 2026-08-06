import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import stylexPlugin from "@stylexjs/rollup-plugin";
// import styleX from "vite-plugin-stylex";

import stylex from '@stylexjs/unplugin';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		stylex.vite(),

		react(),
	],

	// esbuild: {
	// 	supported: {
	// 		"top-level-await": true,
	// 	},
	// },
});
