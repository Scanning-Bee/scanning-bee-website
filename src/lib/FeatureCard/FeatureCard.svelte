<script lang="ts">
	import { _ } from "svelte-i18n";
	import { defaultI18nValues } from "$lib";
	import Question from "~icons/fluent/question-24-regular";
	import type { SvelteComponent } from 'svelte';

	export let description: string = "";
	export let icon: typeof Question = Question;
</script>

<article class="feature-card" {...$$restProps}>
	<div class="feature-title-icon">
		<h3>
			<slot>{$_("home.features.unknown", defaultI18nValues)}</slot>
		</h3>
		<slot name="icon">
			<svelte:component this={icon} />
		</slot>
	</div>
	<p>{description}</p>
</article>

<style lang="scss">
	@use "./FeatureCard";
</style>
