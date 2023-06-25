'use server';

import { prisma } from '@/server/db';
export default async function getUser() {
	console.log(
		'🚀 ~ file: user.ts:6 ~ getUser ~ await prisma?.user.findFirst();:',
		await prisma?.user.findFirst()
	);
	return await prisma?.user.findFirst();
}
