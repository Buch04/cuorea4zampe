<script>
	import { page } from '$app/stores';
	let { logoSrc = '/logo.png' } = $props();

	let open = $state(false);
	let leNostreStruttureOpen = $state(false);
	let adozioniOpen = $state(false);
	let altroOpen = $state(false);

	let isHome = $derived($page.url.pathname === '/');
	
	function closeMenu() {
		open = false;
		leNostreStruttureOpen = false;
		adozioniOpen = false;
		altroOpen = false;
	}

	function clickOutside(node) {
		const handleClick = (event) => {
			if (node && !node.contains(event.target) && !event.defaultPrevented) {
				node.dispatchEvent(new CustomEvent('clickout', node));
			}
		};

		document.addEventListener('click', handleClick, true);

		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	}

	function isActive(href) {
		return $page.url.pathname === href;
	}
</script>

<header class="absolute top-0 left-0 right-0 z-40">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-20 py-3">
			<div class="flex items-center">
				<a href="/" class="flex items-center gap-3">
					<img src={logoSrc} alt="Cuore a 4 Zampe" class="h-16 w-auto" />
					<span class={"font-semibold text-lg " + (isHome ? 'text-white drop-shadow' : 'text-gray-900')}>Cuore a 4 Zampe</span>
				</a>
			</div>

			<nav class={"hidden xl:flex items-center space-x-6 " + (isHome ? 'text-white' : 'text-gray-900')} aria-label="Main navigation">
				<a href="/" class:font-bold={isActive('/')} class:text-red-300={isActive('/') && isHome} class:text-red-600={isActive('/') && !isHome} class={"px-2 py-1 transition " + (isHome ? 'hover:text-red-300' : 'hover:text-red-600')}>Home</a>
				<a href="/chi-siamo" class:font-bold={isActive('/chi-siamo')} class:text-red-300={isActive('/chi-siamo') && isHome} class:text-red-600={isActive('/chi-siamo') && !isHome} class={"px-2 py-1 transition " + (isHome ? 'hover:text-red-300' : 'hover:text-red-600')}>Chi siamo</a>
				
				<div class="relative">
					<button onclick={() => adozioniOpen = !adozioniOpen} class={"px-2 py-1 transition " + (isHome ? 'hover:text-red-300' : 'hover:text-red-600')}>Adozioni</button>
					{#if adozioniOpen}
						<div use:clickOutside onclickout={() => adozioniOpen = false} class="absolute top-full left-0 mt-2 bg-white rounded-md shadow-lg z-10 w-48">
							<a href="/adozioni" onclick={() => adozioniOpen = false} class="block px-4 py-2 text-gray-900 hover:bg-gray-100" class:font-bold={isActive('/adozioni')} class:text-red-600={isActive('/adozioni')}>Adozioni</a>
							<a href="/adozioni-a-distanza" onclick={() => adozioniOpen = false} class="block px-4 py-2 text-gray-900 hover:bg-gray-100" class:font-bold={isActive('/adozioni-a-distanza')} class:text-red-600={isActive('/adozioni-a-distanza')}>Adozioni a distanza</a>
						</div>
					{/if}
				</div>

				<div class="relative">
					<button onclick={() => altroOpen = !altroOpen} class={"px-2 py-1 transition " + (isHome ? 'hover:text-red-300' : 'hover:text-red-600')}>Le nostre strutture</button>
					{#if altroOpen}
						<div use:clickOutside onclickout={() => altroOpen = false} class="absolute top-full left-0 mt-2 bg-white rounded-md shadow-lg z-10 w-48">
							<a href="/le-nostre-strutture/foresteria" onclick={() => altroOpen = false} class="block px-4 py-2 text-gray-900 hover:bg-gray-100" class:font-bold={isActive('/le-nostre-strutture/foresteria')} class:text-red-600={isActive('/le-nostre-strutture/foresteria')}>Foresteria</a>
							<a href="/le-nostre-strutture/gattoparco" onclick={() => altroOpen = false} class="block px-4 py-2 text-gray-900 hover:bg-gray-100" class:font-bold={isActive('/le-nostre-strutture/gattoparco')} class:text-red-600={isActive('/le-nostre-strutture/gattoparco')}>Gattoparco</a>
						</div>
					{/if}
				</div>

				<a href="/volontariato" class:font-bold={isActive('/volontariato')} class:text-red-300={isActive('/volontariato') && isHome} class:text-red-600={isActive('/volontariato') && !isHome} class={"px-2 py-1 transition " + (isHome ? 'hover:text-red-300' : 'hover:text-red-600')}>Volontariato</a>
				<a href="/contatti" class:font-bold={isActive('/contatti')} class:text-red-300={isActive('/contatti') && isHome} class:text-red-600={isActive('/contatti') && !isHome} class={"px-2 py-1 transition " + (isHome ? 'hover:text-red-300' : 'hover:text-red-600')}>Contatti</a>

				<a href="/sostienici" class={isHome ? 'bg-white/95 text-red-600 px-4 py-2 rounded-full shadow-md hover:scale-105 transition' : 'bg-red-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-700 transition'}>Sostienici</a>
			</nav>

			<div class="xl:hidden">
				<button aria-label="Apri menu" aria-expanded={open} onclick={() => open = !open} class={"p-2 rounded-md transition " + (isHome ? 'text-white hover:bg-white/10' : 'text-gray-900 hover:bg-gray-100')}>
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
				</button>
			</div>
		</div>
	</div>

			{#if open}
				<nav class={"xl:hidden px-4 pb-4 " + (isHome ? 'bg-black/80 text-white' : 'bg-white text-gray-900')} aria-label="Mobile navigation">
					<a href="/" onclick={closeMenu} class="block px-2 py-2" class:font-bold={isActive('/')} class:text-red-600={isActive('/')}>Home</a>
					<a href="/chi-siamo" onclick={closeMenu} class="block px-2 py-2" class:font-bold={isActive('/chi-siamo')} class:text-red-600={isActive('/chi-siamo')}>Chi siamo</a>
					<div>
						<button onclick={() => adozioniOpen = !adozioniOpen} class="block px-2 py-2 w-full text-left" class:font-bold={$page.url.pathname.startsWith('/adozioni')} class:text-red-600={$page.url.pathname.startsWith('/adozioni')}>Adozioni</button>
						{#if adozioniOpen}
							<div class="pl-4">
								<a href="/adozioni" onclick={closeMenu} class="block px-2 py-2" class:font-bold={isActive('/adozioni')} class:text-red-600={isActive('/adozioni')}>Adozioni</a>
								<a href="/adozioni-a-distanza" onclick={closeMenu} class="block px-2 py-2" class:font-bold={isActive('/adozioni-a-distanza')} class:text-red-600={isActive('/adozioni-a-distanza')}>Adozioni a distanza</a>
							</div>
						{/if}
					</div>
					<div>
						<button onclick={() => leNostreStruttureOpen = !leNostreStruttureOpen} class="block px-2 py-2 w-full text-left" class:font-bold={$page.url.pathname.startsWith('/le-nostre-strutture')} class:text-red-600={$page.url.pathname.startsWith('/le-nostre-strutture')}>Le nostre strutture</button>
						{#if leNostreStruttureOpen}
							<div class="pl-4">
								<a href="/le-nostre-strutture/foresteria" onclick={closeMenu} class="block px-2 py-2" class:font-bold={isActive('/le-nostre-strutture/foresteria')} class:text-red-600={isActive('/le-nostre-strutture/foresteria')}>Foresteria</a>
								<a href="/le-nostre-strutture/gattoparco" onclick={closeMenu} class="block px-2 py-2" class:font-bold={isActive('/le-nostre-strutture/gattoparco')} class:text-red-600={isActive('/le-nostre-strutture/gattoparco')}>Gattoparco</a>
							</div>
						{/if}
					</div>
					<a href="/volontariato" onclick={closeMenu} class="block px-2 py-2" class:font-bold={isActive('/volontariato')} class:text-red-600={isActive('/volontariato')}>Volontariato</a>
					<a href="/contatti" onclick={closeMenu} class="block px-2 py-2" class:font-bold={isActive('/contatti')} class:text-red-600={isActive('/contatti')}>Contatti</a>
					<a href="/sostienici" onclick={closeMenu} class={"block px-2 py-2 mt-2 inline-block " + (isHome ? 'bg-white/95 text-red-600 px-4 py-2 rounded-full shadow-md' : 'bg-red-600 text-white px-4 py-2 rounded-full shadow-md')}>Sostienici</a>
				</nav>
			{/if}
</header>

