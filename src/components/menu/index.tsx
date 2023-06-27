'use client';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import * as D from '@radix-ui/react-dropdown-menu';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Avatar from '../avatar';
import { Dropdown } from '@nextui-org/react';
import { GiHamburgerMenu } from 'react-icons/gi';

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
			<Dropdown.Button
				auto
				rounded
				icon={<GiHamburgerMenu size={25} />}
				size={'md'}
				className="flex items-center justify-center"
			></Dropdown.Button>
			<Dropdown.Menu aria-label="Static Actions">
				{items.map((v, i) => {
					if (v.href === path) {
						return (
							<Dropdown.Item color="secondary" key={i}>
								<Link href={v.href}>{v.label}</Link>
							</Dropdown.Item>
						);
					}
					return (
						<Dropdown.Item key={i}>
							<Link href={v.href}>{v.label}</Link>
						</Dropdown.Item>
					);
				})}
			</Dropdown.Menu>
		</Dropdown>
	);
}
