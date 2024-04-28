<script lang="ts">
	import { dev } from "$app/environment";
	import { page } from "$app/stores";

	import { defaultI18nValues } from "$lib";
	import { Footer, Navbar } from "$layout";
	import { _ } from "svelte-i18n";

	import "fluent-svelte/theme.css";

	import Chat from "~icons/fluent/chat-24-regular";
	import Code from "~icons/fluent/code-24-regular";
	import Home from "~icons/fluent/home-24-regular";
	import Book from "~icons/fluent/book-24-regular";
	import Team from "~icons/fluent/people-audience-24-regular";
	import Download from "~icons/fluent/arrow-download-24-regular";
	import { afterNavigate, onNavigate } from "$app/navigation";
	import { onMount } from "svelte";
	import type { NavbarButton, NavbarItem } from "$data/links";

	import { base } from "$app/paths";
	// import PaintBrush from "~icons/fluent/paint-brush-24-regular";

	const navbarItems: NavbarItem[] = [
		{
			name: $_("navbar.home", defaultI18nValues),
			path: base + "/",
			icon: Home,
		},
		{
			name: $_("navbar.features"),
			path: base + "/#features",
			icon: Book,
		},
		{
			name: $_("navbar.technologies"),
			path: base + "/#technologies",
			icon: Code,
		},
		{
			name: $_("navbar.team"),
			path: base + "/#team",
			icon: Team,
		},
		{
			name: $_("navbar.download"),
			path: base + "/download",
			icon: Download,
		},
	];

	const navbarButtons: NavbarButton[] = [
		{
			name: $_("navbar.ceng", defaultI18nValues),
			href: "https://ceng.metu.edu.tr/",
			imageSrc: base + "/logos/ceng.png",
			external: true,
		},
		{
			name: $_("navbar.metu", defaultI18nValues),
			href: "https://metu.edu/",
			imageSrc: base + "/logos/metu.png",
			external: true,
		},
		/* {
			name: $_("navbar.roboroyale", defaultI18nValues),
			href: "https://roboroyale.eu/",
			imageSrc: "https://roboroyale.eu/assets/img/logo.png",
			external: true,
		} */
	];

	onNavigate(async navigation => {
		if (!document.startViewTransition) return;

		return new Promise(resolve => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<meta content="Scanning Bee" name="og:site_name" />

	<meta content="website" name="og:type" />

	<link
		href="{base}/branding/logo{$page.route.id === 'themes'
			? '-themes'
			: ''}-light.svg"
		rel="icon"
		type="image/svg+xml"
		media="(prefers-color-scheme: light)"
	/>
	<link
		href="{base}/branding/logo{$page.route.id === 'themes'
			? '-themes'
			: ''}-dark.svg"
		rel="icon"
		type="image/svg+xml"
		media="(prefers-color-scheme: dark)"
	/>

	<meta
		content="Scanning Bee, Beehive, Annotator, Visualisor"
		name="keywords"
	/>
	<meta content="Scanning Bee Team" name="author" />

	<meta content="#005fb8" name="theme-color" />

	<meta content="summary_large_image" name="twitter:card" />

	<!-- {#if !dev && $page.url.host === "files.community"}
		<script type="text/javascript">
			(function (c, l, a, r, i, t, y) {
				c[a] =
					c[a] ||
					function () {
						(c[a].q = c[a].q || []).push(arguments);
					};
				t = l.createElement(r);
				t.async = true;
				t.src = "https://www.clarity.ms/tag/" + i;
				y = l.getElementsByTagName(r)[0];
				y.parentNode.insertBefore(t, y);
			})(window, document, "clarity", "script", "4q1wajdktz");
		</script>
	{/if} -->
</svelte:head>

<Navbar buttons={navbarButtons} items={navbarItems} />
<slot />
<Footer />

<style global lang="scss">
	@use "src/styles/global";
	@use "src/styles/markdown";
</style>
