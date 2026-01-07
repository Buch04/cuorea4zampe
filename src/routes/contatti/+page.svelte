<script>
	let name = '';
	let email = '';
	let message = '';

 	function submitForm() {
 		console.log('Contatto inviato', { name, email, message });
 		name = '';
 		email = '';
 		message = '';
 	}
</script>

<main class="max-w-4xl mx-auto px-4 pt-24 py-10">
 	<h1 class="text-3xl font-bold mb-4">Contatti</h1>
 	<p class="text-gray-700 mb-6">Per informazioni, adozioni, segnalazioni o proposte di volontariato usa il form o i riferimenti qui sotto.</p>

 	<section class="grid gap-8 md:grid-cols-2">
 		<section>
 			<h2 class="text-lg font-semibold mb-2">Dove siamo</h2>
 			<p class="text-gray-700">Cuore a 4 Zampe ODV</p>
 			<p class="text-gray-700">Via della Miniera 11, 50031 Barberino di Mugello (FI)</p>
 			<p class="text-gray-700">Cod. Fisc. 90036700481</p>
 			<div class="mt-3 text-gray-700">
 				<p><strong>Referente:</strong> MURAFA ALA</p>
 				<p><strong>Tel:</strong> 3283511533</p>
 				<p><strong>Email:</strong> <a href="mailto:cuorea4zampebarberino@gmail.com" class="text-red-600 hover:underline">cuorea4zampebarberino@gmail.com</a></p>
 			</div>
 		</section>

 		<form on:submit|preventDefault={submitForm} class="space-y-4">
 			<div>
 				<label for="name" class="block text-sm font-medium mb-1">Nome</label>
 				<input id="name" class="w-full border rounded px-3 py-2" bind:value={name} required />
 			</div>

 			<div>
 				<label for="email" class="block text-sm font-medium mb-1">Email</label>
 				<input id="email" type="email" class="w-full border rounded px-3 py-2" bind:value={email} required />
 			</div>

 			<div>
 				<label for="message" class="block text-sm font-medium mb-1">Messaggio</label>
 				<textarea id="message" class="w-full border rounded px-3 py-2 h-32" bind:value={message} required></textarea>
 			</div>

 			<button type="submit" class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Invia messaggio</button>
 		</form>
 	</section>
</main>
