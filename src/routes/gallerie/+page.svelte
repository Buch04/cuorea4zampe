<script>
  const images = [
    { src: '/hero.jpeg', alt: 'Immagine dalla vita del rifugio 1' },
    { src: '/hero-2.jpeg', alt: 'Immagine dalla vita del rifugio 2' },
    { src: '/hero-3.jpeg', alt: 'Immagine dalla vita del rifugio 3' },
    { src: '/hero-4.jpeg', alt: 'Immagine dalla vita del rifugio 4' },
    { src: '/hero-5.jpeg', alt: 'Immagine dalla vita del rifugio 5' },
    { src: '/hero-6.jpeg', alt: 'Immagine dalla vita del rifugio 6' },
    { src: '/img1.jpeg', alt: 'Immagine dalla vita del rifugio 7' },
    { src: '/hero-old.jpeg', alt: 'Immagine dalla vita del rifugio 8' },
  ];
</script>

<div class="bg-gray-50 py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h2 class="text-base text-red-600 font-semibold tracking-wide uppercase">Galleria</h2>
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        I nostri momenti più belli
      </p>
      <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
        Una raccolta di foto dei nostri ospiti, dei volontari e della vita di tutti i giorni nei nostri rifugi.
      </p>
    </div>

    <div class="mt-12 columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      {#each images as image}
        <div class="break-inside-avoid">
          <img class="w-full h-auto rounded-lg shadow-lg" src={image.src} alt={image.alt}>
        </div>
      {/each}
    </div>
  </div>
</div>
