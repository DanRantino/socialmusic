import { styled } from '@nextui-org/react';
import React, { PropsWithChildren } from 'react';

const SPage = styled('main', {
	width: '100vw',
	height: '100vh',
	boxSizing: 'border-box',
});

function Page({ children }: PropsWithChildren) {
	return <SPage>{children}</SPage>;
}

export default Page;
