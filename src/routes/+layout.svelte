<script lang="ts">
	import '../app.css';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
	
	let { children } = $props();
</script>


<Navbar>
	<NavBrand href="/">
		<span class="self-center text-xl font-semibold-whitespace-nowrap dark:text-white">The Thinternet</span>
	</NavBrand>

	<NavHamburger />

	<NavUl>
		<NavLi href="#">About</NavLi>
	</NavUl>
</Navbar>

{@render children()}
