<script lang="ts">
	import {
		Contributor,
		HeaderChip,
		PageSection,
		defaultI18nValues,
	} from "$lib";
	import { _ } from "svelte-i18n";
</script>

<PageSection id="demo-section">
	<div class="demo-section-video">
		<div class="demo-section-text">
			<HeaderChip>{$_("home.demo.chip", defaultI18nValues)}</HeaderChip>
			<h2>{$_("home.demo.title", defaultI18nValues)}</h2>
			<p>{$_("home.demo.description", defaultI18nValues)}</p>
			<hr />
		</div>
		<iframe
			class="demo-section-player"
			src="https://www.youtube.com/embed/bweNPfQS9b0?si=_aQQP8iSGmxUAp1c"
			title="Scanning Bee Demo"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>
	</div>
</PageSection>

<style lang="scss">
	@use "./DemoSection";
</style>
