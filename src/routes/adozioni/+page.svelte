<script>
	import Spacer from '$lib/components/Spacer.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	let { form } = $props();
</script>

<div class="bg-gray-50 py-12">
	<Spacer />
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="lg:text-center">
			<h2 class="text-base text-red-600 font-semibold tracking-wide uppercase">Adozioni</h2>
			<p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
				Un gesto d'amore che cambia una vita
			</p>
			<p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
				Adottare un animale è una scelta di grande responsabilità e amore. Significa offrire una
				seconda possibilità a chi ha conosciuto l'abbandono e la solitudine.
			</p>
		</div>

		<div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
			<div class="prose prose-lg text-gray-500 mx-auto">
				<h2>Il nostro processo di adozione</h2>
				<p>
					Crediamo che l'adozione debba essere un processo consapevole e sereno, sia per te che per
					il tuo futuro amico. Per questo motivo, non mettiamo i nostri animali "in vetrina".
					Preferiamo invece un approccio basato sulla conoscenza reciproca.
				</p>
				<p>
					Il nostro staff è a tua completa disposizione per guidarti nella scelta dell'animale che
					meglio si adatta al tuo stile di vita, alla tua personalità e alla tua famiglia.
					Organizziamo incontri conoscitivi per creare un legame fin dal primo momento.
				</p>
				<h2>Perché adottare?</h2>
				<ul>
					<li>
						<strong>Salvi una vita:</strong> Offri una casa a un animale che ne ha disperatamente
						bisogno e liberi un posto per un altro animale in difficoltà.
					</li>
					<li>
						<strong>Combatti il randagismo:</strong> L'adozione è l'arma più potente contro il
						sovraffollamento di canili e gattili e l'abbandono.
					</li>
					<li>
						<strong>Trovi un amico per sempre:</strong> L'amore di un animale è incondizionato. Ti
						riempirà la vita di gioia e affetto.
					</li>
				</ul>
				<p>
					Se sei interessato a saperne di più o vuoi iniziare il tuo percorso di adozione,
					scrivici usando il modulo qui accanto. Saremo felici di rispondere a tutte le tue domande.
				</p>
			</div>
			<div class="mt-12 md:mt-0">
				<ContactForm {form} />
			</div>
		</div>
	</div>
</div>
