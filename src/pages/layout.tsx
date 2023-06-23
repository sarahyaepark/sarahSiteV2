import Head from 'next/head';
import { Navbar } from '@/components/Navbar';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="customBackground">
			<Head>
				<title>Sarah Park</title>
				<link rel="icon" href="/images/favicon.ico" />
			</Head>
			<div className="font-mono w-full">
				<div className="p-10">
					<div>
						<h4>Hi, I&apos;m</h4>
						<h1>
							<Link href="/">Sarah Park</Link>
						</h1>
					</div>
					<br />
					<Navbar />
				</div>
				<div className="w-full flex justify-center py-2">
					<div className="w-9/12 flex justify-center">{children}</div>
				</div>
			</div>
		</div>
	);
}
