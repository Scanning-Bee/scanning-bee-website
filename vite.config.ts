import { sveltekit } from "@sveltejs/kit/vite";
import Icons from "unplugin-icons/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({
			compiler: "svelte",
			defaultClass: "fluent-icon",
		}),
	],
	css: {
		lightningcss: {
			drafts: {
				customMedia: true,
			},
		},
	},
	build: {
		rollupOptions: {
			output: {
				// Prevent Vite from splitting the code into multiple chunks
				manualChunks: () => "everything.js",
			},
		},
		// Force all CSS into the JavaScript bundle
		cssCodeSplit: false,
		assetsDir: "",
		cssMinify: "lightningcss",
	},
});
