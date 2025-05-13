"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
	const images = [
		"/img.jpeg",
		"/img1.jpeg"
	];

	const [current, setCurrent] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((prev) => (prev + 1) % images.length);
		}, 3000);
		return () => clearInterval(interval);
	}, [images.length]);

	return (
		<div className="relative w-full h-[400px] overflow-hidden">
			{images.map((src, index) => (
				<img
					key={index}
					src={src}
					alt={`Slide ${index + 1}`}
					className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"}`}
				/>
			))}

			{/* Contenuto sopra le immagini */}
			<div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30">
				<h1 className="text-3xl md:text-5xl font-bold mb-4">5 x mille</h1>
                <Link href="/sostienici" className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-full text-white font-semibold shadow-lg transition">Scopri di più</Link>
			</div>

			{/* Dots */}
			<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
				{images.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrent(index)}
						className={`w-3 h-3 rounded-full ${index === current ? "bg-red-500" : "bg-gray-300"}`}
					></button>
				))}
			</div>
		</div>
	);
}
