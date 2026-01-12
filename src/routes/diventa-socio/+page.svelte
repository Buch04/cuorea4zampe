<script>
  let name = '';
  let email = '';
  let message = '';

  function becomeMember() {
    console.log('Nuova richiesta di associazione', { name, email, message });
    // Qui andrebbe la logica per inviare i dati a un server
    alert('Grazie per la tua richiesta! Ti contatteremo presto.');
    name = '';
    email = '';
    message = '';
  }
</script>

<div class="bg-gray-50 py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h2 class="text-base text-red-600 font-semibold tracking-wide uppercase">Diventa Socio</h2>
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Entra a far parte della nostra famiglia
      </p>
      <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
        Diventare socio di Cuore a 4 Zampe significa sostenere attivamente la nostra missione e avere un ruolo fondamentale nel futuro dell'associazione.
      </p>
    </div>

    <div class="mt-10">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
        <div class="prose prose-lg text-gray-600">
          <h3>Perché diventare socio?</h3>
          <p>
            La tessera associativa è un modo concreto per dimostrare il tuo impegno. Con il tuo contributo annuale ci aiuti a coprire le spese veterinarie, l'acquisto di cibo e le manutenzioni dei nostri rifugi.
          </p>
          <p>Come socio, avrai diritto a:</p>
          <ul>
            <li>Partecipare alle assemblee e dire la tua sulle decisioni importanti.</li>
            <li>Ricevere la nostra newsletter con aggiornamenti sui nostri ospiti e le nostre attività.</li>
            <li>Accedere a eventi esclusivi riservati ai soci.</li>
          </ul>
          <p>
            La quota associativa per il 2024 è di <strong>20€</strong>.
          </p>
        </div>

        <div class="mt-8 lg:mt-0">
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="text-2xl font-bold text-gray-900">Richiedi di diventare socio</h3>
            <form on:submit|preventDefault={becomeMember} class="mt-6 space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700">Nome e Cognome</label>
                <input type="text" id="name" bind:value={name} required class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500">
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" bind:value={email} required class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500">
              </div>
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700">Lascia un messaggio (facoltativo)</label>
                <textarea id="message" bind:value={message} rows="4" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"></textarea>
              </div>
              <div>
                <button type="submit" class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  Invia la richiesta
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
