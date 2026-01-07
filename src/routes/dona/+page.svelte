<script>
 	let amount = '';
 	let name = '';

 	function donate() {
 		console.log('Donazione proposta', { name, amount });
 		amount = '';
 		name = '';
 	}
</script>

<main class="max-w-4xl mx-auto px-4 pt-24 py-10">
 	<h1 class="text-3xl font-bold mb-4">Sostienici</h1>
 	<p class="text-gray-700 mb-6">Le donazioni ci permettono di curare animali, sostenere campagne di emergenza e mantenere i servizi dell'associazione. Di seguito le modalità per contribuire.</p>

 	<section class="mb-6">
 		<h2 class="text-xl font-semibold mb-2">Donazione online (temporanea)</h2>
 		<p class="text-gray-700 mb-3">Per ora è disponibile un form rapido come segnaposto: è possibile integrare un gateway di pagamento su richiesta.</p>

 		<form on:submit|preventDefault={donate} class="space-y-4 max-w-md">
 			<div>
 				<label class="block text-sm font-medium mb-1">Nome</label>
 				<input class="w-full border rounded px-3 py-2" bind:value={name} />
 			</div>

 			<div>
 				<label class="block text-sm font-medium mb-1">Importo (€)</label>
 				<input type="number" class="w-full border rounded px-3 py-2" bind:value={amount} />
 			</div>

 			<button type="submit" class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Invia donazione</button>
 		</form>
 	</section>

 	<section>
 		<h2 class="text-xl font-semibold mb-2">Bonifico bancario</h2>
 		<p class="text-gray-700 mb-1">Intestazione: Cuore a 4 Zampe ODV</p>
 		<p class="text-gray-700 mb-1">IBAN: IT00X0000000000000000000</p>
 		<p class="text-gray-700 mb-1">Causale: Donazione libero</p>
 		<p class="text-sm text-gray-600 mt-2">Se vuoi una ricevuta o informazioni fiscali contattaci via email: <a href="mailto:cuorea4zampebarberino@gmail.com" class="text-red-600 hover:underline">cuorea4zampebarberino@gmail.com</a></p>
 	</section>
</main>
