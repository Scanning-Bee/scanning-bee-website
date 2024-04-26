<script lang="ts">
	import { links } from "$data/links";
	import {
		Contributor,
		defaultI18nValues,
		HeaderChip,
		PageSection,
	} from "$lib";
	import { Button } from "fluent-svelte";
	import { _ } from "svelte-i18n";
	import Profile from "~icons/fluent/person-32-filled?raw";
	import type { PageData } from "../../routes/$types";

	export let contributors: PageData["contributors"];
</script>

<PageSection id="team-section">
	<div class="team-section-card">
		<div class="team-section-text">
			<HeaderChip>{$_("home.team.chip", defaultI18nValues)}</HeaderChip>
			<h2>{$_("home.team.title", defaultI18nValues)}</h2>
			<p>{$_("home.team.description", defaultI18nValues)}</p>
			<div class="buttons-spacer">
			</div>
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
