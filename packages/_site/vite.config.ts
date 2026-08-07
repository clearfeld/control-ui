import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import stylex from '@stylexjs/unplugin';

export default defineConfig({
	plugins: [
		stylex.vite({
			useCSSLayers: true
		}),

		react(),
	],

	build: {
    	target: "esnext"
  	},
});
