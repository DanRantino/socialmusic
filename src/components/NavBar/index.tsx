'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { Suspense, useEffect, useState } from 'react';
import DropdownMenu from '../menu';
import { Session } from 'next-auth';
import {
	Button,
	Navbar,
	Text,
	Link,
	Dropdown,
	Avatar,
} from '@nextui-org/react';
type Props = {};

const NavBar = (props: Props) => {
	const { data } = useSession();
	const [avatarData, setAvatarData] = useState<Session | null>(null);

	useEffect(() => {
		setAvatarData(data);
	}, []);
	const collapseItems = ['Perfis', 'Tarefas', 'Mensagens', 'Log Out'];
	return (
		<Navbar isBordered variant="floating">
			<Navbar.Toggle showIn="xs" />
			<Navbar.Brand
				css={{
					'@xs': {
						w: '12%',
					},
				}}
			>
				<Text b color="inherit" hideIn="xs">
					Sound Sync
				</Text>
			</Navbar.Brand>
			<Navbar.Content
				enableCursorHighlight
				activeColor="secondary"
				hideIn="xs"
				variant="highlight-rounded"
			>
				<Navbar.Link isActive href="#">
					Início
				</Navbar.Link>
				<Navbar.Link href="/perfil">Perfis</Navbar.Link>
				<Navbar.Link href="/tarefa">Tarefas</Navbar.Link>
				<Navbar.Link href="/mensagens">Mensagens</Navbar.Link>
			</Navbar.Content>
			<Navbar.Content
				css={{
					'@xs': {
						w: '12%',
						jc: 'flex-end',
					},
				}}
			>
				<Dropdown placement="bottom-right">
					<Navbar.Item>
						<Dropdown.Trigger>
							<Avatar
								bordered
								as="button"
								color="secondary"
								size="md"
								src={data?.user?.image || ''}
							/>
						</Dropdown.Trigger>
					</Navbar.Item>
					<Dropdown.Menu
						aria-label="User menu actions"
						color="secondary"
						onAction={(actionKey) => {
							switch (actionKey) {
								case 'logout':
									signOut();
									break;
								default:
									console.log(actionKey);
							}
						}}
					>
						<Dropdown.Item
							key="profile"
							css={{ height: '$18' }}
							textValue="Signed in as"
						>
							<Text b color="inherit" css={{ d: 'flex' }}>
								Signed in as
							</Text>
							<Text b color="inherit" css={{ d: 'flex' }}>
								{data?.user?.name}
							</Text>
						</Dropdown.Item>
						<Dropdown.Item key="settings" textValue="My Settings" withDivider>
							My Settings
						</Dropdown.Item>
						<Dropdown.Item key="team_settings" textValue="Team Settings">
							Team Settings
						</Dropdown.Item>
						<Dropdown.Item key="analytics" textValue="Analytics" withDivider>
							Analytics
						</Dropdown.Item>
						<Dropdown.Item key="system" textValue="System">
							System
						</Dropdown.Item>
						<Dropdown.Item key="configurations" textValue="Configurations">
							Configurations
						</Dropdown.Item>
						<Dropdown.Item
							key="help_and_feedback"
							textValue="Help & Feedback"
							withDivider
						>
							Help & Feedback
						</Dropdown.Item>
						<Dropdown.Item
							key="logout"
							withDivider
							color="error"
							textValue="Log Out"
						>
							Log Out
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Navbar.Content>
			<Navbar.Collapse>
				{collapseItems.map((item, index) => (
					<Navbar.CollapseItem
						key={item}
						activeColor="secondary"
						css={{
							color: index === collapseItems.length - 1 ? '$error' : '',
						}}
						isActive={index === 2}
					>
						<Link
							color="inherit"
							css={{
								minWidth: '100%',
							}}
							href="#"
						>
							{item}
						</Link>
					</Navbar.CollapseItem>
				))}
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;
