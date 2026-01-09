<script>
	export let heading = 'Fai la differenza oggi';
	export let sub = 'Scegli come aiutare: adotta, sostieni o diventa volontario.';
</script>

<section class="bg-gray-50 py-12 px-6">
 	<div class="max-w-4xl mx-auto text-center">
 		<h2 class="text-3xl font-extrabold text-gray-900 mb-2">{heading}</h2>
 		<p class="text-lg text-gray-700 mb-4">{sub}</p>
 		<div class="flex flex-col sm:flex-row justify-center gap-4">
 			<a href="/cosa-facciamo" class="inline-block bg-white text-red-600 px-6 py-3 rounded-full font-semibold shadow-sm hover:shadow-md transition">Adotta</a>
 			<a href="/dona" class="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-semibold shadow-sm hover:bg-red-700 transition">Dona</a>
 		</div>
 	</div>
</section>
