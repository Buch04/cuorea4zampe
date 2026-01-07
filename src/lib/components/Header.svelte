<script>
	export let logoSrc = '/logo.png';
</script>

<header class="absolute top-0 left-0 right-0 z-40">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-20 py-3">
			<div class="flex items-center">
				<a href="/" class="flex items-center gap-3">
					<img src={logoSrc} alt="Cuore a Quattro Zampe" class="h-12 w-auto rounded-full border border-white/20 shadow-sm" />
					<span class="font-semibold text-lg text-white drop-shadow">Cuore a Quattro Zampe</span>
				</a>
			</div>

			<nav class="hidden md:flex items-center space-x-6 text-white">
				<a href="/" class="px-2 py-1 hover:text-red-300 transition">Home</a>
				<a href="/#cosa-facciamo" class="px-2 py-1 hover:text-red-300 transition">Cosa facciamo</a>
				<a href="/#campagne" class="px-2 py-1 hover:text-red-300 transition">Campagne</a>
				<a href="/dona" class="bg-white/95 text-red-600 px-4 py-2 rounded-full shadow-md hover:scale-105 transition">Dona</a>
			</nav>

			<div class="md:hidden">
				<button aria-label="Apri menu" class="p-2 rounded-md text-white hover:bg-white/10 transition">
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
				</button>
			</div>
		</div>
	</div>
</header>

