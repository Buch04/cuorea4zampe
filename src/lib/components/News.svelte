<script>
  export let items = [];
  export let limit = 3;
  let showAll = false;

  const sampleItems = [
    {
      title: 'Adozioni: storie di successo',
      date: '8 Gen 2026',
      excerpt: 'Tre storie recenti di animali trovati una nuova casa grazie al nostro lavoro.',
      image: '/hero-2.jpeg',
      href: '#'
    },
    {
      title: 'Campagna invernale di raccolta',
      date: '2 Gen 2026',
      excerpt: 'Sostienici con coperte e cibo per aiutare gli animali durante l’inverno.',
      image: '/hero-4.jpeg',
      href: '#'
    },
    {
      title: 'Diventa volontario',
      date: '28 Dic 2025',
      excerpt: 'Unisciti alla squadra: formazione e supporto per i nuovi volontari.',
      image: '/hero-5.jpeg',
      href: '#'
    }
  ];

  const source = () => (items && items.length ? items : sampleItems);
  const visible = () => (showAll ? source() : source().slice(0, limit));
</script>

<section class="py-12">
  <div class="max-w-7xl mx-auto px-6">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-2xl font-bold text-gray-900">Notizie</h2>
      {#if items.length > limit}
        <button class="text-sm text-red-600 font-semibold" on:click={() => (showAll = !showAll)}>{showAll ? 'Mostra meno' : 'Mostra tutte'}</button>
      {/if}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each visible() as item}
        <article class="bg-white rounded-lg overflow-hidden shadow-sm">
          {#if item.image}
            <a href={item.href ?? '#'} class="block h-44 overflow-hidden">
              <img src={item.image} alt={item.title} class="w-full h-full object-cover transition-transform hover:scale-105" />
            </a>
          {/if}
            <div class="p-4">
            <a href={item.href ?? '#'} class="text-lg font-semibold text-gray-900 hover:underline">{item.title}</a>
            {#if item.date}
              <div class="text-xs text-gray-500 mt-2">{item.date}</div>
            {/if}
            {#if item.excerpt}
              <p class="mt-3 text-sm text-gray-700">{item.excerpt}</p>
            {/if}
            <div class="mt-4">
              <a href={item.href ?? '#'} class="inline-flex items-center text-red-600 font-semibold">Leggi</a>
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>
