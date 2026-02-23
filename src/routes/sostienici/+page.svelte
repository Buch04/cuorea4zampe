<script>
  import Spacer from '$lib/components/Spacer.svelte';
  let name = $state('');
  let amount = $state('');

  function donate() {
    console.log('Donazione proposta', { name, amount });
    alert('Grazie per la tua generosità!');
    name = '';
    amount = '';
  }
</script>

<div class="bg-gray-50 py-12">
  <Spacer />
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
          <h3 class="text-xl font-bold text-gray-900">Lista Regali Amazon</h3>
          <p class="mt-4 text-gray-600">Puoi aiutarci anche acquistando cibo, coperte e giochi dalla nostra lista dei desideri. Ogni articolo è un aiuto concreto per i nostri ospiti.</p>
          <a href="https://www.amazon.it/hz/wishlist/ls/3GHRE7RG7A6M8?ref_=wl_share" target="_blank" rel="noopener noreferrer" class="mt-4 inline-block text-red-600 hover:text-red-700 font-semibold">Vai alla lista &rarr;</a>
        </div>
      </div>
    </div>
  </div>
</div>
