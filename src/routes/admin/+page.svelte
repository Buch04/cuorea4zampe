<script>
	import { onMount } from 'svelte'
	import PostForm from '$lib/components/PostForm.svelte'
	import PageForm from '$lib/components/PageForm.svelte'

	let posts = []
	let pages = []

	// Simuliamo fetch dal backend
	onMount(async () => {
		// Qui puoi sostituire con fetch reale da /api/posts e /api/pages
		posts = [
			{ id: 1, title: 'Evento adozione primavera', slug: 'evento-adozione-primavera' },
			{ id: 2, title: 'Campagna ferie sicure', slug: 'campagna-ferie-sicure' }
		]

		pages = [
			{ id: 1, title: 'Chi siamo', slug: 'chi-siamo' },
			{ id: 2, title: 'Contatti', slug: 'contatti' }
		]
	})

	let selectedPost = null
	let selectedPage = null

	function editPost(post) {
		selectedPost = { ...post }
	}

	function editPage(page) {
		selectedPage = { ...page }
	}

	function deletePost(id) {
		posts = posts.filter(p => p.id !== id)
	}

	function deletePage(id) {
		pages = pages.filter(p => p.id !== id)
	}
</script>

<main class="p-6 font-sans">
	<h1 class="text-3xl font-bold mb-6">Area Amministrativa</h1>

	<section class="mb-10">
		<h2 class="text-2xl font-semibold mb-4">Gestione Post</h2>
		<ul class="mb-4">
			{#each posts as post}
				<li class="flex justify-between items-center mb-2 p-2 bg-gray-100 rounded">
					<span>{post.title}</span>
					<div class="flex gap-2">
						<button class="bg-blue-600 text-white px-3 py-1 rounded" on:click={() => editPost(post)}>Modifica</button>
						<button class="bg-red-600 text-white px-3 py-1 rounded" on:click={() => deletePost(post.id)}>Elimina</button>
					</div>
				</li>
			{/each}
		</ul>
		<PostForm bind:selectedPost />
	</section>

	<section>
		<h2 class="text-2xl font-semibold mb-4">Gestione Pagine</h2>
		<ul class="mb-4">
			{#each pages as page}
				<li class="flex justify-between items-center mb-2 p-2 bg-gray-100 rounded">
					<span>{page.title}</span>
					<div class="flex gap-2">
						<button class="bg-blue-600 text-white px-3 py-1 rounded" on:click={() => editPage(page)}>Modifica</button>
						<button class="bg-red-600 text-white px-3 py-1 rounded" on:click={() => deletePage(page.id)}>Elimina</button>
					</div>
				</li>
			{/each}
		</ul>
		<PageForm bind:selectedPage />
	</section>
</main>
