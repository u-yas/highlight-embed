import type { PageLoad } from './$types';

export const prerender = false;
export const trailingSlash = 'always';

export const load: PageLoad<{
	theme: string | null;
	lang: string | null;
	code: string | null;
}> = ({ url }) => {
	const lang = url.searchParams.get('lang') || null;
	const theme = url.searchParams.get('theme') || null;
	const code = url.searchParams.get('code') || null;
	return { lang, theme, code };
};
