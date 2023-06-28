'use client';

import { getUser, getFollowers } from '../server/actions/user';
import { useEffect, useState } from 'react';
import { User } from '@prisma/client';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Box } from '@/components/layout';
import Post from '@/components/post';
import { Button, Container, Loading, useModal } from '@nextui-org/react';
import { Plus } from 'react-iconly';
import FloatingButton from '@/components/floatingButton';
import Page from '@/components/page';
import { useGlobalModalContext } from '@/context/GlobalModal';
import { createTask } from '@/server/actions/tasks';

export default function Home() {
	const { data: user } = useQuery(['user'], () => getUser());

	const { data, isLoading, mutate } = useMutation(['task'], createTask);
	console.log('🚀 ~ file: page.tsx:20 ~ Home ~ data:', data);
	console.log('🚀 ~ file: page.tsx:20 ~ Home ~ isLoading:', isLoading);

	const { setVisible, visible, setTitle, setAction } = useGlobalModalContext();

	return (
		<>
			<FloatingButton
				position="bottom"
				side="right"
				icon={<Plus set="broken" primaryColor="blueviolet" />}
				onPress={() => {
					setAction(
						<Button
							auto
							flat
							disabled={isLoading}
							color="success"
							onPress={() =>
								mutate(
									{
										content: 'Teste',
										title: 'Titulo',
										userId: 'clhscf6c40000u5ksvclm2esm',
									},
									{
										onSuccess: console.log,
									}
								)
							}
						>
							<Loading type="points" color="currentColor" size="sm" />
						</Button>
					);
					setVisible(!visible);
					setTitle('Cadastrar nova tarefa');
				}}
			/>
		</>
	);
}
