import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
	return (
		<nav className="fixed top-0 left-0 right-0 h-20 z-20 bg-white px-4 sm:px-6">
			<div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
				<Link href="/">
					<Image
						src="/favicon.ico"
						width={60}
						height={60}
						alt="Logo"
					/>
				</Link>
			</div>
		</nav>
	);
}