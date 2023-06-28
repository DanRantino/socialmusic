import { Button, ButtonProps, styled } from '@nextui-org/react';
import { ReactNode } from 'react';

interface Props extends ButtonProps {
	position: 'top' | 'bottom';
	side: 'left' | 'right';
	icon: ReactNode;
}

const SFloatingButton = styled(Button, {
	position: 'absolute',
	zIndex: 99999,
	variants: {
		position: {
			top: { top: 5 },
			bottom: { bottom: 5 },
		},
		side: {
			left: { left: 5 },
			right: { right: 5 },
		},
	},
});

function FloatingButton({ position, side, icon, ...props }: Props) {
	return (
		<SFloatingButton
			auto
			color="warning"
			position={position}
			side={side}
			icon={icon}
			{...props}
		/>
	);
}

export default FloatingButton;
