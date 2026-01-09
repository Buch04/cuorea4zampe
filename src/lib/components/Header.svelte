<script>
	import { page } from '$app/stores';
	export let logoSrc = '/logo.png';

	let open = false;

	$: isHome = $page.url.pathname === '/';
	function closeMenu() {
		open = false;
	}
</script>

<header class="absolute top-0 left-0 right-0 z-40">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-20 py-3">
			<div class="flex items-center">
				<a href="/" class="flex items-center gap-3">
					<img src={logoSrc} alt="Cuore a 4 Zampe" class="h-12 w-auto rounded-full border border-white/20 shadow-sm" />
					<span class={"font-semibold text-lg " + (isHome ? 'text-white drop-shadow' : 'text-gray-900')}>Cuore a 4 Zampe</span>
				</a>
			</div>

			<nav class={"hidden md:flex items-center space-x-6 " + (isHome ? 'text-white' : 'text-gray-900')} aria-label="Main navigation">
				<a href="/" class={"px-2 py-1 transition " + (isHome ? 'hover:text-red-300' : 'hover:text-red-600')}>Home</a>
				<a href="/cosa-facciamo" class={"px-2 py-1 transition " + (isHome ? 'hover:text-red-300' : 'hover:text-red-600')}>Cosa facciamo</a>
				<a href="/campagne" class={"px-2 py-1 transition " + (isHome ? 'hover:text-red-300' : 'hover:text-red-600')}>Campagne</a>
				<a href="/contatti" class={"px-2 py-1 transition " + (isHome ? 'hover:text-red-300' : 'hover:text-red-600')}>Contatti</a>
				<a href="/privacy" class={"px-2 py-1 transition " + (isHome ? 'hover:text-red-300' : 'hover:text-red-600')}>Privacy</a>
				<a href="/dona" class={isHome ? 'bg-white/95 text-red-600 px-4 py-2 rounded-full shadow-md hover:scale-105 transition' : 'bg-red-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-700 transition'}>Dona</a>
			</nav>

			<div class="md:hidden">
				<button aria-label="Apri menu" aria-expanded={open} on:click={() => open = !open} class={"p-2 rounded-md transition " + (isHome ? 'text-white hover:bg-white/10' : 'text-gray-900 hover:bg-gray-100')}>
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
				</button>
			</div>
		</div>
	</div>

			{#if open}
				<nav class={"md:hidden px-4 pb-4 " + (isHome ? 'bg-black/80 text-white' : 'bg-white text-gray-900')} aria-label="Mobile navigation">
					<a href="/" on:click={closeMenu} class="block px-2 py-2">Home</a>
					<a href="/cosa-facciamo" on:click={closeMenu} class="block px-2 py-2">Cosa facciamo</a>
					<a href="/campagne" on:click={closeMenu} class="block px-2 py-2">Campagne</a>
					<a href="/contatti" on:click={closeMenu} class="block px-2 py-2">Contatti</a>
					<a href="/privacy" on:click={closeMenu} class="block px-2 py-2">Privacy</a>
					<a href="/dona" on:click={closeMenu} class={"block px-2 py-2 mt-2 inline-block " + (isHome ? 'bg-white/95 text-red-600 px-4 py-2 rounded-full shadow-md' : 'bg-red-600 text-white px-4 py-2 rounded-full shadow-md')}>Dona</a>
				</nav>
			{/if}
</header>

