<script>
	import Spacer from '$lib/components/Spacer.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';

	let { data, form } = $props();
</script>

<div class="bg-gray-50 py-12">
	<Spacer />
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="lg:text-center">
			<h2 class="text-base text-red-600 font-semibold tracking-wide uppercase">Contatti</h2>
			<p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
				Mettiti in contatto con noi
			</p>
			<p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
				Hai domande, vuoi proporre una collaborazione o segnalare un animale in difficoltà? Siamo
				qui per ascoltarti.
			</p>
		</div>

		<div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
			<!-- Contact Form -->
			<ContactForm {form} />

			<!-- Contact Info -->
			<div class="space-y-6">
				<div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
					<h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
						<svg
							class="w-5 h-5 text-red-600"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
							></path>
						</svg>
						Sede Legale
					</h3>
					<p class="text-gray-700 leading-relaxed">
						<strong class="text-gray-900">Cuore a 4 Zampe ODV</strong><br />
						Via della Miniera 11<br />
						50031 Barberino di Mugello (FI)<br />
						<span class="text-sm text-gray-600">Cod. Fisc. 90036700481</span>
					</p>
				</div>

				<div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
					<h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
						<svg
							class="w-5 h-5 text-red-600"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
							></path>
						</svg>
						Referenti
					</h3>
					<div class="space-y-4">
						<div class="flex items-start gap-3">
							<div
								class="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center"
							>
								<span class="text-red-600 font-semibold text-sm">MA</span>
							</div>
							<div>
								<p class="font-semibold text-gray-900">Murafa Ala</p>
								<a
									href="tel:+393283511533"
									class="text-red-600 hover:text-red-700 flex items-center gap-1 text-sm"
								>
									<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
										></path>
									</svg>
									328 3511533
								</a>
							</div>
						</div>
						<div class="flex items-start gap-3">
							<div
								class="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center"
							>
								<span class="text-red-600 font-semibold text-sm">CA</span>
							</div>
							<div>
								<p class="font-semibold text-gray-900">Corti Alessandra</p>
								<a
									href="tel:+393386495821"
									class="text-red-600 hover:text-red-700 flex items-center gap-1 text-sm"
								>
									<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
										></path>
									</svg>
									338 6495821
								</a>
							</div>
						</div>
					</div>
				</div>

				<div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
					<h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
						<svg
							class="w-5 h-5 text-red-600"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							></path>
						</svg>
						Email
					</h3>
					<a
						href="mailto:cuorea4zampebarberino@gmail.com"
						class="text-red-600 hover:text-red-700 break-all"
					>
						cuorea4zampebarberino@gmail.com
					</a>
				</div>

				<div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
					<h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
						<svg
							class="w-5 h-5 text-red-600"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
							></path>
						</svg>
						Orari
					</h3>
					<p class="text-gray-700">
						Puoi trovarci in rifugio <strong class="text-gray-900">su appuntamento</strong>.<br />
						Contattaci per organizzare una visita!
					</p>
				</div>
			</div>
		</div>

		<!-- Map -->
		<div class="mt-16">
			<h3 class="text-2xl font-bold text-gray-900 text-center mb-4">Come raggiungerci</h3>
			<div class="aspect-w-16 aspect-h-9">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2870.737569106512!2d11.23543931550808!3d44.0083399791106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132b1c67e1a9d36b%3A0x566a544b55a6534!2sVia%20della%20Miniera%2C%2011%2C%2050031%20Barberino%20di%20Mugello%20FI!5e0!3m2!1sit!2sit!4v1673534567890!5m2!1sit!2sit"
					width="100%"
					height="100%"
					style="border:0;"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				>
				</iframe>
			</div>
		</div>
	</div>
</div>
