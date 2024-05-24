<script lang="ts">
	import {
		TeamSection,
		AboutSection,
		FeaturesSection,
		TechnologiesSection,
		DemoSection,
		FirstITWSection,
		DownloadSection,
	} from "$layout";
	import { defaultI18nValues, Metadata } from "$lib";
	import { _ } from "svelte-i18n";

	export let data;
	$: ({ contributors } = data);
</script>

<Metadata title={$_("metadata.home", defaultI18nValues)} />

<AboutSection />

<FirstITWSection />

<FeaturesSection />

<TechnologiesSection />

<TeamSection {contributors} />

<DemoSection />

<DownloadSection />
