'use server';

import { prisma } from '@/server/db';
export async function getUser() {
	return await prisma?.user.findFirst();
}

export async function getFollowers(userId: string) {
	return await prisma.follower.findUnique({
		where: {
			userId,
		},
		select: {
			user: true,
			follow: true,
		},
	});
}
