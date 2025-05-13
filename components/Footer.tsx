export default function Footer() {
	return (
		<footer className="bg-gray-100 border-t border-gray-300">
			<div className="mx-auto px-4 py-8 text-gray-700 text-sm">
				<div className="flex flex-col md:flex-row justify-between px-10">
					<div>
						<h2 className="font-semibold text-gray-800 mb-2">Associazione</h2>
						<p>Cuore a 4 Zampe ODV</p>
						<p>Via della Miniera 11</p>
						<p>50031 Barberino di Mugello (FI)</p>
						<p>Cod. Fisc. 90036700481</p>
						<a href="mailto:cuorea4zampebarberino@gmail.com" className="text-blue-600 hover:underline">cuorea4zampebarberino@gmail.com</a>
					</div>
					<div>
						<h2 className="font-semibold text-gray-800 mb-2">Contatti</h2>
						<p><strong>Referente comunicazioni:</strong> MURAFA ALA</p>
						<a href="mailto:ala.murafa@gmail.com" className="text-blue-600 hover:underline">ala.murafa@gmail.com</a>
						<p className="mt-2"><strong>Telefono:</strong></p>
						<p>3283511533 - Murafa Ala</p>
						<a href="https://www.facebook.com/profile.php?id=61558109282076" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline block mt-2">Visita la nostra pagina Facebook</a>
					</div>
					<div>
						<h2 className="font-semibold text-gray-800 mb-2">Link utili</h2>
						<ul className="space-y-1">
							<li><a href="/" className="hover:text-blue-600">Home</a></li>
							<li><a href="/chi-siamo" className="hover:text-blue-600">Chi siamo</a></li>
							<li><a href="/adozioni" className="hover:text-blue-600">Adozioni</a></li>
							<li><a href="/privacy" className="hover:text-blue-600">Privacy</a></li>
						</ul>
					</div>
				</div>
				<div className="mt-6 text-center text-gray-500">
					&copy; {new Date().getFullYear()} Cuore a 4 Zampe ODV. Tutti i diritti riservati.
				</div>
			</div>
		</footer>
	);
}
