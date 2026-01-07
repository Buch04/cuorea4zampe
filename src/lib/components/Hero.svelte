<script>
	export let image = '/hero.jpeg';
	export let title = 'Dalla parte degli animali';
	export let subtitle = 'Sosteniamo, proteggiamo e cerchiamo casa agli animali più vulnerabili.';
</script>

<section class="relative h-screen">
	<img src={image} alt="Dalla parte degli animali" class="absolute inset-0 w-full h-full object-cover" />
	<div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/40"></div>
	<div class="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
		<div class="max-w-3xl">
			<h1 class="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">{title}</h1>
			<p class="text-lg md:text-xl text-white mb-8 max-w-2xl opacity-90">{subtitle}</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="#adozioni" class="inline-flex items-center justify-center bg-white text-red-600 px-8 py-3 font-semibold rounded-full shadow-lg hover:shadow-xl transform-gpu hover:-translate-y-0.5 transition">Adotta ora</a>
				<a href="#sostieni" class="inline-flex items-center justify-center border border-white/30 text-white px-7 py-3 font-semibold rounded-full hover:bg-white/10 transition">Sostienici</a>
			</div>
		</div>
	</div>
</section>