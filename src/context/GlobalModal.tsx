import CreateModal from '@/components/modal';
import { Button, useModal } from '@nextui-org/react';
import type {
	Dispatch,
	FC,
	MutableRefObject,
	ReactNode,
	SetStateAction,
} from 'react';
import React, { createContext, useContext, useEffect, useState } from 'react';

type ModalPropsType = {
	title?: string;
	confirmBtn?: ReactNode;
};
type StoreType = {
	modalType: string;
	modalProps: ModalPropsType;
	open: boolean;
};

type GlobalModalContext = {
	visible: boolean;
	setVisible: Dispatch<SetStateAction<boolean>> | (() => void);

	open: boolean;
	onClose: () => void;
	setTitle: Dispatch<SetStateAction<string>> | (() => void);
	setAction: Dispatch<SetStateAction<ReactNode | null>>;
};

const initalState: GlobalModalContext = {
	visible: false,
	setVisible: () => {},
	open: false,
	onClose: () => {},
	setTitle: () => {},
	setAction: () => null,
};

const GlobalModalContext = createContext(initalState);
export const useGlobalModalContext = () => useContext(GlobalModalContext);

export const GlobalModal: FC<{ children: ReactNode }> = ({ children }) => {
	const [action, setAction] = useState<ReactNode>(<Button>Aqui</Button>);
	useEffect(() => {
		console.log('Aqui');
	}, [action?.toString()]);

	const {
		bindings: { onClose, open },
		setVisible,
		visible,
	} = useModal(false);

	const modalOpen = () => {};

	const [title, setTitle] = useState<string>('Teste');

	return (
		<GlobalModalContext.Provider
			value={{ onClose, open, setVisible, visible, setTitle, setAction }}
		>
			{open && <CreateModal actionButton={action} title={title} />}
			{children}
		</GlobalModalContext.Provider>
	);
};
