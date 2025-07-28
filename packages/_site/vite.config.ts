import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import stylexPlugin from "@stylexjs/rollup-plugin";
import styleX from "vite-plugin-stylex";
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),

		styleX({
      	unstable_moduleResolution: {
        	type: 'commonJS', // or 'esModules' depending on your project
			rootDir: path.resolve(__dirname),// Adjust this to your theme directory
      },
	  	
    }),
	],

	esbuild: {
		supported: {
			"top-level-await": true,
		},
	},

	
	
});
