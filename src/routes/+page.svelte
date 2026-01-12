<script>
	import Hero from '$lib/components/Hero.svelte';
	import AdozioniPreview from '$lib/components/AdozioniPreview.svelte';
	import SostieniciPreview from '$lib/components/SostieniciPreview.svelte';
	import VolontariatoPreview from '$lib/components/VolontariatoPreview.svelte';
</script>

<svelte:head>
	<title>Cuore a 4 Zampe – Protezione e adozione animali</title>
	<meta name="description" content="Associazione 4 a Quattro Zampe: tutela, recupero, adozione e sostegno agli animali." />
</svelte:head>

<main class="font-sans text-gray-900">
 	<Hero/>
	<AdozioniPreview />
	<SostieniciPreview />
	<VolontariatoPreview />
</main>
