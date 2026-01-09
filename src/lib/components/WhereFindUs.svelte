<script>
  export let address = 'Via della Miniera 11, 50031 Barberino di Mugello (FI)';
  export let contactEmail = 'cuorea4zampebarberino@gmail.com';
  export let phone = '3283511533';
</script>

<section id="dove-trovarci" class="py-12 px-6 bg-white">
  <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-start">
    <div>
      <h2 class="text-2xl md:text-3xl font-extrabold mb-3 text-gray-900">Dove trovarci</h2>
      <p class="text-gray-700 mb-4">Vieni a trovarci o contattaci per informazioni su adozioni, volontariato e sostegno.</p>

      <div class="bg-gray-50 border rounded-lg p-4 mb-4">
        <p class="font-semibold text-gray-900">Indirizzo</p>
        <p class="text-gray-700">{address}</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div class="bg-gray-50 border rounded-lg p-4">
          <p class="font-semibold text-gray-900">Orari</p>
          <p class="text-gray-700">Lun–Ven: 09:00–13:00</p>
          <p class="text-gray-700">Sab: 10:00–13:00</p>
        </div>

        <div class="bg-gray-50 border rounded-lg p-4">
          <p class="font-semibold text-gray-900">Contatti</p>
          <p class="text-gray-700">Email: <a href={`mailto:${contactEmail}`} class="text-red-600 hover:underline">{contactEmail}</a></p>
          <p class="text-gray-700">Telefono: <a href={`tel:${phone}`} class="text-red-600 hover:underline">{phone}</a></p>
        </div>
      </div>

      <div class="flex gap-3">
        <a href="/contatti" class="inline-block bg-red-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-red-700 transition">Contattaci</a>
      </div>
    </div>

    <div class="h-64 md:h-80 rounded-lg overflow-hidden border">
      <iframe
        title="Mappa"
        class="w-full h-full"
        src="https://maps.google.com/maps?q=Via%20della%20Miniera%2011%20Barberino%20di%20Mugello&z=15&output=embed"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>
