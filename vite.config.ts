import { sveltekit } from "@sveltejs/kit/vite";
import Icons from "unplugin-icons/vite";
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import UnoCSS from 'unocss/vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig(({ command }) => ({
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
}));
