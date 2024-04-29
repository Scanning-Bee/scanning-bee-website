<script lang="ts">
	import { navigating, page } from "$app/stores";
	import type { NavbarButton, NavbarItem } from "$data/links";
	import { _ } from "svelte-i18n";
	import { defaultI18nValues, externalLink, isUrlContainPath } from "$lib";
	import { ListItem } from "fluent-svelte";
	import Navigation from "~icons/fluent/navigation-24-regular";
	import type { SvelteComponent } from "svelte";
	import type { SvelteHTMLElements } from "svelte/elements";

	import { base } from "$app/paths";

	export let items: NavbarItem[] = [];
	export let buttons: NavbarButton[] = [];

	let innerWidth = 851; // Don't render the mobile layout before hydration
	let sidebarVisible = false;
	let sidebar: HTMLElement;
	let sidebarButton: HTMLButtonElement;

	const toggleSidebar = () => {
		sidebarVisible = !sidebarVisible;
	};

	const handleOuterClick = (e: MouseEvent) => {
		if (
			!(
				!sidebarVisible ||
				e.target === sidebarButton ||
				sidebarButton.contains(e.target as Node) ||
				e.target === sidebar ||
				sidebar.contains(e.target as Node)
			)
		) {
			toggleSidebar();
		}
	};

	const handleAnchorClick = (event: any) => {
		event.preventDefault();
		const link = event.currentTarget;

		const hash = new URL(link!.href).hash;

		console.log(hash);

		// ignore if the link is not an anchor
		if (!hash.startsWith("#")) {
			window.location.href = link.href;
			return;
		}

		window.location.href = link.href;

		const anchorId = hash.replace("#", "");
		const anchor = document.getElementById(`${anchorId}-section`);

		if (!anchor) return;

		window.scrollTo({
			top: anchor.offsetTop,
			behavior: "smooth",
		});

		window.history.pushState(null, "", hash);
	};

	$: {
		$navigating && (sidebarVisible = false);
	}
</script>

<svelte:window bind:innerWidth on:click={handleOuterClick} />

<header class="navbar">
	<nav class="inner">
		<a class="logo" href={base}>
			<picture>
				<source
					media="(prefers-color-scheme: dark)"
					srcset={base + "/branding/logo-dark.svg"}
				/>
				<source
					media="(prefers-color-scheme: light)"
					srcset={base + "/branding/logo-light.svg"}
				/>
				<img
					alt="Scanning Bee logo"
					class="logo-image"
					height="32"
					src={base + "/branding/logo-light.svg"}
					width="32"
				/>
			</picture>
			Scanning Bee
		</a>
		{#if innerWidth > 850}
			<div class="divider" />
			{#each items as { name, path, external, icon, type }}
				{#if type === "divider"}
					<div class="divider" />
				{:else}
					<a
						class="item"
						class:selected={isUrlContainPath($page.url.pathname, path)}
						href={path}
						target={external ? "_blank" : undefined}
						rel={external ? "noreferrer noopener" : undefined}
						on:click={handleAnchorClick}
					>
						{#if icon}
							<svelte:component this={icon} />
						{/if}
						<span>{name}</span>
					</a>
				{/if}
			{/each}
		{/if}
	</nav>
	<div class="buttons">
		{#if innerWidth > 850}
			{#each buttons as { name, href, external, imageSrc }}
				<a
					class="button"
					{href}
					aria-label={name}
					title={name}
					{...externalLink}
				>
					{#if imageSrc}
						<img alt={name} class="button-image" src={imageSrc} />
					{/if}
				</a>
			{/each}
		{:else}
			<button
				on:click={toggleSidebar}
				bind:this={sidebarButton}
				class="button sidebar-button"
			>
				<Navigation />
			</button>
		{/if}
	</div>
	<aside
		bind:this={sidebar}
		class="sidebar scroller"
		class:visible={sidebarVisible}
	>
		{#each items as { name, path, external, icon, type }}
			{#if type === "divider"}
				<hr />
			{/if}
			<ListItem
				type="navigation"
				on:click={toggleSidebar}
				selected={isUrlContainPath($page.url.pathname, path)}
				href={path}
				target={external ? "_blank" : undefined}
				rel={external ? "noreferrer noopener" : undefined}
			>
				<svelte:fragment slot="icon">
					{#if icon}
						<svelte:component this={icon} />
					{/if}
				</svelte:fragment>
				<span>{name}</span>
			</ListItem>
		{/each}
		<hr />
		{#each buttons as { name, href, external, imageSrc }}
			<ListItem {href} type="navigation" {...externalLink}>
				<svelte:fragment slot="icon">
					{#if imageSrc}
						<img
							alt={name}
							class="button-image"
							src={imageSrc}
							style="margin-inline-end: 12px;"
						/>
					{/if}
				</svelte:fragment>
				<span>{name}</span>
			</ListItem>
		{/each}
	</aside>
</header>

<style lang="scss">
	@use "./Navbar";
</style>
