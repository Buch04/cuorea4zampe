<script>
	import Hero from '$lib/components/Hero.svelte';
	import CosaFacciamo from '$lib/components/CosaFacciamo.svelte';
	import Campagne from '$lib/components/Campagne.svelte';
	import News from '$lib/components/News.svelte';
	import CTASection from '$lib/components/CTASection.svelte';
</script>

<svelte:head>
	<title>Cuore a 4 Zampe – Protezione e adozione animali</title>
	<meta name="description" content="Associazione 4 a Quattro Zampe: tutela, recupero, adozione e sostegno agli animali." />
</svelte:head>

<main class="font-sans text-gray-900">
	<Hero />
	<CosaFacciamo />
	<Campagne />
	<News />
	<CTASection />
</main>
