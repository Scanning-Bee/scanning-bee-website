import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import adapter from "@sveltejs/adapter-static";
import { mdsvex } from "mdsvex";
import rehypeColorPreview from "rehype-color-preview";
import remarkGfm from "remark-gfm";
import remarkGithub from "remark-github";
import remarkSlug from "remark-slug";
import sveltePreprocess from "svelte-preprocess";

/** @type {import("@sveltejs/kit").Config} */
const config = {
	extensions: [".svelte", ".md"],
	kit: {
		alias: {
			$data: "src/data",
			$layout: "src/layout",
			$i18n: "src/i18n",
		},
		adapter: adapter(),
		paths: {
			base: "/scanning-bee",
		},
		prerender: {
			handleMissingId: "ignore",
		},
	},
	preprocess: [
		mdsvex({
			extensions: [".md"],

			smartypants: {
				dashes: "oldschool",
			},

			remarkPlugins: [remarkA11yEmoji, remarkSlug, remarkGfm, remarkGithub],
			rehypePlugins: [rehypeColorPreview],
		}),
		sveltePreprocess(),
	],
};

// shut up webstorm
// noinspection JSUnusedGlobalSymbols
export default config;
