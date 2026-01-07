<script>
	export let selectedPage = null
	let title = ''
	let slug = ''

	$: if (selectedPage) {
		title = selectedPage.title
		slug = selectedPage.slug
	}

	function savePage() {
		if (selectedPage) {
			selectedPage.title = title
			selectedPage.slug = slug
		} else {
			console.log('Nuova pagina', { title, slug })
		}
		selectedPage = null
		title = ''
		slug = ''
	}
</script>

<div class="p-4 bg-white shadow rounded">
	<h3 class="font-semibold mb-2">{selectedPage ? 'Modifica Pagina' : 'Nuova Pagina'}</h3>
	<input type="text" placeholder="Titolo" bind:value={title} class="border p-2 w-full mb-2 rounded">
	<input type="text" placeholder="Slug" bind:value={slug} class="border p-2 w-full mb-2 rounded">
	<button class="bg-green-600 text-white px-4 py-2 rounded" on:click={savePage}>
		{selectedPage ? 'Aggiorna' : 'Crea'}
	</button>
</div>
