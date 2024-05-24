<script lang="ts">
	import { base } from "$app/paths";
	import {
		Contributor,
		HeaderChip,
		PageSection,
		defaultI18nValues,
	} from "$lib";
	import { _ } from "svelte-i18n";
</script>

<div
	class="first-itw-section-background"
	style={`
	background-image: url(${base}/ui/first-itw.png);
`}
>
	<PageSection id="first-itw-section">
		<div class="first-itw-section-text">
			<h2>{$_("home.first-itw.title", defaultI18nValues)}</h2>
			<p>{$_("home.first-itw.description", defaultI18nValues)}</p>
		</div>

		<div class="beehive-image">
			<picture>
				<source
					media="(prefers-color-scheme: dark)"
					srcset={`${base}/screenshots/beehive-page.png`}
				/>
				<source
					media="(prefers-color-scheme: light)"
					srcset={`${base}/screenshots/beehive-page.png`}
				/>
				<img
					alt="Scanning Bee screenshot"
					class="beehive-screenshot"
					height="450"
					src={`${base}/screenshots/beehive-page.png`}
					width="800"
				/>
			</picture>
		</div>
	</PageSection>
</div>

<style lang="scss">
	@use "./FirstITWSection";
</style>
