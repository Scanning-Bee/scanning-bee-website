import type { SvelteComponent } from "svelte";
import type { SvelteHTMLElements } from "svelte/elements";

export type NavbarItem = {
	name: string;
	path: string;
	external?: boolean;
	icon: typeof SvelteComponent<SvelteHTMLElements["svg"]>;
	type?: string;
};
