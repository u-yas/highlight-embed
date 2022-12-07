<script lang="ts">
	import 'carbon-components-svelte/css/white.css';
	import {
		Grid,
		Row,
		Column,
		TextArea,
		SelectItem,
		Select,
		Button
	} from 'carbon-components-svelte';
	import './another.css';
	import hljs from 'highlight.js';
	import { highlightThemes } from '../lib/themes';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let language = 'javascript';
	const languages = hljs.listLanguages();
	$: codeLang = `language-${language}`;
	let code = `import path from 'path';

const root = path.resolve(__dirname, '.');

console.log(root);
`;
	let theme = highlightThemes[0];

	const handleKeyup = () => {
		let codeTag = document.getElementById('code');

		const elem = hljs.highlightAuto(code, [language]);
		codeTag!.innerHTML = elem.value;

		localStorage.setItem('code', code);
	};

	const handleChangeLang = (e: CustomEvent<string | number>) => {
		language = e.detail as string;
		localStorage.setItem('language', language);
	};
	const handleChangeTheme = (e: CustomEvent<string | number>) => {
		theme = e.detail as string;
		localStorage.setItem('theme', theme);
	};

	onMount(() => {
		// localstorageにcodeのデータがあったらそれを使う
		const c = localStorage.getItem('code');
		if (c) {
			code = c;
		}
		const l = localStorage.getItem('language');
		if (l) {
			language = l;
		}
		const t = localStorage.getItem('theme');
		if (t) {
			theme = t;
		}
		let codeTag = document.getElementById('code');
		const elem = hljs.highlightAuto(code, [language]);
		codeTag!.innerHTML = elem.value;
	});
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href={`//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/${theme}.min.css`}
	/>
</svelte:head>
<div class="nav">
	<h1>Highlight embed</h1>
	<a href="https://github.com/u-yas/highlight-embed">Github</a>
</div>
<div class="select-lang-wrapper">
	<div class="select-lang">
		<Select size="sm" on:change={handleChangeLang} selected="javascript">
			{#each languages as l}
				<SelectItem value={l} />
			{/each}
		</Select>
	</div>
	<div class="select-lang">
		<Select on:change={handleChangeTheme}>
			{#each highlightThemes as theme}
				<SelectItem value={theme} />
			{/each}
		</Select>
	</div>
</div>
<div class="editor-wrapper">
	<Grid fullWidth>
		<Row>
			<div class="column-wrapper">
				<Column>
					<TextArea on:keyup={handleKeyup} placeholder="coding" rows={40} bind:value={code} />
				</Column>
			</div>
			<Column>
				<div class="code-wrapper">
					<pre><code id="code" class={`${codeLang} hljs`} />
            </pre>
				</div>
			</Column>
		</Row>
	</Grid>
</div>
<Grid fullWidth>
	<Row>
		<Column>
			<Button
				on:click={() => {
					const encoded = encodeURIComponent(code);
					navigator.clipboard.writeText(encoded).then(() => {
						alert('Copied to clipboard');
					});
				}}>Generate Link</Button
			>
		</Column>
		<Column>
			<Button
				on:click={() => {
					const encoded = encodeURIComponent(code);
					const path = `/embed?code=${encoded}&lang=${language}&theme=${theme}`;
					goto(path);
				}}>Preview</Button
			>
		</Column>
	</Row>
</Grid>

<style>
	.nav {
		height: 3rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #e0e0e0;
		font-weight: bold;
		padding-left: 3rem;
		padding-right: 3rem;
		padding-bottom: 2rem;
		padding-top: 2rem;
		background-color: whitesmoke;
	}
	.select-lang-wrapper {
		display: flex;
		justify-content: space-around;
		align-items: flex-end;
		height: 100%;
	}
	.select-lang {
		width: 30%;
		padding-top: 3rem;
		padding-left: 3rem;
	}
	.editor-wrapper {
		margin-top: 1.5rem;
		height: 700px;
		overflow-y: scroll;
	}
	.code-wrapper {
		height: 100%;
		border: 1px solid #e0e0e0;
	}

	.column-wrapper {
		width: 50%;
	}

	pre {
		height: 100%;
	}
	code {
		display: block;
		text-indent: 0;
		overflow-x: auto;
		height: 100%;
		padding: 1rem;
		font-family: 'Roboto Mono', monospace;
		font-size: 1rem;
	}
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
</style>
