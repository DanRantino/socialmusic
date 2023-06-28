import { Button, Card, Row, Text } from '@nextui-org/react';
import React from 'react';
import { Heart2 } from 'react-iconly';

type Props = {
	titulo: string;
	corpo: string;
	curtidas: number;
};

function Post({ titulo, corpo, curtidas }: Props) {
	return (
		<Card>
			<Card.Header>
				<Text>{titulo}</Text>
			</Card.Header>
			<Card.Divider />
			<Card.Body
				css={{
					py: '$10',
				}}
			>
				<Text>{corpo}</Text>
			</Card.Body>
			<Card.Divider />
			<Card.Footer>
				<Row justify="flex-end">
					<Button size="sm" light>
						Teste
					</Button>
					<Button
						auto
						icon={<Heart2 set="bold" primaryColor="currentColor" filled />}
					>
						{curtidas}
					</Button>
				</Row>
			</Card.Footer>
		</Card>
	);
}

export default Post;
