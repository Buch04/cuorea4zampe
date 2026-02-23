<script>
	import { enhance } from '$app/forms';

	export let form = undefined;
</script>

<div class="bg-white p-8 rounded-lg shadow-lg">
	<h3 class="text-2xl font-bold text-gray-900">Scrivici un messaggio</h3>
	{#if form?.success}
		<div class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg" role="alert">
			<span class="font-bold">Grazie!</span> Il tuo messaggio è stato inviato correttamente.
		</div>
	{/if}
	{#if form?.error}
		<div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
			<span class="font-bold">Errore!</span> {form.message || "Si è verificato un problema durante l'invio."}
		</div>
	{/if}
	<form method="POST" use:enhance class="mt-6 space-y-6">
		<!-- Honeypot field (anti-spam) -->
		<div class="hidden" aria-hidden="true">
			<label for="website">Non compilare questo campo</label>
			<input type="text" name="website" id="website" tabindex="-1" autocomplete="off" />
		</div>
		<div>
			<label for="name" class="block text-sm font-medium text-gray-700">Nome</label>
			<input
				type="text"
				name="name"
				id="name"
				required
				class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
			/>
		</div>
		<div>
			<label for="email" class="block text-sm font-medium text-gray-700">Email</label>
			<input
				type="email"
				name="email"
				id="email"
				required
				class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
			/>
		</div>
		<div>
			<label for="message" class="block text-sm font-medium text-gray-700">Messaggio</label>
			<textarea
				name="message"
				id="message"
				rows="4"
				required
				class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
			></textarea>
		</div>
		<div>
			<button
				type="submit"
				class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
			>
				Invia messaggio
			</button>
		</div>
	</form>
</div>
