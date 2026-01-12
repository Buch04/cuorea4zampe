<script>
  let name = '';
  let email = '';
  let phone = '';
  let availability = '';
  let message = '';

  function apply() {
    console.log('Nuova candidatura per volontariato', { name, email, phone, availability, message });
    alert('Grazie per esserti candidato! Ti contatteremo presto.');
    // Reset form
    name = '';
    email = '';
    phone = '';
    availability = '';
    message = '';
  }
</script>

<div class="bg-gray-50 py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h2 class="text-base text-red-600 font-semibold tracking-wide uppercase">Volontariato</h2>
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Il tuo tempo è il regalo più grande
      </p>
      <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
        I volontari sono la spina dorsale della nostra associazione. Senza di loro, non potremmo prenderci cura dei nostri animali. Unisciti a noi e fai la differenza!
      </p>
    </div>

    <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div class="prose prose-lg text-gray-600">
        <h3>Cosa fa un volontario?</h3>
        <p>
          Ci sono tantissimi modi per aiutarci. In base alle tue preferenze e alla tua disponibilità, potrai:
        </p>
        <ul>
          <li><strong>Accudire gli animali:</strong> Pulizia di box e aree comuni, preparazione e distribuzione del cibo, coccole e socializzazione.</li>
          <li><strong>Portare a spasso i cani:</strong> Un momento fondamentale per il loro benessere fisico e mentale.</li>
          <li><strong>Aiutare negli eventi:</strong> Montaggio di stand, volantinaggio, raccolta fondi durante le nostre iniziative.</li>
          <li><strong>Fare da stallo temporaneo:</strong> Ospitare a casa un animale per un breve periodo, aiutandolo ad abituarsi a una vita in famiglia.</li>
          <li><strong>Trasporti:</strong> Aiutarci a portare i nostri ospiti dal veterinario o a raggiungere la loro nuova casa.</li>
        </ul>
        <p>
          Non è richiesta esperienza pregressa, solo tanto amore per gli animali e voglia di mettersi in gioco!
        </p>
      </div>
      <div class="mt-8 md:mt-0">
        <img class="w-full rounded-lg shadow-lg" src="/hero.jpeg" alt="Volontari con i cani">
      </div>
    </div>

    <div class="mt-16 bg-white p-8 rounded-lg shadow-lg">
      <h3 class="text-2xl font-bold text-gray-900 text-center">Manda la tua candidatura</h3>
      <form on:submit|preventDefault={apply} class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
        <div class="sm:col-span-1">
          <label for="name" class="block text-sm font-medium text-gray-700">Nome e Cognome</label>
          <input type="text" id="name" bind:value={name} required class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500">
        </div>
        <div class="sm:col-span-1">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" bind:value={email} required class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500">
        </div>
        <div class="sm:col-span-1">
          <label for="phone" class="block text-sm font-medium text-gray-700">Telefono</label>
          <input type="tel" id="phone" bind:value={phone} required class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500">
        </div>
        <div class="sm:col-span-1">
          <label for="availability" class="block text-sm font-medium text-gray-700">La tua disponibilità</label>
          <input type="text" id="availability" bind:value={availability} placeholder="Es: weekend, martedì pomeriggio" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500">
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block text-sm font-medium text-gray-700">Parlaci un po' di te</label>
          <textarea id="message" bind:value={message} rows="4" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"></textarea>
        </div>
        <div class="sm:col-span-2">
          <button type="submit" class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            Invia candidatura
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
