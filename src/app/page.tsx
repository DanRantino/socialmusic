'use client';

import getUser from '../server/actions/user';
import { useEffect, useState } from 'react';
import { User } from '@prisma/client';

export default function Home() {
	const [dados, setDados] = useState<User | null>();

	useEffect(() => {
		getUser().then(setDados);
	}, []);

	return <div className="bg-base-100">{JSON.stringify(dados)}</div>;
}
