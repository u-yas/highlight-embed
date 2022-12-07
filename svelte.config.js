import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			strict: false
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/highlight-embed' : ''
		}
	}
};

export default config;
