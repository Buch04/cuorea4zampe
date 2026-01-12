<script>
  import Spacer from '$lib/components/Spacer.svelte';
  const animals = [
    { name: 'Bobby', age: '2 anni', gender: 'Maschio', breed: 'Meticcio', description: 'Molto affettuoso e giocherellone. Va d\'accordo con altri cani.', image: '/img1.jpeg' },
    { name: 'Luna', age: '6 mesi', gender: 'Femmina', breed: 'Europeo', description: 'Dolce e in cerca di coccole. Abituata alla vita in appartamento.', image: '/hero-2.jpeg' },
    { name: 'Rocky', age: '5 anni', gender: 'Maschio', breed: 'Meticcio', description: 'Taglia grande. Ha bisogno di un giardino e di una famiglia attiva.', image: '/hero-3.jpeg' },
    { name: 'Giotto', age: '1 anno', gender: 'Maschio', breed: 'Meticcio', description: 'Timido all\'inizio, ma molto buono. Cerca una famiglia paziente.', image: '/hero-4.jpeg' },
    { name: 'Mia', age: '3 anni', gender: 'Femmina', breed: 'Siamese', description: 'Elegante e regale, ama essere al centro dell\'attenzione.', image: '/hero-5.jpeg' },
    { name: 'Leo', age: '4 anni', gender: 'Maschio', breed: 'Labrador', description: 'Un cane energico e amichevole, perfetto per una famiglia con bambini.', image: '/hero-6.jpeg' },
    { name: 'Zoe', age: '8 anni', gender: 'Femmina', breed: 'Meticcio', description: 'Anziana ma con ancora tanto amore da dare. Cerca una casa tranquilla.', image: '/hero.jpeg' },
  ];
</script>

<div class="bg-gray-50 py-12">
  <Spacer />
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h2 class="text-base text-red-600 font-semibold tracking-wide uppercase">Adozioni</h2>
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Trova il tuo nuovo amico del cuore
      </p>
      <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
        Questi sono i nostri meravigliosi ospiti in cerca di una famiglia. Contattaci per avere maggiori informazioni o per venire a conoscerli.
      </p>
    </div>

    <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {#each animals as animal}
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <img class="w-full h-64 object-cover" src={animal.image} alt="Foto di {animal.name}">
          <div class="p-6">
            <h3 class="text-2xl font-semibold text-gray-900">{animal.name}</h3>
            <p class="mt-1 text-gray-600">{animal.breed} - {animal.gender}, {animal.age}</p>
            <p class="mt-4 text-gray-600">{animal.description}</p>
            <div class="mt-6">
              <a href="/contatti" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700">
                Chiedi informazioni
              </a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
