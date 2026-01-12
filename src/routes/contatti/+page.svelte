<script>
	let name = '';
	let email = '';
	let message = '';

 	function submitForm() {
 		console.log('Contatto inviato', { name, email, message });
		alert('Grazie per averci contattato! Ti risponderemo il prima possibile.');
 		name = '';
 		email = '';
 		message = '';
 	}
</script>

<div class="bg-gray-50 py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h2 class="text-base text-red-600 font-semibold tracking-wide uppercase">Contatti</h2>
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Mettiti in contatto con noi
      </p>
      <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
        Hai domande, vuoi proporre una collaborazione o segnalare un animale in difficoltà? Siamo qui per ascoltarti.
      </p>
    </div>

    <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Contact Form -->
      <div class="bg-white p-8 rounded-lg shadow-lg">
        <h3 class="text-2xl font-bold text-gray-900">Scrivici un messaggio</h3>
        <form on:submit|preventDefault={submitForm} class="mt-6 space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Nome</label>
            <input type="text" id="name" bind:value={name} required class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500">
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" bind:value={email} required class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500">
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700">Messaggio</label>
            <textarea id="message" bind:value={message} rows="4" required class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"></textarea>
          </div>
          <div>
            <button type="submit" class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              Invia messaggio
            </button>
          </div>
        </form>
      </div>

      <!-- Contact Info -->
      <div class="prose prose-lg text-gray-600">
        <h3>I nostri recapiti</h3>
        <p>
          <strong>Sede Legale:</strong><br>
          Cuore a 4 Zampe ODV<br>
          Via della Miniera 11, 50031 Barberino di Mugello (FI)<br>
          Cod. Fisc. 90036700481
        </p>
        <p>
          <strong>Referente:</strong> MURAFA ALA<br>
          <strong>Telefono:</strong> <a href="tel:+393283511533">328 3511533</a><br>
          <strong>Email:</strong> <a href="mailto:cuorea4zampebarberino@gmail.com">cuorea4zampebarberino@gmail.com</a>
        </p>
        <h3>Orari</h3>
        <p>
          Puoi trovarci in rifugio su appuntamento. Contattaci per organizzare una visita!
        </p>
      </div>
    </div>

    <!-- Map -->
    <div class="mt-16">
       <h3 class="text-2xl font-bold text-gray-900 text-center mb-4">Come raggiungerci</h3>
      <div class="aspect-w-16 aspect-h-9">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2870.737569106512!2d11.23543931550808!3d44.0083399791106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132b1c67e1a9d36b%3A0x566a544b55a6534!2sVia%20della%20Miniera%2C%2011%2C%2050031%20Barberino%20di%20Mugello%20FI!5e0!3m2!1sit!2sit!4v1673534567890!5m2!1sit!2sit" 
          width="100%" 
          height="100%" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  </div>
</div>
