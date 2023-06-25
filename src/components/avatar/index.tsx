import React, { PropsWithChildren } from 'react';
import Image from 'next/image';

type Props = {
	image: string | null | undefined;
};

const Avatar = ({ image }: PropsWithChildren<Props>) => {
	return (
		<button className=" avatar rounded-full">
			<div className="w-12 rounded-full cursor-pointer">
				{image && <Image alt="avatar" src={image} width={25} height={25} />}
				{!image && (
					<div className='className="bg-neutral-focus text-neutral-content rounded-full w-24"'>
						<span className="text-3xl">User</span>
					</div>
				)}
			</div>
		</button>
	);
};

export default Avatar;
