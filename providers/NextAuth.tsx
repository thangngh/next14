'use client';

import { PropLayout } from '@interface/constraint.interface';
import { SessionProvider } from 'next-auth/react';

export function NextAuthProvider({ children }: PropLayout) {
    return <SessionProvider>{children}</SessionProvider>;
}
