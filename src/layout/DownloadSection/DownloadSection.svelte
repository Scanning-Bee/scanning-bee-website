<script lang="ts">
	import { defaultI18nValues, externalLink, HeaderChip, Metadata } from "$lib";
	import { Button, InfoBar, TextBlock } from "fluent-svelte";
	import type { DownloadSource } from "./types";
	import { _ } from "svelte-i18n";

	import { base } from "$app/paths";
	import PageSection from "$lib/PageSection/PageSection.svelte";

	let link: HTMLAnchorElement;

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

	const downloadAppInstaller = () => link.click();

	const downloadWithKeyboard = (e: KeyboardEvent) => {
		if (e.key === "Enter") downloadAppInstaller();
	};
</script>

<Metadata title="Files • Download" image="download" />

<slot />

<PageSection id="download-section">
	<div class="download-section-text">
		<HeaderChip>{$_("home.download.chip", defaultI18nValues)}</HeaderChip>
		<h2>{$_("home.download.title", defaultI18nValues)}</h2>
		<p>{$_("home.download.description", defaultI18nValues)}</p>
		<hr />
	</div>
	<div class="download-sources">
		{#each downloadSources as source}
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<article
				tabindex="0"
				class="download-source"
				on:click={downloadAppInstaller}
				on:keydown={downloadWithKeyboard}
			>
				<picture>
					<source
						media="(prefers-color-scheme: dark)"
						srcset={source.darkModeIcon}
					/>
					<img
						class="download-source-icon"
						src={source.icon}
						alt="{source.name} logo"
						style={`scale: ${source.name === $_("download.source.title", defaultI18nValues) ? 1 : 0.9}`}
					/>
				</picture>
				<div class="label-container">
					<TextBlock variant="title" style="text-align: center;"
						>{source.name}</TextBlock
					>
					<TextBlock class="download-source-description">
						{source.description}
					</TextBlock>
					<a
						href={source.href}
						download={!source.external
							? source.href.substring(source.href.lastIndexOf("/") + 1)
							: ""}
						{...externalLink}
						bind:this={link}
						style:display="none"
					>
						download
					</a>
				</div>
			</article>
		{/each}
	</div>
</PageSection>

<style lang="scss">
	@use "./DownloadSection";
</style>
