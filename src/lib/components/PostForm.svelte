<script>
	export let selectedPost = null
	let title = ''
	let slug = ''

	$: if (selectedPost) {
		title = selectedPost.title
		slug = selectedPost.slug
	}

	function savePost() {
		if (selectedPost) {
			selectedPost.title = title
			selectedPost.slug = slug
		} else {
			// Logica aggiunta nuovo post
			console.log('Nuovo post', { title, slug })
		}
		selectedPost = null
		title = ''
		slug = ''
	}
</script>

<div class="p-4 bg-white shadow rounded">
	<h3 class="font-semibold mb-2">{selectedPost ? 'Modifica Post' : 'Nuovo Post'}</h3>
	<input type="text" placeholder="Titolo" bind:value={title} class="border p-2 w-full mb-2 rounded">
	<input type="text" placeholder="Slug" bind:value={slug} class="border p-2 w-full mb-2 rounded">
	<button class="bg-green-600 text-white px-4 py-2 rounded" on:click={savePost}>
		{selectedPost ? 'Aggiorna' : 'Crea'}
	</button>
</div>
