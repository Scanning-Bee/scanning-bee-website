<script lang="ts">
	import { defaultI18nValues, HeaderChip, PageSection } from "$lib";
	import { Button } from "fluent-svelte";
	import { _ } from "svelte-i18n";
	let scrollPositionY: number;

	import { base } from "$app/paths";
</script>

<svelte:body on:scroll={() => (scrollPositionY = document.body.scrollTop)} />

<PageSection id="about-section">
	<HeaderChip>{$_("home.about.chip", defaultI18nValues)}</HeaderChip>
	<h2>{$_("home.about.title", defaultI18nValues)}</h2>
	<p>{$_("home.about.description", defaultI18nValues)}</p>
	<div class="buttons-spacer">
		<Button
			href={`${base}/#download/`}
			variant="accent"
			on:click={() => {
				document
					.getElementById("download-section")
					?.scrollIntoView({ behavior: "smooth" });
			}}
		>
			{$_("home.about.download", defaultI18nValues)}
		</Button>
	</div>
	<div class="about-image">
		<picture>
			<source
				media="(prefers-color-scheme: dark)"
				srcset={`${base}/screenshots/scanning-bee.png`}
			/>
			<source
				media="(prefers-color-scheme: light)"
				srcset={`${base}/screenshots/scanning-bee.png`}
			/>
			<img
				alt="Scanning Bee screenshot"
				class="scanning-bee-screenshot"
				height="768"
				src={`${base}/screenshots/scanning-bee.png`}
				style:transform="translateY({Math.floor(scrollPositionY / +20)}px)"
				width="1024"
			/>
		</picture>
		<picture>
			<source
				media="(prefers-color-scheme: dark)"
				srcset={`${base}/screenshots/background.png`}
			/>
			<source
				media="(prefers-color-scheme: light)"
				srcset={`${base}/screenshots/background.png`}
			/>
			<img
				alt="Windows 11 wallpaper"
				class="scanning-bee-wallpaper"
				height="900"
				src={`${base}/screenshots/background.png`}
				width="1440"
			/>
		</picture>
	</div>
</PageSection>

<style lang="scss">
	@use "AboutSection";
</style>
