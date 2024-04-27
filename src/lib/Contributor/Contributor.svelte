<script lang="ts">
	import { externalLink } from "$lib";
	import { PersonPicture } from "fluent-svelte";
	import { _ } from "svelte-i18n";

	export let html_url: string | undefined = undefined;
	export let avatar_url: string | undefined = undefined;
	export let type = "User";
	export let login = "Unknown";
</script>

{#if type === "Software Engineer" || type === "Advisor"}
	<a tabindex="-1" class="contributor" href={html_url} {...externalLink}>
		<div style="width: 64px !important; height: 64px !important;">
			<PersonPicture
				src={avatar_url}
				size={64}
				alt="{login}'s avatar"
				loading="lazy"
			/>
		</div>
		<div class="info">
			<h5>{login}</h5>
			<span>
				{type === "Software Engineer"
					? $_("home.team.softwareEngineer")
					: $_("home.team.advisor")}
			</span>
		</div>
	</a>
{/if}

<style lang="scss">
	@use "./Contributor";
</style>
