<script lang="ts">
	import { onMount } from "svelte";
	import { _ } from "svelte-i18n";
	import { ColorSwatch, defaultI18nValues } from "$lib";
	import Question from "~icons/fluent/question-24-regular";
	import type { Tag } from '$data/features';

	export let description: string = "";
	export let icon: typeof Question = Question;
	export let customizable = false;

	let systemTheme = 'light';

	// if the system theme is dark, the default theme is dark.
	const lightTheme: Tag = {
		name: 'Light',
		color: "#F5F5F5",
	};

	const darkTheme: Tag = {
		name: 'Dark',
		color: "#151515",
	};

	const METUtheme: Tag = {
		name: 'METU',
		color: "#990000",
	};

	const beesTheme: Tag = {
		name: 'Bees',
		color: "#F4AC18",
	};

	let themes: Tag[] = [];

	let currentTheme = 0;

	onMount(() => {
		const setThemes = () => {
			if (systemTheme === "light") {
				themes = [lightTheme, darkTheme, METUtheme, beesTheme];
			} else {
				themes = [darkTheme, lightTheme, METUtheme, beesTheme];
			}
		};

		const handleThemeChange = (e: MediaQueryListEvent) => {
			systemTheme = e.matches ? "dark" : "light";

			setThemes();
		};

		systemTheme = window?.matchMedia("(prefers-color-scheme: dark)")?.matches
			? "dark"
			: "light";

		setThemes();

		window
			.matchMedia("(prefers-color-scheme: dark)")
			.addEventListener("change", handleThemeChange);

		return () =>
			window
				.matchMedia("(prefers-color-scheme: dark)")
				.removeEventListener("change", handleThemeChange);
	});
</script>

<article
	class="feature-card theme-{currentTheme === 0 ? 'default' : themes[currentTheme].name.toLowerCase()}"
	{...$$restProps}
	id="{customizable ? 'customizable-feature-card' : ''}"
>
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
			{#each themes as color, i}
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
