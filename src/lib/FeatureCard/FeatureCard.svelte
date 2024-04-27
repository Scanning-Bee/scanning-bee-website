<script lang="ts">
	import { _ } from "svelte-i18n";
	import { ColorSwatch, defaultI18nValues } from "$lib";
	import Question from "~icons/fluent/question-24-regular";
	import type { Tag } from '$data/features';

	export let description: string = "";
	export let icon: typeof Question = Question;
	export let customizable = false;

	const themeColors: Tag[] = [
		{
			name: $_("home.themes.light", defaultI18nValues),
			color: "#F5F5F5",
		},
		{
			name: $_("home.themes.dark", defaultI18nValues),
			color: "#151515",
		},
		{
			name: $_("home.themes.metu", defaultI18nValues),
			color: "#990000",
		},
		{
			name: $_("home.themes.bees", defaultI18nValues),
			color: "#F4AC18",
		},
	];

	let currentTheme = 0;
</script>

<article class="feature-card theme-{currentTheme + 1}" {...$$restProps} id="{customizable ? 'customizable-feature-card' : ''}">
	<div class="feature-title-icon">
		<h3>
			<slot>{$_("home.features.unknown", defaultI18nValues)}</slot>
		</h3>
		<slot name="icon">
			<svelte:component this={icon} />
		</slot>
	</div>
	<p>{description}</p>
	{#if customizable}
		<div class="theme-chooser">
			{#each themeColors as color, i}
				<ColorSwatch
					bind:group={currentTheme}
					value={i}
					colorName={color}
					aria-label={$_("home.themes.select_theme", {
						values: { index: i + 1 },
					})}
				/>
			{/each}
		</div>
	{/if}
</article>

<style lang="scss">
	@use "./FeatureCard";
</style>
