<script>
  import Spacer from '$lib/components/Spacer.svelte';
</script>

<div class="bg-white py-12">
  <Spacer />
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h2 class="text-base text-red-600 font-semibold tracking-wide uppercase">La Nostra Foresteria</h2>
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Un rifugio sicuro per cani
      </p>
      <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
        La foresteria è il nostro rifugio per cani, un luogo pensato per offrire accoglienza, cure e amore ai cani meno fortunati in attesa di una nuova casa.
      </p>
    </div>

    <div class="mt-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img class="w-full rounded-lg shadow-lg" src="/hero-2.jpeg" alt="Cane in un box della foresteria">
        </div>
        <div class="prose prose-lg text-gray-600">
          <h3>Cosa offriamo</h3>
          <p>
            La nostra foresteria non è solo un canile, ma un luogo di transizione dove i cani possono recuperare fiducia e benessere.
          </p>
          <ul>
            <li><strong>Box confortevoli:</strong> Ogni cane ha a disposizione un box pulito e spazioso, con una zona notte e una zona giorno.</li>
            <li><strong>Aree di sgambamento:</strong> Ampi recinti all'aperto dove i cani possono correre, giocare e socializzare in sicurezza.</li>
            <li><strong>Cure veterinarie:</strong> Collaboriamo con veterinari esperti per garantire a tutti i nostri ospiti le cure necessarie, inclusi vaccini, sterilizzazioni e trattamenti specifici.</li>
            <li><strong>Alimentazione di qualità:</strong> Forniamo cibo di alta qualità, adeguato alle esigenze di ogni singolo cane.</li>
          </ul>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
        <div class="prose prose-lg text-gray-600 md:order-2">
          <h3>Il ruolo dei volontari</h3>
          <p>
            I volontari sono il cuore della nostra foresteria. Si occupano della pulizia dei box, della preparazione dei pasti, delle passeggiate e, soprattutto, di dare a ogni cane l'affetto e l'attenzione di cui ha bisogno.
          </p>
          <p>
            Grazie a loro, i nostri cani non si sentono mai soli e possono imparare a fidarsi di nuovo delle persone.
          </p>
          <a href="/volontariato" class="text-red-600 hover:text-red-700 font-semibold">Vuoi diventare un volontario? &rarr;</a>
        </div>
        <div class="mt-8 md:mt-0 md:order-1">
          <img class="w-full rounded-lg shadow-lg" src="/hero-3.jpeg" alt="Volontario che gioca con un cane">
        </div>
      </div>
    </div>
  </div>
</div>
