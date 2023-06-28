import React, { ReactNode } from 'react';
import { Modal, Button, Text, Input, Row, Checkbox } from '@nextui-org/react';
import { useGlobalModalContext } from '@/context/GlobalModal';

type Props = {
	title: string;
	actionButton: ReactNode | null;
};
export default function CreateModal({ title, actionButton }: Props) {
	const { setVisible, visible } = useGlobalModalContext();
	return (
		<div>
			<Modal
				closeButton
				preventClose
				blur
				aria-labelledby="modal-title"
				open={visible}
				onClose={() => setVisible(false)}
			>
				<Modal.Header>
					<Text id="modal-title" size={18}>
						{title}
					</Text>
				</Modal.Header>
				<Modal.Body></Modal.Body>
				<Modal.Footer>
					<Button auto flat color="error" onPress={() => setVisible(false)}>
						Close
					</Button>
					{actionButton}
				</Modal.Footer>
			</Modal>
		</div>
	);
}
