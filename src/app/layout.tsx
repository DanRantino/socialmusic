import NavBar from '@/components/NavBar';
import './globals.css';
import { Inter } from 'next/font/google';
import AuthSession from '@/components/auth/AuthSession';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AuthSession>
					<main>
						<NavBar />
						<div className="h-full w-screen pt-24">{children}</div>
					</main>
				</AuthSession>
			</body>
		</html>
	);
}
