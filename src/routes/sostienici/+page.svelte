<script>
  let name = '';
  let amount = '';

  function donate() {
    console.log('Donazione proposta', { name, amount });
    alert('Grazie per la tua generosità!');
    name = '';
    amount = '';
  }
</script>

<div class="bg-gray-50 py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h2 class="text-base text-red-600 font-semibold tracking-wide uppercase">Sostienici</h2>
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Ogni contributo è un aiuto prezioso
      </p>
      <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
        Scegli la modalità di donazione che preferisci. Il tuo sostegno ci permette di continuare a salvare, curare e trovare una casa per centinaia di animali ogni anno.
      </p>
    </div>

    <div class="mt-12 space-y-12">
      <!-- Sezione Donazione Online -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div class="prose prose-lg text-gray-600">
          <h3>Donazione online</h3>
          <p>
            Un modo rapido e sicuro per darci una mano. Anche un piccolo contributo può fare una grande differenza. Puoi inserire i tuoi dati nel form qui a fianco.
          </p>
          <p class="text-sm">
            (Attualmente il form è un segnaposto. Per una vera implementazione, si dovrebbe integrare un gateway di pagamento come Stripe o PayPal).
          </p>
        </div>
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <h3 class="text-2xl font-bold text-gray-900">Fai una donazione ora</h3>
          <form on:submit|preventDefault={donate} class="mt-6 space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Nome (opzionale)</label>
              <input type="text" id="name" bind:value={name} class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500">
            </div>
            <div>
              <label for="amount" class="block text-sm font-medium text-gray-700">Importo (€)</label>
              <input type="number" id="amount" bind:value={amount} required class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500" placeholder="Es: 20">
            </div>
            <div>
              <button type="submit" class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                Dona ora
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Altre modalità di donazione -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-bold text-gray-900">Bonifico Bancario</h3>
          <p class="mt-4 text-gray-600">Puoi effettuare un bonifico al seguente IBAN:</p>
          <p class="mt-2 font-mono text-sm bg-gray-100 p-2 rounded">IT00X0000000000000000000</p>
          <p class="mt-2 text-gray-600">Intestato a: <strong>Cuore a 4 Zampe ODV</strong></p>
          <p class="mt-1 text-gray-600">Causale: <strong>Donazione liberale</strong></p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-bold text-gray-900">5x1000</h3>
          <p class="mt-4 text-gray-600">Nella tua dichiarazione dei redditi, puoi scegliere di destinare il tuo 5x1000 alla nostra associazione.</p>
          <p class="mt-2 text-gray-600">Il nostro codice fiscale è:</p>
          <p class="mt-2 font-mono text-sm bg-gray-100 p-2 rounded">99999999999</p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-bold text-gray-900">Lasciti e donazioni in memoria</h3>
          <p class="mt-4 text-gray-600">Un gesto d'amore che può continuare a salvare vite. Contattaci per avere maggiori informazioni su come inserire la nostra associazione nel tuo testamento.</p>
          <a href="/contatti" class="mt-4 inline-block text-red-600 hover:text-red-700 font-semibold">Contattaci &rarr;</a>
        </div>
      </div>
    </div>
  </div>
</div>
