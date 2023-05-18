'use client';
import { SessionProvider } from 'next-auth/react';
import React, { PropsWithChildren } from 'react';

const AuthSession = ({ children }: PropsWithChildren) => {
	return <SessionProvider>{children}</SessionProvider>;
};

export default AuthSession;
