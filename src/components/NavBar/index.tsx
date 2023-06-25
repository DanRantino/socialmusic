'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { Suspense, useEffect, useState } from 'react';
import Avatar from '../avatar';
import DropdownMenu from '../menu';
import { Session } from 'next-auth';

type Props = {};

const NavBar = (props: Props) => {
	const { data } = useSession();
	const [avatarData, setAvatarData] = useState<Session | null>(null);

	useEffect(() => {
		setAvatarData(data);
	}, []);

	return (
		<div className="absolute top-0 right-0 bg-secondary shadow-2xl w-screen h-24 grid grid-cols-12">
			<div className=" col-span-1 col-span flex items-center justify-center">
				<DropdownMenu
					items={[
						{ href: '/', label: 'Home' },
						{ href: '/teste', label: 'Teste' },
					]}
				>
					<Avatar image={data?.user?.image} />
				</DropdownMenu>
			</div>
		</div>
	);
};

export default NavBar;
