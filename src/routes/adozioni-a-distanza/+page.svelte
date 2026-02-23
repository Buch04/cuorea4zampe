<script>
	import Spacer from '$lib/components/Spacer.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	let { form } = $props();
</script>

<div class="bg-gray-50 py-12">
	<Spacer />
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="lg:text-center">
			<h2 class="text-base text-red-600 font-semibold tracking-wide uppercase">
				Adozioni a Distanza
			</h2>
			<p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
				Un gesto d'amore che non conosce distanze
			</p>
			<p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
				Non puoi adottare un animale? Diventa un genitore a distanza! Con un piccolo contributo, ci
				aiuterai a prenderci cura dei nostri ospiti più bisognosi.
			</p>
		</div>

		<div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
			<div class="prose prose-lg text-gray-500 mx-auto">
				<h2>Come funziona l'adozione a distanza?</h2>
				<p>
					L'adozione a distanza è un modo meraviglioso per sostenere in modo continuativo un animale
					che, per motivi di salute, età avanzata o problemi comportamentali, ha poche probabilità
					di trovare una casa. Anche se non puoi portarlo con te, il tuo amore arriverà forte e
					chiaro.
				</p>
				<p>
					Il tuo contributo ci aiuterà a coprire le spese essenziali per il suo benessere, come:
				</p>
				<ul>
					<li>
						<strong>Cibo specifico</strong> e di alta qualità, adatto alle sue esigenze.
					</li>
					<li>
						<strong>Cure veterinarie costanti</strong>, acquisto di farmaci e terapie
						riabilitative.
					</li>
					<li>
						<strong>Tutto il necessario per il suo comfort</strong>: cucce, coperte calde, giochi e
						accessori.
					</li>
				</ul>
				<h2>Cosa ricevi in cambio?</h2>
				<p>
					Oltre alla gioia immensa di sapere di star facendo la differenza nella vita di un essere
					vivente, ti terremo aggiornato con racconti e foto sulla vita del nostro protetto.
					Vogliamo che tu senta parte della sua quotidianità e del suo percorso di rinascita.
				</p>
				<p>
					Se sei interessato a saperne di più o vuoi iniziare il tuo percorso di adozione a
					distanza, scrivici usando il modulo qui accanto.
				</p>
			</div>
			<div class="mt-12 md:mt-0">
				<ContactForm {form} />
			</div>
		</div>
	</div>
</div>
