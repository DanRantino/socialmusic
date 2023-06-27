import { styled } from '@nextui-org/react';
import { PropsWithChildren } from 'react';

export const Box = styled('div', {
	boxSizing: 'border-box',
});

export const Layout = ({ children }: PropsWithChildren) => (
	<Box
		css={{
			maxW: '100%',
		}}
	>
		{children}
	</Box>
);
