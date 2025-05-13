// app/layout.tsx
import Footer from '@/components/Footer';
import Navbar from '../components/Navbar';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Cuore a 4 Zampe',
	description: 'Associazione di volontariato',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="it">
			<body className="flex flex-col min-h-screen overflow-auto">
				<Navbar />
				<main className="flex-grow mt-20">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}