<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.ico';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Cuore a Quattro Zampe – Protezione animali</title>
	<meta
		name="description"
		content="Associazione Cuore a Quattro Zampe: tutela, recupero e adozione di animali in difficoltà."
	/>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />

<main>
	<slot />
</main>

<Footer />
