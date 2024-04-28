<script lang="ts">
	import {
		Contributor,
		defaultI18nValues,
		HeaderChip,
		PageSection,
	} from "$lib";
	import { _ } from "svelte-i18n";
	import type { PageData } from "../../routes/$types";

	export let contributors: PageData["contributors"];
</script>

<PageSection id="team-section">
	<div class="team-section-card">
		<div class="team-section-text">
			<HeaderChip>{$_("home.team.chip", defaultI18nValues)}</HeaderChip>
			<h2>{$_("home.team.title", defaultI18nValues)}</h2>
			<p>{$_("home.team.description", defaultI18nValues)}</p>
		</div>
		<div class="contributors-container">
			<div class="contributors-row">
				{#each contributors as { html_url, avatar_url, login, type }}
					<Contributor
						{html_url}
						{avatar_url}
						{login}
						{type}
					/>
				{/each}
			</div>
		</div>
		<div class="rainbow-background" />
	</div>
</PageSection>

<style lang="scss">
	@use "./TeamSection";
</style>
