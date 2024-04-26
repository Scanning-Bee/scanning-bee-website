import type { SvelteComponent } from "svelte";
import type { SvelteHTMLElements } from "svelte/elements";

export type FeatureCardData = {
	title: string;
	description: string;
	icon: typeof SvelteComponent<SvelteHTMLElements["svg"]>;
};

export type Tag = {
	name: string;
	color: string;
};

export interface FileData {
	name: string;
	icon: string;
}

export type CloudFileData = FileData & {
	status: "success" | "sync";
};

export type TaggedFileData = FileData & {
	tag: string;
};
