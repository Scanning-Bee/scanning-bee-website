<script lang="ts">
	import { _ } from "svelte-i18n";

	import type { FeatureCardData } from "$data/features";
	import {
		defaultI18nValues,
		entries,
		FeatureCard,
		HeaderChip,
		PageSection,
	} from "$lib";

	import Cloud from "~icons/fluent/cloud-24-regular";
	import EyeVisible from "~icons/fluent/eye-20-regular";
	import Archive from "~icons/fluent/folder-zip-24-regular";
	import Columns from "~icons/fluent/panel-left-28-regular";
	import TabDesktop from "~icons/fluent/tab-desktop-20-regular";
	import Tag from "~icons/fluent/tag-24-regular";
	import Branch from "~icons/fluent/branch-24-regular";
	import Hash from "~icons/fluent/number-symbol-24-regular";
	import Diamond from "~icons/fluent/diamond-24-regular";
	import PanelRight from "~icons/fluent/panel-right-24-regular";

	export const featureCards = {
		/* tabs: {
			title: $_("home.features.tabs.title", defaultI18nValues),
			description: $_("home.features.tabs.description", defaultI18nValues),
			icon: TabDesktop,
		}, */
		beehive: {
			title: $_("home.features.beehive.title", defaultI18nValues),
			description: $_("home.features.beehive.description", defaultI18nValues),
			icon: Cloud,
		},
		aiDetection: {
			title: $_("home.features.aiDetection.title", defaultI18nValues),
			description: $_("home.features.aiDetection.description", defaultI18nValues),
			icon: EyeVisible,
		},
		database: {
			title: $_("home.features.database.title", defaultI18nValues),
			description: $_("home.features.database.description", defaultI18nValues),
			icon: Archive,
		},
		annotate: {
			title: $_("home.features.annotate.title", defaultI18nValues),
			description: $_("home.features.annotate.description", defaultI18nValues),
			icon: Columns,
		},
		preview: {
			title: $_("home.features.preview.title", defaultI18nValues),
			description: $_("home.features.preview.description", defaultI18nValues),
			icon: TabDesktop,
		},
		security: {
			title: $_("home.features.security.title", defaultI18nValues),
			description: $_("home.features.security.description", defaultI18nValues),
			icon: Tag,
		},
		userModes: {
			title: $_("home.features.userModes.title", defaultI18nValues),
			description: $_("home.features.userModes.description", defaultI18nValues),
			icon: Branch,
		},
		statistics: {
			title: $_("home.features.statistics.title", defaultI18nValues),
			description: $_("home.features.statistics.description", defaultI18nValues),
			icon: Hash,
		},
		themes: {
			title: $_("home.features.themes.title", defaultI18nValues),
			description: $_("home.features.themes.description", defaultI18nValues),
			icon: Diamond,
		},
	} as const satisfies { [name: string]: FeatureCardData };
</script>

<PageSection id="features-section">
	<div class="features-section-right">
		<HeaderChip>{$_("home.features.chip")}</HeaderChip>
		<h2>{$_("home.features.title")}</h2>
		<p>{$_("home.features.description", defaultI18nValues)}</p>
		<hr />
		<div class="feature-cards-container">
			{#each entries(featureCards) as [id, feature] (id)}
				<FeatureCard description={feature.description}>
					<svelte:component this={feature.icon} slot="icon" />
					{feature.title}
				</FeatureCard>
			{/each}
		</div>
	</div>
</PageSection>

<style lang="scss">
	@use "TechnologiesSection";
</style>
