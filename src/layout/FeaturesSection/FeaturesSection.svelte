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

	import HexagonThree from "~icons/fluent/hexagon-three-24-regular";
	import BrainCircuit from "~icons/fluent/brain-circuit-24-regular";
	import Database from "~icons/fluent/database-24-regular";
	import DesktopEdit from "~icons/fluent/desktop-edit-24-regular";
	import ImageSearch from "~icons/fluent/image-search-24-regular";
	import CheckmarkLock from "~icons/fluent/checkmark-lock-24-regular";
	import PeopleCommunity from "~icons/fluent/people-community-24-regular";
	import DataScatter from "~icons/fluent/data-scatter-24-regular";
	import Color from "~icons/fluent/color-24-regular";

	export const featureCards: { [name: string]: FeatureCardData } = {
		beehive: {
			title: $_("home.features.beehive.title", defaultI18nValues),
			description: $_("home.features.beehive.description", defaultI18nValues),
			icon: HexagonThree,
		},
		aiDetection: {
			title: $_("home.features.aiDetection.title", defaultI18nValues),
			description: $_("home.features.aiDetection.description", defaultI18nValues),
			icon: BrainCircuit,
		},
		database: {
			title: $_("home.features.database.title", defaultI18nValues),
			description: $_("home.features.database.description", defaultI18nValues),
			icon: Database,
		},
		annotate: {
			title: $_("home.features.annotate.title", defaultI18nValues),
			description: $_("home.features.annotate.description", defaultI18nValues),
			icon: DesktopEdit,
		},
		preview: {
			title: $_("home.features.preview.title", defaultI18nValues),
			description: $_("home.features.preview.description", defaultI18nValues),
			icon: ImageSearch,
		},
		security: {
			title: $_("home.features.security.title", defaultI18nValues),
			description: $_("home.features.security.description", defaultI18nValues),
			icon: CheckmarkLock,
		},
		userModes: {
			title: $_("home.features.userModes.title", defaultI18nValues),
			description: $_("home.features.userModes.description", defaultI18nValues),
			icon: PeopleCommunity,
		},
		statistics: {
			title: $_("home.features.statistics.title", defaultI18nValues),
			description: $_("home.features.statistics.description", defaultI18nValues),
			icon: DataScatter,
		},
		themes: {
			title: $_("home.features.themes.title", defaultI18nValues),
			description: $_("home.features.themes.description", defaultI18nValues),
			icon: Color,
			customizable: true,
		},
	};
</script>

<PageSection id="features-section">
	<div class="features-section-right">
		<HeaderChip>{$_("home.features.chip")}</HeaderChip>
		<h2
			style="text-align: center;"
		>{$_("home.features.title")}</h2>
		<p
			style="text-align: center;"
		>{$_("home.features.description", defaultI18nValues)}</p>
		<hr />
		<div class="feature-cards-container">
			{#each entries(featureCards) as [id, feature] (id)}
				<FeatureCard description={feature.description} icon={feature.icon} customizable={feature.customizable}>
					{feature.title}
				</FeatureCard>
			{/each}
		</div>
	</div>
</PageSection>

<style lang="scss">
	@use "FeaturesSection";
</style>
