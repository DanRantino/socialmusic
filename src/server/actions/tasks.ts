'use server';
import { prisma } from '@/server/db';

function waitThreeSeconds() {
	return new Promise<void>((resolve) => {
		setTimeout(() => {
			resolve();
		}, 3000);
	});
}

export async function createTask({
	content,
	title,
	userId,
}: {
	title: string;
	content: string;
	userId: string;
}) {
	await waitThreeSeconds();
	return await prisma.user.update({
		where: {
			id: userId,
		},
		data: {
			assignedTasks: {
				create: {
					title,
					content,
					completed: false,
					assignedToId: userId,
				},
			},
		},
	});
}
