<script lang="ts">
	import {
		TeamSection,
		AboutSection,
		FeaturesSection,
		TechnologiesSection,
		DemoSection,
	} from "$layout";
	import { defaultI18nValues, Metadata } from "$lib";
	import { _ } from "svelte-i18n";

	export let data;
	$: ({ contributors } = data);
</script>

<Metadata title={$_("metadata.home", defaultI18nValues)} />

<AboutSection />

<FeaturesSection />

<TechnologiesSection />

<TeamSection {contributors} />

<DemoSection />
