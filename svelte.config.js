import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import rehypeCallouts from 'rehype-callouts';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(), 
		mdsvex({
			extensions: ['.md'],
			rehypePlugins: [ rehypeCallouts ],
		})
	],
	kit: { adapter: adapter() },
	extensions: [
		'.svelte', 
		'.svx'
	]
};

export default config;
