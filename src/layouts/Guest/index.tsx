'use client';

import { ReactNode } from 'react';

import { AppShell, Box, useMantineTheme } from '@mantine/core';
import { useHeadroom } from '@mantine/hooks';

import { SystemNotificationBanner } from '@/components';

import HeaderNav from './HeaderNav/HeaderNav';
import FooterNav from './FooterNav/FooterNav';

type GuestLayoutProps = {
  children: ReactNode;
};

function GuestLayout({ children }: GuestLayoutProps) {
  const theme = useMantineTheme();
  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <>
      <SystemNotificationBanner layout="guest" />
      <AppShell header={{ height: 60, collapsed: !pinned, offset: false }}>
        <AppShell.Header
          style={{ backgroundColor: 'transparent', borderBottom: 'none' }}
        >
          <HeaderNav />
        </AppShell.Header>
        <AppShell.Main>
          <Box>{children}</Box>
          <FooterNav />
        </AppShell.Main>
      </AppShell>
    </>
  );
}

export default GuestLayout;
