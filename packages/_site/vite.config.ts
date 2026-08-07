import path from "path";
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

	resolve: {
    	alias: {
      		"@assets": path.resolve(import.meta.dirname, "./src/assets"),
    	},
  	},

	build: {
    	target: "esnext"
  	},
});
