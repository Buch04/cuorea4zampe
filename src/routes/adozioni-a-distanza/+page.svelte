<script>
  const animals = [
    { name: 'Nonna Pina', description: 'Una dolce cagnolona anziana che ha bisogno di cure costanti. Con il tuo aiuto possiamo garantirle una vecchiaia serena.', image: '/hero-2.jpeg' },
    { name: 'Nerone', description: 'Un gatto FIV+ che richiede attenzioni particolari. Il tuo sostegno ci aiuta a coprire le sue spese mediche.', image: '/hero-4.jpeg' },
    { name: 'Maya', description: 'Una cagnolina molto timida che sta seguendo un percorso di riabilitazione comportamentale. Aiutaci a farle ritrovare la fiducia.', image: '/hero-6.jpeg' },
  ];
</script>

<div class="bg-gray-50 py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h2 class="text-base text-red-600 font-semibold tracking-wide uppercase">Adozioni a Distanza</h2>
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Un gesto d'amore che non conosce distanze
      </p>
      <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
        Non puoi adottare un animale? Diventa un genitore a distanza! Con un piccolo contributo mensile, ci aiuterai a prenderci cura di uno dei nostri ospiti.
      </p>
    </div>

    <div class="mt-12 prose prose-lg text-gray-600 mx-auto">
      <h3>Come funziona l'adozione a distanza?</h3>
      <p>
        L'adozione a distanza è un modo per sostenere in modo continuativo un animale che, per motivi di salute, età o carattere, ha poche probabilità di essere adottato. Il tuo contributo ci aiuterà a coprire le sue spese per:
      </p>
      <ul>
        <li><strong>Cibo specifico</strong> e di alta qualità.</li>
        <li><strong>Cure veterinarie</strong>, farmaci e terapie.</li>
        <li><strong>Comfort</strong> come cucce, coperte e giochi.</li>
      </ul>
      <h3>Cosa ricevi in cambio?</h3>
      <p>
        Oltre alla gioia di sapere di star facendo la differenza, riceverai un certificato di adozione a distanza con la foto del tuo protetto e aggiornamenti periodici via email sulla sua vita nel nostro rifugio. Potrai anche venire a trovarlo quando vorrai!
      </p>
    </div>

    <div class="mt-16">
      <h3 class="text-2xl font-extrabold text-center text-gray-900 mb-8">Loro hanno bisogno del tuo aiuto</h3>
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {#each animals as animal}
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img class="w-full h-64 object-cover" src={animal.image} alt="Foto di {animal.name}">
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-gray-900">{animal.name}</h3>
              <p class="mt-4 text-gray-600">{animal.description}</p>
              <div class="mt-6">
                <a href="/sostienici" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700">
                  Adotta {animal.name} a distanza
                </a>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
