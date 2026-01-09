<script>
	import Hero from '$lib/components/Hero.svelte';
	import CosaFacciamo from '$lib/components/CosaFacciamo.svelte';
	import HomepageCTA from '$lib/components/HomepageCTA.svelte';
	import WhereFindUs from '$lib/components/WhereFindUs.svelte';
    import News from '$lib/components/News.svelte';
</script>

<svelte:head>
	<title>Cuore a 4 Zampe – Protezione e adozione animali</title>
	<meta name="description" content="Associazione 4 a Quattro Zampe: tutela, recupero, adozione e sostegno agli animali." />
</svelte:head>

<main class="font-sans text-gray-900">
 	<Hero/>
 	<CosaFacciamo />
 	<News />
 	<HomepageCTA />
	<WhereFindUs />
</main>
