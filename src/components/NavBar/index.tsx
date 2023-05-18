'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { Suspense } from 'react';
import Avatar from '../avatar';

type Props = {};

const NavBar = (props: Props) => {
	const { data } = useSession();
	console.log('🚀 ~ file: index.tsx:10 ~ NavBar ~ data:', data);

	return (
		<div className="absolute top-0 right-0 bg-secondary shadow-2xl w-screen h-24 grid grid-cols-12">
			<div className=" col-span-1 col-span flex items-center justify-center">
				<Avatar image={data?.user?.image} />
			</div>
		</div>
	);
};

export default NavBar;
