<script lang="ts">
	import { defaultI18nValues, externalLink, Metadata } from "$lib";
	import { Button, InfoBar, TextBlock } from "fluent-svelte";
	import { onMount } from "svelte";
	import DownloadSourceCard from "./DownloadSourceCard.svelte";
	import type { DownloadSource } from "./types";
	import { _ } from "svelte-i18n";

	import { base } from "$app/paths";

	const downloadSources = [
		{
			name: $_("download.windows.title", defaultI18nValues),
			description: $_("download.windows.description", defaultI18nValues),
			href: `ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&cid=FilesWebsite`,
			icon: base + "/download-sources/windows.svg",
			darkModeIcon: base + "/download-sources/windows.svg",
			external: true,
		},
		{
			name: $_("download.mac.title", defaultI18nValues),
			description: $_("download.mac.description", defaultI18nValues),
			href: `ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&cid=FilesWebsite`,
			icon: base + "/download-sources/mac_black.svg",
			darkModeIcon: base + "/download-sources/mac_white.svg",
			external: true,
		},
		{
			name: $_("download.source.title", defaultI18nValues),
			description: $_("download.source.description", defaultI18nValues),
			href: `ms-windows-store://pdp/?ProductId=9nghp3dx8hdx&cid=FilesWebsite`,
			icon: base + "/download-sources/source_code.svg",
			darkModeIcon: base + "/download-sources/source_code.svg",
			external: true,
		},
	] as const satisfies readonly DownloadSource[];
</script>

<Metadata title="Files • Download" image="download" />

<slot />

<main class="download-page">
	<TextBlock variant="titleLarge" style="text-align: center;"
		>{$_("download.title", defaultI18nValues)}</TextBlock
	>

	<section class="download-sources">
		{#each downloadSources as source}
			<DownloadSourceCard {source} />
		{/each}
	</section>
</main>

<style lang="scss">
	.download-page {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: stretch;
		gap: 2rem;
		padding: 2rem;
		max-width: 900px;
		margin-inline: auto;

		inline-size: fit-content;
		block-size: calc(100vh - 58px);

		.download-sources {
			display: flex;
			flex-direction: column;
			gap: 1rem;

			> p {
				text-align: center;
			}
		}
	}
</style>
