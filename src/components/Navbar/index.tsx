import Link from 'next/link';

export const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link href="/contact">contact</Link>
				</li>
				<li>
					<Link href="/projects">projects</Link>
				</li>
				<li>
					<Link href="/organizations">organizations</Link>
				</li>
			</ul>
		</nav>
	);
};
