'use client';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import * as D from '@radix-ui/react-dropdown-menu';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Avatar from '../avatar';
import { Dropdown } from '@nextui-org/react';

type Props = {
	items: Array<{ href: string; label: string }>;
};

export default function DropdownMenu({
	children,
	items,
}: PropsWithChildren<Props>) {
	const path = usePathname();
	const { data } = useSession();

	return (
		<Dropdown>
			<Dropdown.Button flat>Trigger</Dropdown.Button>
			<Dropdown.Menu aria-label="Static Actions">
				<Dropdown.Item key="new">New file</Dropdown.Item>
				<Dropdown.Item key="copy">Copy link</Dropdown.Item>
				<Dropdown.Item key="edit">Edit file</Dropdown.Item>
				<Dropdown.Item key="delete" color="error">
					Delete file
				</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);+
}
