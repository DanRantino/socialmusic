'use client';

import { getUser, getFollowers } from '../server/actions/user';
import { useEffect, useState } from 'react';
import { User } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
	const { data: user } = useQuery(['user'], () => getUser());

	const { data: follow } = useQuery(['follow'], () => {
		if (!user) return null;
		return getFollowers(user.id);
	});

	return <div className="bg-base-100">{JSON.stringify(follow?.follow)}</div>;
}
