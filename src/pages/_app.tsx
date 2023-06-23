import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import RootLayout from './layout';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<RootLayout>
			<Component {...pageProps} />
		</RootLayout>
	);
}
