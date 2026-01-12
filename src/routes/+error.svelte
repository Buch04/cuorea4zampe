<script>
	import { page } from '$app/stores';
	import Spacer from '$lib/components/Spacer.svelte';
</script>

<svelte:head>
	<title>{$page.status} - Cuore a 4 Zampe</title>
</svelte:head>

<Spacer />

<div class="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center py-12">
	<h1 class="text-6xl font-bold text-red-600 mb-4">{$page.status}</h1>
	<p class="text-2xl font-semibold text-gray-900 mb-6">
		{$page.error?.message || 'Pagina non trovata'}
	</p>
	<p class="text-gray-600 mb-8 max-w-md mx-auto">
		Ci dispiace, sembra che la pagina che stai cercando non esista o sia stata spostata.
	</p>
	<a href="/" class="inline-block bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition duration-300 shadow-md">
		Torna alla Home
	</a>
</div>