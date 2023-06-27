'use server';

import { prisma } from '@/server/db';
export async function getUser() {
	return await prisma?.user.findFirst();
}

export async function getFollowers(userId: string) {
	console.log('🚀 ~ file: user.ts:9 ~ getFollowers ~ userId:', userId);
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
