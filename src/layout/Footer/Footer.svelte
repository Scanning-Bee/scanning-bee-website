<script lang="ts">
	import { defaultI18nValues, externalLink, PageSection } from "$lib";
	import { Button, IconButton } from "fluent-svelte";
	import { _ } from "svelte-i18n";
	import Github from "./icons/github.svg?raw";
	import Discord from "./icons/discord.svg?raw";

	import { base } from "$app/paths";
</script>

<PageSection type="footer" id="page-footer">
	<div class="column">
		<a class="logo" href={base}>
			<picture>
				<source
					media="(prefers-color-scheme: dark)"
					srcset={base + "/branding/logo-dark.svg"}
				/>
				<source
					media="(prefers-color-scheme: light)"
					srcset={base + "/branding/logo-light.svg"}
				/>
				<img
					alt="Scanning Bee logo"
					height="32"
					src={base + "/branding/logo-light.svg"}
					width="32"
				/>
			</picture>
			Scanning Bee
		</a>
		<p>
			{$_("Copyright (c) {year} Scanning Bee", {
				values: { year: new Date().getFullYear() },
			})}
		</p>
	</div>
	<div class="column">
		<p>Pages</p>
		<Button variant="hyperlink" on:click={() => scrollTo({ top: 0 })}>
			{$_("footer.home", defaultI18nValues)}
		</Button>
		<Button variant="hyperlink" on:click={() => {
			const element = document.getElementById("download-section");
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}}>
			{$_("footer.download", defaultI18nValues)}
		</Button>
	</div>
	<div class="column">
		<p>{$_("footer.externalLinks", defaultI18nValues)}</p>
		<Button
			{...externalLink}
			href="https://ceng.metu.edu.tr/"
			variant="hyperlink"
		>
			METU CENG
		</Button>
		<Button {...externalLink} href="https://metu.edu/" variant="hyperlink">
			METU
		</Button>
		<Button {...externalLink} href="https://roboroyale.eu/" variant="hyperlink">
			RoboRoyale
		</Button>
	</div>
</PageSection>

<style lang="scss">
	@use "./Footer";
</style>
