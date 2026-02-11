'use client';

import { ReactNode } from 'react';

import { Box, Center, Stack } from '@mantine/core';

import { SystemNotificationBanner } from '@/components';
import PulseMark from '@/components/logo/PulseMark';

type AuthProps = {
  children: ReactNode;
};

function PasswordLayout({ children }: AuthProps) {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100vw',
      }}
    >
      <SystemNotificationBanner layout="auth" />
      <Center style={{ flex: 1 }}>
        <Stack>
          <Center>
            <PulseMark size={64} />
          </Center>
          {children}
        </Stack>
      </Center>
    </Box>
  );
}

export default PasswordLayout;
