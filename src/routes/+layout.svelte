<script lang="ts">
	import '../app.css';
	import { fade } from 'svelte/transition';

	import type { LayoutProps } from './$types';

	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
	import { Alert } from 'flowbite-svelte';
	import { TriangleAlert } from 'lucide-svelte';
	

	let { data, children }: LayoutProps = $props();

	let intranetAlert = $state(false);
	// $inspect(intranetAlert)
	console.log(`Client is intranet: ${data.clientIsIntranet}`)
</script>


<Navbar>
	<NavBrand href="/">
		<span class="self-center text-xl font-semibold-whitespace-nowrap dark:text-white">The Thinternet</span>
	</NavBrand>
	<NavHamburger />

	<NavUl>
			{#if data.clientIsIntranet}
				<NavLi href="https://links.thinter.net">Links</NavLi>
			{:else}
				<NavLi onclick={(e) => {
					intranetAlert = true;
					setTimeout(() => intranetAlert = false, 2500);
				}}>Links</NavLi>
			{/if}
	</NavUl>
</Navbar>

{#if intranetAlert}
	<div transition:fade class="absolute right-0">
		<Alert color="red" class="mx-4">
			{#snippet icon()}<TriangleAlert class="h-5 w-5" />{/snippet}
			You need to be on the local Thinternet Intranet to access that page.
		</Alert>
	</div>
{/if}

<main class="w-screen sm:w-128 md:w-144 px-3 sm:mx-auto mb-16">
	{@render children()}
</main>
