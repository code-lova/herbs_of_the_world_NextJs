"use client";
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';
import { Session } from 'next-auth';

interface ProviderProps {
  children: ReactNode;
  session?: Session | null ; // Replace `any` with the appropriate type if you have a session type defined.
}

const Provider = ({ children, session }: ProviderProps) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
};

export default Provider;
