<script>
	import Hero from '$lib/components/Hero.svelte';
	import AdozioniCTA from '$lib/components/AdozioniCTA.svelte';
	import SostieniciPreview from '$lib/components/SostieniciPreview.svelte';
	import VolontariatoPreview from '$lib/components/VolontariatoPreview.svelte';
	import Eventi from '$lib/components/Eventi.svelte';
</script>

<svelte:head>
	<title>Cuore a 4 Zampe – Protezione e adozione animali</title>
	<meta name="description" content="Associazione 4 a Quattro Zampe: tutela, recupero, adozione e sostegno agli animali." />
</svelte:head>

<main class="font-sans text-gray-900">
 	<Hero/>
	
	<!-- Stats Section -->
	<section class="py-16 bg-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-2 md:grid-cols-4 gap-8">
				<div class="text-center">
					<div class="text-4xl md:text-5xl font-extrabold text-red-600 mb-2">200+</div>
					<div class="text-gray-600 font-medium">Animali salvati</div>
				</div>
				<div class="text-center">
					<div class="text-4xl md:text-5xl font-extrabold text-red-600 mb-2">150+</div>
					<div class="text-gray-600 font-medium">Adozioni felici</div>
				</div>
				<div class="text-center">
					<div class="text-4xl md:text-5xl font-extrabold text-red-600 mb-2">10+</div>
					<div class="text-gray-600 font-medium">Volontari attivi</div>
				</div>
				<div class="text-center">
					<div class="text-4xl md:text-5xl font-extrabold text-red-600 mb-2">3+</div>
					<div class="text-gray-600 font-medium">Anni di attività</div>
				</div>
			</div>
		</div>
	</section>

	<AdozioniCTA />
	<Eventi />
	<SostieniciPreview />
	<VolontariatoPreview />

	<!-- Mission Section -->
	<section class="py-16 bg-gradient-to-br from-red-50 to-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="max-w-3xl mx-auto text-center">
				<h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">La nostra missione</h2>
				<p class="text-lg text-gray-700 leading-relaxed mb-8">
					Crediamo che ogni animale meriti amore, rispetto e una seconda possibilità. 
					Lavoriamo ogni giorno per salvare, curare e trovare una famiglia a cani e gatti 
					abbandonati o in difficoltà, promuovendo una cultura di responsabilità e compassione.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a href="/chi-siamo" class="inline-flex items-center justify-center bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition shadow-lg">
						Scopri chi siamo
					</a>
					<a href="/contatti" class="inline-flex items-center justify-center border-2 border-red-600 text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-red-50 transition">
						Contattaci
					</a>
				</div>
			</div>
		</div>
	</section>
</main>
