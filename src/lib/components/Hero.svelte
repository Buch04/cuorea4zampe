<script>
	import { onMount } from 'svelte';

	// Default carousel images — update filenames if necessary
	export let images = ['/hero.jpeg', '/hero-6.jpeg'];
	export let title = 'Dalla parte degli animali';
	export let subtitle = 'Sosteniamo, proteggiamo e cerchiamo casa agli animali più vulnerabili.';
	export let compact = false;

	let index = 0;
	let timer;
	const delay = 5000;

	function go(delta) {
		index = (index + delta + images.length) % images.length;
	}

	function goTo(i) {
		index = i % images.length;
	}

	onMount(() => {
		timer = setInterval(() => go(1), delay);
		return () => clearInterval(timer);
	});
</script>

<section class="relative">
	{#if compact}
		<div class="h-[60vh] md:h-[55vh] relative">
			<img src={images[index]} alt="Dalla parte degli animali" class="absolute inset-0 w-full h-full object-cover" />
			<div class="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30"></div>
			<div class="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
				<div class="max-w-3xl">
					<h1 class="text-4xl md:text-5xl font-extrabold text-white mb-3 leading-tight drop-shadow-lg">{title}</h1>
					<p class="text-base md:text-lg text-white mb-6 max-w-2xl opacity-90">{subtitle}</p>
					<div class="flex flex-col sm:flex-row gap-3 justify-center">
						<a href="/cosa-facciamo" class="inline-flex items-center justify-center bg-white text-red-600 px-6 py-2.5 font-semibold rounded-full shadow-lg hover:shadow-xl transform-gpu hover:-translate-y-0.5 transition">Scopri</a>
						<a href="/dona" class="inline-flex items-center justify-center border border-white/25 text-white px-5 py-2.5 font-semibold rounded-full hover:bg-white/10 transition">Dona</a>
					</div>
					<div class="flex justify-center gap-2 mt-6">
						{#each images as _, i}
							<button aria-label={i === index ? `Slide ${i+1} (current)` : `Slide ${i+1}`} class="w-3 h-3 rounded-full" on:click={() => { goTo(i); clearInterval(timer); timer = setInterval(() => go(1), delay); }} style="background: {i === index ? 'white' : 'rgba(255,255,255,0.4)'}"></button>
						{/each}
					</div>
				</div>
			</div>
		</div>
	{:else}
		<div class="h-screen relative">
			<img src={images[index]} alt="Dalla parte degli animali" class="absolute inset-0 w-full h-full object-cover" />
			<div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/40"></div>
			<div class="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
				<div class="max-w-3xl">
					<h1 class="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">{title}</h1>
					<p class="text-lg md:text-xl text-white mb-8 max-w-2xl opacity-90">{subtitle}</p>
					<div class="flex flex-col sm:flex-row gap-4 justify-center">
						<a href="/cosa-facciamo" class="inline-flex items-center justify-center bg-white text-red-600 px-8 py-3 font-semibold rounded-full shadow-lg hover:shadow-xl transform-gpu hover:-translate-y-0.5 transition">Scopri</a>
						<a href="/dona" class="inline-flex items-center justify-center border border-white/30 text-white px-7 py-3 font-semibold rounded-full hover:bg-white/10 transition">Dona</a>
					</div>
					<div class="flex justify-center gap-3 mt-8">
						{#each images as _, i}
							<button aria-label={i === index ? `Slide ${i+1} (current)` : `Slide ${i+1}`} class="w-3 h-3 rounded-full" on:click={() => { goTo(i); clearInterval(timer); timer = setInterval(() => go(1), delay); }} style="background: {i === index ? 'white' : 'rgba(255,255,255,0.35)'}"></button>
						{/each}
					</div>
				</div>
			</div>
		</div>
	{/if}
</section>